import type { NextFunction, Request, Response } from "express";
import { responsePlate, verifyToken } from "../utils";
import { asyncLocal } from "@repo/async-context/async-context";

export const commonMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    const bearerToken = token?.split("Bearer ")[1]!;

    let decodedToken: any;

    try {
      decodedToken = verifyToken(bearerToken);
    } catch (error) {
      console.log(error);
      return responsePlate(res, {
        message: "Unauthorized, please signup",
        status: 401,
        success: false,
      });
    }

    req.user = decodedToken;
    console.log("userid adding in the local storage", req.user.userId);
    asyncLocal.setUserId(req.user.userId);
    next();
  } catch (error) {
    console.log("employee middleware error => ", error);
    return responsePlate(res, {
      message: "Internal server error",
      status: 500,
      success: false,
    });
  }
};
