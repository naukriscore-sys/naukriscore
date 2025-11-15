import type { Request, Response } from "express";
import { uploadToImageKit } from "../utils/uploadThings";
import { responsePlate } from "../utils";
import prisma from "@repo/db/db";
import { resumeProcessing } from "../utils/resumeProcessing";

export const resumeUpload = async (req: Request, res: Response) => {
  try {
    // verified user from the middleware
    const verifiedUser = req.user;

    if (!req.file) {
      return responsePlate(res, {
        status: 400,
        success: false,
        message: "Please upload a file.",
      });
    }

    console.log("get the file by the user", req.file);

    let resumeUrl: string | null = null;

    try {
      resumeUrl = await uploadToImageKit(req.file, `employee-${verifiedUser.userId}-resume`);
    } catch (error) {
      console.log(error);
      return responsePlate(res, {
        message: "Something went wrong while uploading resume",
        status: 400,
        success: false,
      });
    }

    if (!resumeUrl) {
      return responsePlate(res, {
        status: 400,
        success: false,
        message: "Something went wrong while uploading your resume",
      });
    }

    console.log("reume uploaded", resumeUrl);

    try {
      const resume = await prisma.resumeDetails.upsert({
        where: {
          employeeId: verifiedUser.userId,
        },
        create: {
          status: "pending",
          employeeId: verifiedUser.userId,
          resumeUrl,
        },
        update: {
          status: "pending",
          employeeId: verifiedUser.userId,
          resumeUrl,
        },
      });
      resumeProcessing(req.file.buffer, resume.id, verifiedUser.userId);
    } catch (error) {
      console.log(error);
      return responsePlate(res, {
        message: "Something went wrong while adding resume in records",
        status: 400,
        success: false,
      });
    }

    return responsePlate(res, {
      message: "Resume uploaded successfully, now processing your resume",
      status: 201,
      success: true,
      data: resumeUrl,
    });
  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      message: "Internal Server Error",
      status: 500,
      success: false,
    });
  }
};
