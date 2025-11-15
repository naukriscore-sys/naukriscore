import type { Request, Response } from "express";
import { responsePlate } from "../utils";
import { employeeProfileSchema } from "@repo/types/types";
import prisma from "@repo/db/db";

export const updateProfileRequest = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const verifiedUser = req.user;

    const employee = await prisma.employee.findFirst({
      where: {
        id: verifiedUser.userId,
      },
    });

    if (!employee) {
      return responsePlate(res, {
        message: "User not found",
        status: 400,
        success: false,
      });
    }

    const { data, success, error } = employeeProfileSchema.safeParse(req.body);

    if (!success) {
      return responsePlate(res, {
        message: error.issues
          .map((er) => `${er.path.join(".")}: ${er.message}`)
          .join(", "),
      });
    }

    const { designation, education, experience, languages, profileSummary } =
      data;

    await prisma.employee.update({
      where: {
        id: verifiedUser.userId,
      },
      data: {
        resumeDetails: {
          update: {
            educations: {
              create: education?.map((item) => {
                return {
                  degree: item.degree,
                  institution: item.institution,
                  type: item.type,
                  year: item.year,
                };
              }),
            },
            experiences: {
              create: experience?.map((item) => {
                return {
                  company: "",
                  description: "",
                  endDate: "",
                  liveLink: "",
                  startDate: "",
                  tenure: "",
                  title: "",
                };
              }),
            },
            designation,
          },
        },
        languages: languages ? languages : employee.languages,
        profileDesc: profileSummary,
      },
    });
  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      message: "Internal server error",
      success: false,
      status: 500,
    });
  }
};
