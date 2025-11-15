import z from "zod";

export const employeeDocumentSchema = z.object({
  documentType: z.enum([
    "profilePhoto",
    "aadhaarCard",
    "panCard",
    "offerLetter",
    "salarySlip",
    "relievingLetter",
    "declarationForm",
  ]),
});

export type employeeDocumentType = z.infer<typeof employeeDocumentSchema>;
