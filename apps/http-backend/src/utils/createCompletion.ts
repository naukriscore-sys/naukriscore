import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import type { Messages } from "@repo/types/types";

// Tools
import { generateInitialscoreTool } from "../tools/generateInitialscoreTool";
import { getCurrentDateTimeTool } from "../tools/getCurrentDateTimeTool";
// import { updateResumeDetailsTool } from "../tools/updateResumeDetailsTool";

export const createCompletion = async (
  messages: Messages[],
  cb: (chunk: string) => void,
  systemPrompt: string
) => {
  const model = new ChatOpenAI({
    model: "gpt-4.1",
    temperature: 1,
    apiKey: "YOUR_KEY",
  });

  // Create a LangGraph agent with tools
  const agent = createReactAgent({
    llm: model,
    tools: [generateInitialscoreTool, getCurrentDateTimeTool],
  });

  const langchainMessages = [
    { role: "system", content: systemPrompt },
    ...messages.map((m) => ({
      role: m.role,
      content: m.message,
    })),
  ];

  const result = await agent.invoke({ messages: langchainMessages });

  // 🔍 Extract the last AI message
  const aiMessage = result.messages?.findLast(
    (m: any) => m._getType?.() === "ai"
  );

  if (aiMessage?.content) {
    const content =
      typeof aiMessage.content === "string"
        ? aiMessage.content
        : JSON.stringify(aiMessage.content);

    // Stream the AI's message back
    cb(content);

    return {
      type: "message",
      data: content,
      success: true,
    };
  }

  // 🧩 Fallback
  return {
    type: "unknown",
    data: null,
    success: false,
  };
};
