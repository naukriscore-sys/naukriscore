import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        role: "employee" | "employer" | "admin";
        userId: string;
      };
    }
  }
}
