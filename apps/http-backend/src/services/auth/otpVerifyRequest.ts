import type { Request, Response } from "express";
import { generateToken, responsePlate, setToken } from "../../utils";
import { otpStore } from "@repo/otp/otpStore";
import { otpVerifyRequestSchema } from "../../zod/auth/otpVerifyRequestSchema";
import prisma from "@repo/db/db";

export const otpVerifyRequest = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { data, success, error } = otpVerifyRequestSchema.safeParse(req.body);

    if (!success) {
      return responsePlate(res, {
        message: error.issues.map((er) => `${er.path}: ${er.message}`).join(""),
        success: false,
        status: 400,
      });
    }

    const { email, emailOtp, phoneOtp, role } = data;

    const existingUser = await prisma.employee.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return responsePlate(res, {
        status: 400,
        success: false,
        message: "User not found, please signup",
      });
    }

    const emailRes = await otpStore.verifyAndDeleteEmailOtp(
      existingUser.email,
      emailOtp
    );

    if (!emailRes.success) {
      return responsePlate(res, {
        message: emailRes.message,
        success: false,
        status: 400,
      });
    }

    const phoneRes = await otpStore.verifyAndDeletePhoneOtp(phoneOtp, role);

    if (!phoneRes.success) {
      return responsePlate(res, {
        message: phoneRes.message,
        success: false,
        status: 400,
      });
    }

    let token;

    try {
      token = generateToken({ userId: existingUser.id, role });
    } catch (error) {
      console.log(error);
      return responsePlate(res, {
        message: "unable to generate token",
        success: false,
        status: 400,
      });
    }

    setToken(res, token);

    return responsePlate(res, {
      message: "OTP verified successfully",
      data: {
        token,
        role,
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        number: existingUser.number,
        profileImg: existingUser.profileImg,
        chatId: existingUser.chatId,
        score: existingUser.score,
      },
      success: true,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      message: "internal server error",
      status: 500,
      success: false,
    });
  }
};
