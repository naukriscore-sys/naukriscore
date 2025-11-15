import { intialScore } from "../algorithm/initialScoreAlgo/initialScore.js";
import { initialDatafromUserSchema } from "../zod/initalDataFromUserSchema.js";
import prisma from "@repo/db/db";
import { asyncLocal } from "@repo/async-context/async-context";

export const generateInitialscore = async (input: any) => {
  const userId = asyncLocal.getUserId();

  console.log("userId");
  console.log(userId);

  if (!userId) {
    return { success: false, type: "user_not_found", score: null };
  }

  const existingEmployee = await prisma.employee.findFirst({
    where: {
      id: userId,
    },
    include: {
      summary: true,
    },
  });

  console.log("existingEmployee");
  console.log(existingEmployee);

  if (!existingEmployee) {
    return { success: false, type: "user_not_found", score: null, summary: [] };
  }

  if (existingEmployee.score !== 0) {
    return {
      success: true,
      type: "score_generated",
      score: existingEmployee.score,
      summary: existingEmployee.summary,
    };
  }

  const { success, data } = initialDatafromUserSchema.safeParse(input);

  if (!success) {
    return {
      success: false,
      type: "validation_error",
      score: null,
      summary: [],
    };
  }

  const result = intialScore(data);

  console.log("result");
  console.log(result);

  if (result.summary.length === 0) {
    return {
      success: false,
      type: "no_score_summary_generated",
      score: null,
      summary: [],
    };
  }

  try {
    console.log("tool finally get called");
    await prisma.employee.update({
      where: { id: userId },
      data: {
        score: result.score,
        summary: { createMany: { data: result.summary } },
      },
    });
    return {
      success: true,
      type: "score_generated",
      score: result.score,
      summary: result.summary,
    };
  } catch (error) {
    console.log("tool not get called");
    console.log(error);
    return { success: false, type: "database_error", score: null, summary: [] };
  }
};
