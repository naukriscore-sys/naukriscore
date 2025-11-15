import { z } from "zod";

export const initialDatafromUserSchema = z.object({
  // 1️⃣ Experience Metrics (Derived Automatically but Required for Validation)
  averageTenure: z.number(),
  lastEmployerTenure: z.number(),
  totalExperience: z.number(),
  employmentGap: z.number(),
  noOfPromotion: z.number(),
  numberOfPromotions: z.number(),

  // 2️⃣ Employment Behavior & Exit Conduct
  noticePeriodServedInFull: z.boolean(),
  cleanHandoverDocumentation: z.boolean(),
  relievingLetterIssuedWithin30Days: z.boolean(),
  rehireStatusYesInAllPastEmployers: z.boolean(),
  ghostingAfterOffer: z.boolean(),
  jobAbandonment: z.boolean(),
  notServedNoticePeriod: z.boolean(),
  breachOfConfidentiality: z.boolean(),
  disputeFreeRecord: z.boolean(),

  // 3️⃣ Skills & Exposure
  designToolsKnowledge: z.boolean(),
  projectManagementTools: z.boolean(),
  workExperienceInMncs: z.boolean(),
  freelanceOrConsultingExperience: z.boolean(),
  languagesKnown: z.number(),
  linkedinProfileStrength: z.number(),
  researchPublications: z.boolean(),
  extracurricularParticipation: z.boolean(),

  // 4️⃣ Achievements & Recognition
  employeeOfTheMonthOrQuarter: z.boolean(),
  exceededPerformanceTargets: z.boolean(),
  highPeerFeedbackScore: z.boolean(),

  // 5️⃣ Document Upload Status (New Verification Booleans)
  isProfileImageUploaded: z.boolean().optional(),
  isAadhaarUploaded: z.boolean().optional(),
  isPANUploaded: z.boolean().optional(),
  isOfferLetterUploaded: z.boolean().optional(),
  isSalarySlipUploaded: z.boolean().optional(),
  isRelievingLetterUploaded: z.boolean().optional(),
  isPoliceVerificationUploaded: z.boolean().optional(),

  // 6️⃣ Additional / Metadata Fields
  additionalInformation: z.string().optional(), // from Step 7 (optional)
  documents: z.array(z.string()).optional(), // document IDs, URLs, or references

  // Optional OCR or face-check metadata (future)
  profileImageFaceDetected: z.boolean().optional(),
  aadhaarOCR: z
    .object({
      name: z.string().optional(),
      dob: z.string().optional(),
    })
    .optional(),
});

// Infer the TypeScript type from the schema
export type initialDatafromUserTypes = z.infer<
  typeof initialDatafromUserSchema
>;
