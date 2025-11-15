import z from "zod";

export const CreateChatSchema = z.object({
  message: z.string(),
  resume: z.string().optional(),
  chatType: z.enum(["manual", "resume"]),
});

export type role = "user" | "assistant";

export interface userType {}

export interface Messages {
  message: string;
  role: role;
}

export const loginRequestSchema = z.object({
  email: z.email(),
  userType: z.enum(["employee", "employer"]),
  password: z.string().min(4, "password it too short"),
});

export const employeeProfileSchema = z.object({
  designation: z.string().optional().nullable(),
  profileSummary: z.string().optional().nullable(),
  education: z
    .array(
      z.object({
        degree: z.string(),
        institution: z.string(),
        year: z.string().or(z.number()), // sometimes could be numeric
        type: z.string().optional().nullable(),
      })
    )
    .optional()
    .nullable(),
  languages: z.array(z.string()).optional().nullable(),
  experience: z
    .array(
      z.object({
        companyName: z.string(),
        tenure: z.string().optional().nullable(),
        duration: z.string(),
        title: z.string(),
        description: z.string().optional().nullable(),
        liveLink: z.string().url().optional().nullable(),
      })
    )
    .optional()
    .nullable(),
});
