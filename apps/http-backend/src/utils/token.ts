import type { Response } from "express";
import jwt from "jsonwebtoken";

const secretKey = "Abcd@1234";

export const generateToken = (payload: {
  userId: string;
  role: "employee" | "employer";
}) => {
  return jwt.sign(payload, secretKey);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secretKey);
};

export const setToken = (res: Response, token: string) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
