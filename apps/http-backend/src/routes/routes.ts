import { Router } from "express";
import multer from "multer";
import { chatRequest } from "../services/chatRequest";
import { resumeUpload } from "../services/resumeUpload";
import { resumeStatus } from "../services/resumeStatus";
import { getChatsRequest } from "../services/getChatsRequest";
import { loginRequest, registerEmployee } from "../services";
import { registerEmployer } from "../services/auth/registerEmployer";
import { otpVerifyRequest } from "../services/auth/otpVerifyRequest";
import { scoreSummaryRequest } from "../services/scoreSummaryRequest";
import { employeeMiddleware } from "../middleware/employee";
import { commonMiddleware } from "../middleware/common";
import { getProfileRequest } from "../services/getProfileRequest";
import { updateProfileRequest } from "../services/updateProfileRequest";
import { intialScore } from "../algorithm/initialScoreAlgo/initialScore";
import { getChats } from "../services/dev/getChats";
import { commonDocumentUploads } from "../services/employeeDocumentUploads";

export const routes = Router();

const upload = multer({ storage: multer.memoryStorage() });

// this will upload and parse the resume details and save it in the db
routes.post(
  "/resume-upload",
  upload.single("resume"),
  employeeMiddleware,
  resumeUpload
);

// this will upload the employee documents and save it in the db
routes.post(
  "/common-documents-upload/:documentType",
  upload.any(),
  commonMiddleware,
  commonDocumentUploads
);

// we will pool this for getting the resume status and data in the stream form
routes.get("/resume-status", employeeMiddleware, resumeStatus);

// for getting all the summary of an employee
routes.get("/score-summary", employeeMiddleware, scoreSummaryRequest);

// this will be used when giving feedback to the employee by the employer
// routes.post("/feedbackscore", feedbackScore);

// this will be the request for chatting with the ai
routes.post("/chat/:chatType", employeeMiddleware, chatRequest);

// we will use this request to get chats while building profile so that on reload we donot loose data
routes.get("/get-chats", employeeMiddleware, getChatsRequest);

// login
routes.post("/login", loginRequest);

// otp-verify
routes.post("/otp-verify", otpVerifyRequest);

// to register an employee
routes.post(
  "/employee-register",
  // upload.single("profileImage"),
  registerEmployee
);

// to register an employee
routes.post(
  "/employer-register",
  // upload.single("profileImage"),
  registerEmployer
);

// to register an employee
routes.get("/profile", commonMiddleware, getProfileRequest);

// to get all chats of an employee JUST FOR DEV
routes.get("/all-chats", employeeMiddleware, getChats);

// to update an employee's profile (PENDING)
routes.patch("/profile", commonMiddleware, updateProfileRequest);

// for developement purposes....
routes.post("/initialScore", intialScore);
