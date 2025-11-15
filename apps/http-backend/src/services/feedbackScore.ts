import { config } from "dotenv";
config();
import type { Request, Response } from "express";
import { responsePlate } from "../utils";
import { feedbackScoreSchema } from "../zod/feedbackScoreSchema";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  manipulateScore,
  type feedBackType,
} from "../algorithm/manipulateScore";
import { prompt } from "../utils/prompt";
import prisma from "@repo/db/db";
import { feedbackParams } from "../parameter/feedbackParams";

// Gemini Client
const genAI = new GoogleGenerativeAI("AIzaSyCts46P346z8tJcmHdyknbdqwDUdnIJZ7A");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const feedbackScore = async (req: Request, res: Response) => {
  try {
    const { success, error, data } = feedbackScoreSchema.safeParse(req.body);

    if (!success) {
      return responsePlate(res, {
        message: "Validation failed",
        status: 411,
        success: false,
        data: error.issues.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      });
    }

    const { aadhaarNumber, isWorkedWithYou, keyPoints, message } = data;

    const existingEmployee = await prisma.employee.findUnique({
      where: {
        aadharNumber: aadhaarNumber,
      },
      include: {
        summary: true,
        feedback: true,
      },
    });

    if (!existingEmployee) {
      return responsePlate(res, {
        status: 400,
        success: false,
        message: "Employee not found with given AadhaarNumber " + aadhaarNumber,
      });
    }

    const notFindKeys = keyPoints.filter(
      (key) => feedbackParams[key] === undefined
    );

    const foundKeys = keyPoints
      .filter((key) => feedbackParams[key] !== undefined)
      .map((key) => feedbackParams[key]);

    const geminiResp = await model.generateContent(
      prompt(notFindKeys, message)
    );

    let geminiText = geminiResp.response.text();

    geminiText = geminiText.replace(/```json|```/g, "").trim();

    const geminiParsedRes = JSON.parse(geminiText);

    const finalParams = foundKeys.concat(geminiParsedRes) as feedBackType[];

    const feedbackResult = manipulateScore(
      existingEmployee?.id,
      finalParams,
      existingEmployee?.score
    );

    await prisma.employee.update({
      where: {
        aadharNumber: existingEmployee?.aadharNumber,
      },
      data: {
        score: feedbackResult.score,
        feedbackSummary: {
          createMany: {
            data: feedbackResult?.feedbackSummary.map((item) => ({
              key: item.key,
              label: item.label,
              points: item.points,
              updatedScore: item.updatedScore,
              prevScore: item.prevScore,
              severity: item.severity,
              feedbackId: "16f9f7f4-d62b-4e2d-b63c-dbfe7e2ade28",
            })),
          },
        },
      },
      include: {
        feedbackSummary: true,
      },
    });

    return responsePlate(res, {
      success: true,
      status: 200,
      message: "Feedback Submitted Successfully",
    });
  } catch (error) {
    console.log("somethings went wrong", error);
    return responsePlate(res, {
      success: false,
      status: 500,
      message: `Internal Server Error`,
    });
  }
};
