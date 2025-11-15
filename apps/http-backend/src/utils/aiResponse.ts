import OpenAI from "openai";
import { STRUCTURE_PROMPT } from "./prompt";
import { RESUME_PARSER_PROMPT } from "../prompts/resume-parsing";

type inputType = "resume" | "structure";

export async function aiResponse(formData: any, type: inputType): Promise<any> {
  try {
    // Initialize OpenAI Client
    const client = new OpenAI({
      apiKey: "YOUR_KEY", // <-- keep secure
    });

    const prompt = `
${type === "resume" ? RESUME_PARSER_PROMPT : STRUCTURE_PROMPT}

**User Input Data**:
${formData}

Return ONLY ONE valid JSON object.
Do NOT include markdown fences, explanations, or extra text.
Only return pure JSON.
`;

    // Call OpenAI Chat Completion (GPT-4o mini is perfect for JSON)
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0, // determinism for JSON
    });

    const aiOutput = response?.choices[0]?.message?.content || "";

    if (!aiOutput) {
      throw new Error("Empty response from AI.");
    }

    // Remove code fences like ```json or ```
    const cleaned = aiOutput.replace(/```json|```/g, "").trim();

    // Extract only the first JSON object using regex
    const match = cleaned.match(/({[\s\S]*?})(?=\s*{|\s*$)/);

    if (!match) {
      throw new Error("No valid JSON object found in AI output.");
    }

    const jsonString = match[1];

    let parsedOutput: any;
    try {
      parsedOutput = JSON.parse(jsonString ?? "{}");
    } catch (parseError) {
      throw new Error("Failed to parse AI response as JSON.");
    }

    return { success: true, data: parsedOutput };
  } catch (error) {
    console.error("Error in AI Response:", error);
    return {
      success: false,
      error: (error as Error).message || "Failed to process AI response.",
    };
  }
}
