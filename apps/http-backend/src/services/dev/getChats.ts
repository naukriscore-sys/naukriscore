import prisma from "@repo/db/db";
import type { Request, Response } from "express";
import { responsePlate } from "../../utils";

export const getChats = async (req: Request, res: Response): Promise<any> => {
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
    message: "OK",
    data: chats,
    status: 200,
    success: true,
  });
};
