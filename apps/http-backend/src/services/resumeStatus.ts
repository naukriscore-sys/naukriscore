import prisma from "@repo/db/db";
import type { Request, Response } from "express";
import { responsePlate } from "../utils";

export const resumeStatus = async (req: Request, res: Response) => {
  const verifiedUser = req.user;

  let resumeId: string = "";

  // finding the resume from the backend
  try {
    const resume = await prisma.resumeDetails.findFirst({
      where: { employeeId: verifiedUser.userId },
      include: {
        educations: true,
        experiences: true,
        personalInfo: true,
        projects: true,
        skills: true,
        socialLinks: true,
      },
    });

    // returning if resume not found
    if (!resume) {
      return responsePlate(res, {
        message: "Unable to get your resume data",
        status: 400,
        success: false,
      });
    }

    resumeId = resume?.id;

    // returning if the status if pending
    if (resume.status === "pending") {
      return responsePlate(res, {
        message: "PENDING",
        status: 400,
        success: false,
      });
    }

    // returning if resume not found
    if (resume.status === "failed") {
      await prisma.resumeDetails.delete({
        where: {
          id: resume.id,
        },
      });

      return responsePlate(res, {
        message: "FAILED",
        status: 500,
        success: false,
      });
    }

    // returning if resume found or status is success
    if (resume.status === "success") {
      return responsePlate(res, {
        message: "OK",
        status: 200,
        success: true,
        data: resume,
      });
    }
  } catch (error) {
    await prisma.resumeDetails.delete({
      where: {
        id: resumeId,
      },
    });
    console.log(resumeId);
    return responsePlate(res, {
      message: "Internal server error",
      status: 500,
      success: false,
    });
  }
};
