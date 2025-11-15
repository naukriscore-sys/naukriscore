import type { Request, Response } from "express";
import { responsePlate } from "../utils/responsePlate";
import { calculateScore } from "../utils/trainModel";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini Client
const genAI = new GoogleGenerativeAI("AIzaSyCts46P346z8tJcmHdyknbdqwDUdnIJZ7A");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const nlpInitialScore = async (req: Request, res: Response) => {
  try {
    const resumeText = req.body.resume as string;
    if (!resumeText) {
      return responsePlate(res, {
        success: false,
        message: "Resume text is required",
        status: 400,
      });
    }

    // 1. Prompt Gemini for strict JSON
    const prompt = `
    Analyze the following resume and return a JSON object with the following structure:

    {
      "positives": ["point1", "point2", ...],
      "negatives": ["point1", "point2", ...],
      "recommendations": ["point1", "point2", ...]
    }

    Resume:
    ${resumeText}
    Only return valid JSON, no extra text.
    `;

    const geminiResp = await model.generateContent(prompt);
    const geminiText = geminiResp.response.text();
    console.log("Gemini Raw Output:\n", geminiText);

    let geminiAnalysis: {
      positives: string[];
      negatives: string[];
      recommendations: string[];
    };

    try {
      // Clean Gemini response (remove ```json ... ``` wrappers if present)
      let cleanText = geminiText.trim();
      if (cleanText.startsWith("```")) {
        cleanText = cleanText
          .replace(/```json/gi, "")
          .replace(/```/g, "")
          .trim();
      }

      geminiAnalysis = JSON.parse(cleanText);
    } catch (err) {
      console.warn(
        "Failed to parse JSON, falling back to empty structure",
        err
      );
      geminiAnalysis = { positives: [], negatives: [], recommendations: [] };
    }

    // 2. Score Positives
    const nlpResults: any[] = [];
    for (const pos of geminiAnalysis.positives) {
      const r = await calculateScore(pos);
      nlpResults.push(r);
    }

    return responsePlate(res, {
      success: true,
      message: "OK",
      status: 200,
      data: {
        geminiAnalysis,
        nlpResults,
      },
    });
  } catch (error) {
    console.error("NLP error", error);
    return responsePlate(res, {
      success: false,
      message: "internal server error",
      status: 500,
    });
  }
};
