import prisma from "@repo/db/db";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// for sending otps on phone number
const email = "admin@random.com";
const customerId = "C-83621cccF4FB084F8";
const key ="TWFjcm8yM8A7Ag==";

class OtpStore {
  // instance for getting a singeleton everytime
  private static instance: OtpStore | null;

  // for storing the token getting for the phone number thing
  public token: string | null;

  // for verification of phone number thing
  public verificationId: string | null;

  // initializing token and verificationId with null values
  private constructor() {
    this.token = null;
    this.verificationId = null;
  }

  // for getting a singeleton everytime
  public static getInstance(): OtpStore {
    if (!OtpStore.instance) {
      OtpStore.instance = new OtpStore();
    }
    return OtpStore.instance;
  }

  // email things for sending and verifying otps
  public async generateOtpForEmail(
    input: string,
    userName: string
  ): Promise<boolean> {
    try {
      const otp = await this.saveAndReturnOtp(input, 5);
      const name = this.capitalize(userName);

      try {
        // nodemailer code
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "random@gmail.com",
            pass: "kmlz rdak 2222 1111",
          },
        });

        const readHTMLTemplate = async (
          path: string,
          callback: (err: any | null, html?: any) => Promise<boolean>
        ): Promise<boolean> => {
          return new Promise<boolean>((resolve) => {
            fs.readFile(path, { encoding: "utf-8" }, async (err, html) => {
              if (err) {
                resolve(await callback(err));
              }
              resolve(await callback(null, html));
            });
          });
        };

        const finalRes = await readHTMLTemplate(
          __dirname + "/email.html",
          async (err, html) => {
            if (err) {
              console.error("Error reading HTML template:", err);
              return false;
            }

            const template = handlebars.compile(html);

            const replacements = {
              name,
              otp,
            };

            const htmlToSend = template(replacements);

            const info = await transporter.sendMail({
              from: '"Naukri Score" <random@gmail.com>',
              to: input,
              subject: "Test 🙏",
              text: "hello", // plain‑text body,
              html: htmlToSend,
            });

            console.log("Message sent:", info.messageId);
            return true;
          }
        );
        return finalRes;
      } catch (emailError) {
        console.log(emailError);
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  public async verifyAndDeleteEmailOtp(
    input: string,
    otp: string
  ): Promise<{ success: boolean; message: string }> {
    // finding the otp with the unique input
    const record = await prisma.otp.findUnique({ where: { input } });

    // if record not found then returning false
    if (!record) {
      return { success: false, message: "Email OTP is invalid" };
    }

    // if otp is expired then returning false
    if (new Date() > record.expiresAt) {
      await prisma.otp.delete({ where: { input } });
      return { success: false, message: "Email OTP is expired" };
    }

    // if otp in db is equal to the recent otp
    if (record.otp === otp) {
      await prisma.otp.delete({ where: { input } });
      return { success: true, message: "Email OTP verified" };
    }

    // else returning false
    return { success: false, message: "Email OTP is invalid" };
  }

  // phone number things for sending and verifying otps
  public async generateToken(): Promise<{ status: number; token: string }> {
    try {
      if (
        typeof email === "undefined" ||
        typeof customerId === "undefined" ||
        typeof key === "undefined"
      ) {
        return { status: 500, token: "" };
      }
      // for generating token before sending otp
      const res = await fetch(
        `https://cpaas.messagecentral.com/auth/v1/authentication/token?customerId=${customerId}&key=${key}&scope=NEW&country=91&email=${email}`,
        {
          credentials: "include",
          method: "GET",
        }
      );

      const data = await res.json();
      return data as { status: number; token: string };
    } catch (error) {
      console.log(error);
      return { status: 500, token: "" };
    }
  }

  public async generateOtpForPhone(input: string): Promise<boolean> {
    try {
      const data = await this.generateToken();

      if (data.status !== 200) {
        return false;
      }

      this.token = data.token;

      // for sending otp to user's phone number
      const res2 = await fetch(
        `https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&flowType=SMS&mobileNumber=${input}&otpLength=6`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            authToken: data.token,
          },
        }
      );

      const data2 = (await res2.json()) as {
        responseCode: number;
        message: string;
        data: {
          verificationId: string;
          mobileNumber: string;
          responseCode: string;
          errorMessage?: null;
          timeout: string;
          smCLI?: null;
          transactionId: string;
        };
      };

      if (data2.responseCode !== 200) {
        return false;
      }

      this.verificationId = data2.data.verificationId;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public async verifyAndDeletePhoneOtp(
    otp: string,
    role: "employee" | "employer" | null
  ): Promise<{ success: boolean; message: string }> {
    if (!this.token || !this.verificationId) {
      return { success: false, message: "Invalid OTP" };
    }

    const res = await fetch(
      `https://cpaas.messagecentral.com/verification/v3/validateOtp?&verificationId=${this.verificationId}&code=${otp}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          authToken: this.token,
        },
      }
    );

    const data = (await res.json()) as {
      responseCode: number;
      message: string;
      data: {
        verificationId: string;
        mobileNumber: string;
        responseCode: string;
        errorMessage?: null;
        verificationStatus: string;
        authToken: null;
        transactionId: string;
      };
    };

    console.log(data);

    if (data.responseCode !== 200) {
      return {
        success: false,
        message: data.message,
      };
    }

    if (role === "employee") {
      await prisma.employee.update({
        where: {
          number: data.data.mobileNumber,
        },
        data: {
          isVerified: true,
        },
      });
      return { success: true, message: "Phone OTP verified" };
    } else if (role === "employer") {
      await prisma.employer.update({
        where: {
          number: data.data.mobileNumber,
        },
        data: {
          isVerified: true,
        },
      });
      return { success: true, message: "Phone OTP verified" };
    } else if (role === null) {
      return { success: true, message: "Phone OTP verified" };
    }

    return { success: false, message: "Phone Invalid OTP" };
  }

  // ------- Utility functions ------------
  public async saveAndReturnOtp(
    input: string, // unique input eg: email or phonenumber
    expiryMinutes: number
  ): Promise<string> {
    // a reusable fn for generating otp on the basis of length
    const otp = this.generateNumricOtp();

    // setting the expiry time
    const expiresAt = new Date(Date.now() + expiryMinutes * 60 * 1000);

    // upserting in the dp
    await prisma.otp.upsert({
      where: { input },
      update: { otp, expiresAt },
      create: { input, otp, expiresAt },
    });

    // returning the otp
    return otp;
  }

  private generateNumricOtp(): string {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join(
      ""
    );
  }

  private capitalize(input: string) {
    return input
      .split(" ")
      .map((prev) => prev.charAt(0).toUpperCase() + prev.slice(1).toLowerCase())
      .join(" ");
  }
}

export const otpStore = OtpStore.getInstance();
