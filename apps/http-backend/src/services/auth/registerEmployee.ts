import type { Request, Response } from "express";
import { employeeSignupSchema } from "../../zod";
import { createHashPassword, responsePlate } from "../../utils";
import prisma from "@repo/db/db";
import { updateProfileImage } from "../../utils/updateEmployeeProfileImage";
import { otpStore } from "@repo/otp/otpStore";

export const registerEmployee = async (req: Request, res: Response) => {
  try {
    // retuning if the files not present which we needs for the profile image upload
    // if (!req.file) {
    //   return responsePlate(res, {
    //     success: false,
    //     message: "please upload files",
    //     status: 400,
    //   });
    // }

    // parsing the data received from the frontend
    const { success, data, error } = employeeSignupSchema.safeParse(req.body);

    // returning if some errors occured
    if (!success) {
      return responsePlate(res, {
        success: false,
        message: error.issues.map((er) => `${er.path}: ${er.message}`).join(""),
        status: 400,
      });
    }

    // destructuring the data from the zod data
    const { name, email, number, password, aadharNumber } = data;

    // triming the reponse for avoiding incosistency
    const trimmedEmail = email.trim().toLowerCase();

    // finding the first employee with the same, email, number
    const existingUser = await prisma.employee.findFirst({
      where: {
        OR: [{ email: trimmedEmail }, { number }, { aadharNumber }],
      },
    });

    // if the employee is in our DB and also verified then retuning it
    if (existingUser && existingUser.isVerified) {
      if (existingUser.email === trimmedEmail) {
        return responsePlate(res, {
          message: "Email is already registered",
          success: false,
          status: 400,
        });
      } else if (existingUser.number === number) {
        return responsePlate(res, {
          message: "Phone number is already registered",
          success: false,
          status: 400,
        });
      } else if (existingUser.aadharNumber === aadharNumber) {
        return responsePlate(res, {
          message: "Aadhaar number is already registered",
          success: false,
          status: 400,
        });
      }
    }

    // but if the user is not verified then updating the user and then sending OTP
    else if (existingUser && !existingUser.isVerified) {
      const hashedPassword = await createHashPassword(password);

      let updatedUser;

      try {
        updatedUser = await prisma.employee.update({
          where: {
            id: existingUser.id,
          },
          data: {
            name,
            email: trimmedEmail,
            number,
            password: hashedPassword,
            aadharNumber,
            score: 0,
          },
        });
      } catch (error) {
        console.log("error while updating user's details => ", error);
        return responsePlate(res, {
          message: "unable to update user's details",
          success: false,
          status: 400,
        });
      }

      // updateProfileImage(updatedUser.id, req.file, "employee");

      const emailRes = await otpStore.generateOtpForEmail(
        updatedUser?.email,
        updatedUser?.name
      );

      if (!emailRes) {
        return responsePlate(res, {
          message: "unable to send OTP on your email " + updatedUser?.email,
          status: 400,
          success: false,
        });
      }

      const phoneRes = await otpStore.generateOtpForPhone(updatedUser?.number);

      if (!phoneRes) {
        return responsePlate(res, {
          message:
            "unable to send OTP on your phone number " + updatedUser?.number,
          status: 400,
          success: false,
        });
      }

      return responsePlate(res, {
        success: true,
        status: 200,
        message: "OTP sent successfully on your phone number and email",
      });
    }

    // if the user is not found in the above cases then the user is new, then we have to create it in our database

    // hashing the password
    const hashedPassword = await createHashPassword(password);

    let newUser;

    // creating a new user
    try {
      newUser = await prisma.employee.create({
        data: {
          name,
          email: trimmedEmail,
          number,
          password: hashedPassword,
          aadharNumber,
          score: 0,
        },
      });
    } catch (error) {
      console.log(error);
      return responsePlate(res, {
        status: 400,
        success: false,
        message: "unable to store user in database.",
      });
    }

    // starting an asynchronous process for updating user's profile
    // updateProfileImage(newUser.id, req.file, "employee");

    // sending opt on the user's email
    const emailRes = await otpStore.generateOtpForEmail(
      newUser.email,
      newUser.name
    );

    if (!emailRes) {
      return responsePlate(res, {
        message: "unable to send OTP on your email " + newUser.email,
        status: 400,
        success: false,
      });
    }

    // sending opt on the user's phone number
    const phoneRes = await otpStore.generateOtpForPhone(newUser.number);

    if (!phoneRes) {
      return responsePlate(res, {
        message: "unable to send OTP on your phone number " + newUser.number,
        status: 400,
        success: false,
      });
    }

    return responsePlate(res, {
      success: true,
      status: 200,
      message: "OTP sent successfully on your phone number and email",
    });
  } catch (err) {
    console.error("Something went wrong while registering a new user -> ", err);
    return responsePlate(res, {
      message:
        "Something went wrong while registering a new user please try again",
      success: false,
      status: 500,
    });
  }
};
