import type { Request, Response } from "express";
import {
  generateToken,
  responsePlate,
  setToken,
  verifyPassword,
} from "../../utils";
import prisma from "@repo/db/db";
import { loginRequestSchema } from "@repo/types/types";

export const loginRequest = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { data, success, error } = loginRequestSchema.safeParse(req.body);

    if (!success) {
      return responsePlate(res, {
        success: false,
        status: 400,
        message: error.issues.map((er) => `${er.path}: ${er.message}`).join(""),
      });
    }

    const { email, password, userType } = data;

    let user;

    let score: number = 0;

    let dataToSend;

    if (userType === "employee") {
      user = await prisma.employee.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return responsePlate(res, {
          message: "User not found with this Email, Please try again",
          status: 400,
          success: false,
        });
      }

      score = user.score;

      dataToSend = {
        id: user.id,
        name: user.name,
        email: user.email,
        number: user.number,
        profileImg: user.profileImg,
        chatId: user.chatId,
        score: user.score,
      };
    } else if (userType === "employer") {
      user = await prisma.employer.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return responsePlate(res, {
          message: "User not found with this Email, Please try again",
          status: 400,
          success: false,
        });
      }

      dataToSend = {};
    }

    if (!user) {
      return responsePlate(res, {
        message: "User not found with this Email, Please try again",
        status: 400,
        success: false,
      });
    }

    const isPasswordRight = await verifyPassword(password, user?.password);

    if (!isPasswordRight) {
      return responsePlate(res, {
        message: "wrong password, please try again",
        status: 400,
        success: false,
      });
    }

    let token;

    try {
      token = generateToken({ userId: user.id, role: userType });
    } catch (error) {
      console.log(error);
      return responsePlate(res, {
        message: "unable to generate token",
        status: 400,
        success: false,
      });
    }

    setToken(res, token);

    const redirectUrl: string = score === 0 ? "/profile-builder" : "/dashboard";

    if (userType === "employee") {
      return responsePlate(res, {
        message: "login successfull",
        success: true,
        status: 200,
        data: {
          ...dataToSend,
          redirectUrl,
          token,
          role: userType,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      status: 500,
      success: false,
      message: "internal server error",
    });
  }
};
