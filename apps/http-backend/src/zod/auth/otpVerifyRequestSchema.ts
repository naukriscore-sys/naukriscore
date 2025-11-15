import z from "zod";

export const otpVerifyRequestSchema = z.object({
  email: z.email(),
  emailOtp: z.string().regex(/^\d{6}$/, "OTP must be a 6-digit number"),
  phoneOtp: z.string().regex(/^\d{6}$/, "OTP must be a 6-digit number"),
  role: z.enum(["employee", "employer"]),
});
