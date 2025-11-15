import z from "zod";

const aadhaarRegex = /^[2-9][0-9]{11}$/;

export const employeeSignupSchema = z.object({
  name: z.string(),
  email: z.email("Invalid Email ID, Please Enter Valid Email ID"),
  number: z.string().regex(/^\d{10}$/, "Number must have exactly 10 digits"),
  password: z.string().min(6, "password must have minimum 6 character"),
  aadharNumber: z
    .string()
    .regex(aadhaarRegex, "Invalid Aadhaar number."),
});

export const employerSignupSchema = z.object({
  name: z.string(),
  email: z.email("Invalid Email ID, Please Enter Valid Email ID"),
  number: z.string().regex(/^\d{10}$/, "Number must have exactly 10 digits"),
  password: z.string().min(6, "password must have minimum 6 character"),
  companyName: z.string(),
  positionInCompany: z.string(),
  companyWebsite: z.string(),
  companyAddress: z.string(),
  companyCinNumber: z.string(),
  companyPanNumber: z.string(),
  companyGstNumber: z.string(),
});
