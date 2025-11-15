import { GoogleGenerativeAI } from "@google/generative-ai";
import { DOCUMENT_PARSER_PROMPT } from "../prompts/document-parser-prompt";

export async function aiDocumentResponse(formData: any): Promise<any> {
  try {
    // Initialize Google Generative AI
    const genAI = new GoogleGenerativeAI(
      "AIzaSyCts46P346z8tJcmHdyknbdqwDUdnIJZ7A"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
       ${DOCUMENT_PARSER_PROMPT}
      **User Input Data**:
      ${formData}
      "Return ONLY ONE valid JSON. Do NOT explain, do NOT add markdown, do NOT include anything outside the JSON object."
    `;

    // Generate AI response
    const result = await model.generateContent(prompt);
    const aiOutput = result.response.text();

    if (!aiOutput) {
      throw new Error("No response from AI.");
    }
    // Remove all markdown code fences
    const cleaned = aiOutput.replace(/```json|```/g, "").trim();

    // Use regex to extract the first JSON object (stops at end of first valid })
    const match = cleaned.match(/({[\s\S]*?})(?=\s*{|\s*$)/);

    if (!match) {
      throw new Error("No valid JSON object found in AI output.");
    }

    const jsonString = match[1]; // This is now the first valid JSON object

    if (!jsonString) {
      throw new Error("No valid JSON object found in AI output.");
    }
    let parsedOutput: any;
    try {
      parsedOutput = JSON.parse(jsonString);
    } catch (parseError) {
      throw new Error(`Failed to parse AI response as JSON`);
    }

    return { success: true, data: parsedOutput };
  } catch (error) {
    console.error("Error in AI Response:", error);
    return {
      success: false,
      error: (error as Error).message || "Failed to process data.",
    };
  }
}
