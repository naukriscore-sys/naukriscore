import type { Request, Response } from "express";
import { responsePlate } from "../utils";
import prisma from "@repo/db/db";

export const getChatsRequest = async (req: Request, res: Response) => {
  try {
    const verifiedUser = req.user;

    const chats = await prisma.chats.findMany({
      where: {
        employeeId: verifiedUser.userId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return responsePlate(res, {
      message: "Chats found",
      status: 200,
      success: true,
      data: chats.map((ch) => ({
        sender: ch.role,
        text: ch.message,
        createdAt: ch.createdAt,
      })),
    });
  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      message: "Internal server error",
      status: 500,
      success: false,
    });
  }
};
