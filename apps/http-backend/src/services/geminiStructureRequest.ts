import type { Request, Response } from "express";
import { aiResponse } from "../utils/aiResponse";
import { generateInitialscore } from "./generateIntitialScore";
import { responsePlate } from "../utils";

export const geminiStructureRequest = async (req: Request, res: Response) => {
  try {
    // result => { success: boolean, data: any }
    // example data from the AI
    // {
    //   success: true,
    //   data: {
    //     totalExperienceYears: 12,
    //     averageTenureYears: 2.5,
    //     lastEmployerTenureYears: 3,
    //     jobsInLast5Years: 3,
    //     longestSingleTenureYears: 4,
    //     employmentGapsMonths: 6,
    //     promotionsCount: 2,
    //     servedFullNoticeLastExit: true,
    //     rehireEligibilityFromLastEmployer: false,
    //     properHandoverDocumented: true,
    //     joinedOnAgreedDate: true,
    //   },
    // }

    const result = await aiResponse(req.body, "structure");
    console.log(result);

    if (result.success) {
      // this thing is working ( means no need to return anything from this endpoint )
      await generateInitialscore(result.data);
      return;
    }

    return responsePlate(res, {
      success: false,
      status: 400,
      message: "Unable to get message from AI",
    });
  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
};
