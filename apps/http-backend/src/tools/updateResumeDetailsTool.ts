import { tool } from "@langchain/core/tools";
import { updateResumeDetails } from "../services/updateResumeDetails";
import z from "zod";

export const updateResumeDetailsTool = tool(
  async (input: any) => {
    return await updateResumeDetails(input.resumeId, input.resumeData);
  },
  {
    name: "updateResumeDetails",
    description:
      "This tool is used once the AI has fully verified and structured a candidate’s resume information. It updates the candidate’s resume details in the database using the provided `resumeId` and `resumeData`. The tool ensures that the resume record is populated with accurate personal information, education history, work experiences, skills, projects, and social links. \n\nThe AI first extracts and validates the resume content, then passes it in a structured JSON format to this tool. The tool then stores or overwrites the existing resume details for the given `resumeId`. This ensures the database maintains a clean, structured, and up-to-date version of the candidate’s resume profile, which can later be used for profile building, scoring, or recommendation purposes.",
    schema: z.object({
      resumeId: z
        .string()
        .describe(
          "The unique identifier of the resume record in the database."
        ),
      resumeData: z.object({
        personalInfo: z.object({
          fullName: z.string().describe("The candidate's full name."),
          email: z.string().describe("The candidate's email address."),
          phone: z.string().describe("The candidate's phone number."),
        }),
        educations: z.array(
          z.object({
            degree: z.string().describe("Degree or qualification obtained."),
            institution: z
              .string()
              .describe("Name of the educational institution."),
            year: z.string().describe("Graduation or completion year."),
          })
        ),
        experiences: z.array(
          z.object({
            company: z.string().describe("Employer or company name."),
            title: z.string().describe("Job title or role held."),
            tenure: z.string().describe("tenure of the employment."),
          })
        ),
        skills: z.array(z.string().describe("List of candidate's skills.")),
        projects: z.array(
          z.object({
            name: z.string().describe("Name of the project."),
            description: z
              .string()
              .describe("Brief explanation of the project."),
            liveLink: z
              .string()
              .describe("Live URL or reference link to the project."),
            technologies: z.array(
              z.string().describe("Technologies used in the project.")
            ),
          })
        ),
        socialLinks: z.array(
          z.object({
            key: z
              .string()
              .describe("Type of social link, e.g., LinkedIn, GitHub."),
            value: z
              .string()
              .describe("The actual URL or identifier for the social link."),
          })
        ),
      }),
    }),
  }
);
