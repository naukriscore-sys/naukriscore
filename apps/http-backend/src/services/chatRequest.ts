import type { Request, Response } from "express";
import { CreateChatSchema } from "@repo/types/types";
import { responsePlate } from "../utils";
import prisma from "@repo/db/db";
import { chatStore } from "@repo/chat-store/chatStore";
import { createCompletion } from "../utils/createCompletion";

// FINAL VERSIONS FOR NOW 🙂
import { MANUAL_SCORE_PROMPT_V9 } from "../prompts/manual-score-v9";
import { RESUME_SCORE_PROMPT_V4 } from "../prompts/resume-score-v4";
import { MANUAL_SCORE_PROMPT_V10 } from "../prompts/manual-score-v10";
import { RESUME_SCORE_PROMPT_V5 } from "../prompts/resume-score-v5";
import { RESUME_SCORE_PROMPT_V6 } from "../prompts/resume-score-v6";
import { MANUAL_SCORE_PROMPT_V11 } from "../prompts/manual-score-v11";

export const chatRequest = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    // getting the user details from the middleware
    const verifiedUser = req.user;

    // validating the data send by the user
    const { success, data, error } = CreateChatSchema.safeParse({
      ...req.body,
      ...req.params,
    });

    console.log("zod errors", error);

    // returning if the data is invalid
    if (!success) {
      return responsePlate(res, {
        status: 400,
        success: false,
        message: error.issues.map((er) => `${er.path}: ${er.message}`).join(""),
      });
    }

    console.log("shcema verified");

    // finding the employee from the db for confirmation
    const existingEmployee = await prisma.employee.findUnique({
      where: {
        id: verifiedUser.userId,
      },
    });

    // returning if the employee not found
    if (!existingEmployee) {
      return responsePlate(res, {
        status: 400,
        success: false,
        message: "User not found",
      });
    }

    console.log("user found");

    // getting the messages from the inmemory store
    let existingMessages = chatStore.get(existingEmployee.chatId!);

    // if no messages found then getting from the db and then populating the in memory store
    if (existingMessages.length === 0) {
      const messages = await prisma.chats.findMany({
        where: {
          chatId: existingEmployee.chatId!,
        },
        orderBy: { createdAt: "asc" },
      });

      messages.map((msg) => {
        chatStore.add(existingEmployee.chatId!, {
          role: msg.role,
          message: msg.message,
        });
      });

      existingMessages = chatStore.get(existingEmployee.chatId!);
    }

    // message which will be set in the inmemory and db for the assistant role
    let message = "";

    try {
      if (data.chatType === "manual") {
        console.log("manual is running");
        console.log(data.message);
        await createCompletion(
          [...existingMessages, { message: data.message, role: "user" }],
          (chunk) => {
            message += chunk;
          },
          MANUAL_SCORE_PROMPT_V11
        );
      } else if (data.chatType === "resume") {
        console.log("resume is running");
        console.log(data.message);
        console.log(data.resume);
        if (data.resume) {
          await createCompletion(
            [
              ...existingMessages,
              {
                message:
                  "Below is the data which is extracted from the user's resume now carry on the rest of the conversation.",
                role: "assistant",
              },
              { message: data.resume, role: "assistant" },
              { message: data.message, role: "user" },
            ],
            (chunk) => {
              message += chunk;
            },
            RESUME_SCORE_PROMPT_V6
          );
        } else {
          await createCompletion(
            [...existingMessages, { message: data.message, role: "user" }],
            (chunk) => {
              message += chunk;
            },
            RESUME_SCORE_PROMPT_V6
          );
        }
      }
    } catch (error) {
      console.log("somethings went wrong, ", error);
      return responsePlate(res, {
        status: 400,
        success: false,
        message: "unable to get message from AI",
      });
    }

    console.log("user message =>", data.message);
    console.log("ai response =>", message);

    chatStore.add(existingEmployee.chatId!, {
      role: "user",
      message: data.message,
    });

    if (data.resume) {
      chatStore.add(existingEmployee.chatId!, {
        role: "assistant",
        message: data.resume,
      });
    }

    chatStore.add(existingEmployee.chatId!, {
      role: "assistant",
      message: message,
    });

    try {
      // adding the messages for both user and assistant in the db
      if (data.resume) {
        await prisma.chats.createMany({
          data: [
            {
              role: "user",
              message: data.message,
              chatId: existingEmployee.chatId!,
              type: "profile",
              employeeId: existingEmployee.id,
            },
            {
              role: "assistant",
              message: data.resume,
              chatId: existingEmployee.chatId!,
              type: "profile",
              employeeId: existingEmployee.id,
            },
            {
              role: "assistant",
              message: message,
              type: "profile",
              chatId: existingEmployee.chatId!,
              employeeId: existingEmployee.id,
            },
          ],
        });
      } else {
        await prisma.chats.createMany({
          data: [
            {
              role: "user",
              message: data.message,
              chatId: existingEmployee.chatId!,
              type: "profile",
              employeeId: existingEmployee.id,
            },
            {
              role: "assistant",
              message: message,
              type: "profile",
              chatId: existingEmployee.chatId!,
              employeeId: existingEmployee.id,
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);
      return responsePlate(res, {
        message: "unable to store in DB",
        status: 403,
        success: false,
      });
    }

    return responsePlate(res, {
      status: 200,
      success: true,
      message: "OK",
      // ai's message
      data: message,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};
