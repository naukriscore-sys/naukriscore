import type { Request, Response } from "express";
import { responsePlate } from "../utils";
import prisma from "@repo/db/db";

interface ToSendProps {
  name: string;
  description: string;
  points: number;
}

export const scoreSummaryRequest = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const verifiedUser = req.user;

    const employee = await prisma.employee.findFirst({
      where: {
        id: verifiedUser.userId,
      },
      include: {
        summary: true,
      },
    });

    if (!employee) {
      return responsePlate(res, {
        message: "Employee not found",
        status: 400,
        success: false,
      });
    }

    let data = new Map<string, { items: ToSendProps[] }>();

    employee.summary.map((item) => {
      if (item.belongsTo) {
        if (!data.has(item.belongsTo)) {
          data.set(item.belongsTo, { items: [] });
        }
        data.get(item.belongsTo)?.items.push({
          name: item.label,
          description: item.label,
          points: item.points,
        });
      }
    });

    const result = Array.from(data, ([name, value]) => ({
      name,
      items: value.items,
    }));

    return responsePlate(res, {
      message: "Summary found",
      status: 200,
      success: true,
      data: { result, score: employee.score },
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
