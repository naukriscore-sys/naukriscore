import type { Request, Response } from "express";
import { responsePlate } from "../utils";
import prisma from "@repo/db/db";

export const getProfileRequest = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const verifiedUser = req.user;

    let dataToSend;

    if (verifiedUser.role === "employee") {
      const employee = await prisma.employee.findFirst({
        where: {
          id: verifiedUser.userId,
        },
        include: {
          resumeDetails: {
            include: {
              educations: true,
              experiences: true,
              personalInfo: true,
              projects: true,
              socialLinks: true,
              skills: true,
            },
          },
        },
      });

      if (!employee) {
        return responsePlate(res, {
          message: "user not found, please signup",
          status: 404,
          success: false,
        });
      }

      dataToSend = {
        name: employee.name,
        email: employee.email,
        designation: employee.resumeDetails?.designation ?? "",
        resumeUrl: employee.resumeDetails?.resumeUrl ?? "",
        companyName: employee.resumeDetails?.experiences[0]?.company ?? "",
        institutionTitle:
          employee.resumeDetails?.educations[0]?.institution ?? "",
        number: employee.number,
        profileImg: employee.profileImg,
        score: Number(employee.score.toFixed(0)),
        updatedAt: employee.updatedAt,
        profileSummary: employee.profileDesc,
        education: employee.resumeDetails?.educations.map((item) => ({
          degree: item.degree,
          institution: item.institution,
          year: item.year,
          type: item.type ?? "",
        })),
        languages: employee.languages,
        experience: employee.resumeDetails?.experiences.map((item) => ({
          companyName: item.company,
          tenure: item.tenure,
          duration: `${item.startDate}-${item.endDate}`,
          title: item.title,
          description: item.description ?? "",
          liveLink: item.liveLink ?? "",
        })),
      };
    } else if (verifiedUser.role === "employer") {
      return res.status(204);
    }

    console.log("data to send", dataToSend);
    return responsePlate(res, {
      message: "profile found",
      data: dataToSend,
      status: 200,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      message: "Internal server error",
      status: 500,
      success: false,
    });
  }
};
