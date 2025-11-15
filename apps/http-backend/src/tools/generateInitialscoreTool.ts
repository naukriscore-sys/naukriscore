import { tool } from "@langchain/core/tools";
import { generateInitialscore } from "../services/generateIntitialScore";
import { initialDatafromUserSchema } from "../zod/initalDataFromUserSchema";

export const generateInitialscoreTool = tool(
  async (input: unknown) => {
    return await generateInitialscore(input);
  },
  {
    name: "generateInitialscore",
    description: `This service generates and stores a candidate’s **Initial Verified NaukriScore** based on verified documents, behavioral attributes, performance metrics, and experience data.

    It validates all inputs using **"initialDatafromUserSchema"** (powered by Zod) and applies a weighted algorithm via **"generateInitialscore()"**.

    ---

    ### 🧩 **Input Schema Fields**

    #### **1️⃣ Experience Metrics**
    - averageTenure (number)
    - lastEmployerTenure (number)
    - totalExperience (number)
    - employmentGap (number)
    - noOfPromotion (number)
    - numberOfPromotions (number)

    #### **2️⃣ Employment Behavior & Ethics**
    - noticePeriodServedInFull (boolean)
    - cleanHandoverDocumentation (boolean)
    - relievingLetterIssuedWithin30Days (boolean)
    - rehireStatusYesInAllPastEmployers (boolean)
    - ghostingAfterOffer (boolean)
    - jobAbandonment (boolean)
    - notServedNoticePeriod (boolean)
    - breachOfConfidentiality (boolean)
    - disputeFreeRecord (boolean)

    #### **3️⃣ Skills & Exposure**
    - designToolsKnowledge (boolean)
    - projectManagementTools (boolean)
    - workExperienceInMncs (boolean)
    - freelanceOrConsultingExperience (boolean)
    - languagesKnown (number)
    - linkedinProfileStrength (number)
    - researchPublications (boolean)
    - extracurricularParticipation (boolean)

    #### **4️⃣ Achievements & Recognition**
    - employeeOfTheMonthOrQuarter (boolean)
    - exceededPerformanceTargets (boolean)
    - highPeerFeedbackScore (boolean)

    #### **5️⃣ Document Upload Status (Verification Layer)**
    - isProfileImageUploaded (boolean)
    - isAadhaarUploaded (boolean)
    - isPANUploaded (boolean)
    - isOfferLetterUploaded (boolean)
    - isSalarySlipUploaded (boolean)
    - isRelievingLetterUploaded (boolean)
    - isPoliceVerificationUploaded (boolean)

    #### **6️⃣ Additional Fields**
    - additionalInformation (string | optional)
    - documents (array of string | optional)
    - profileImageFaceDetected (boolean | optional)
    - aadhaarOCR (object { name?, dob? } | optional)

    ---

    ### ⚙️ **Functionality**
    - Retrieves authenticated user ID via async context.
    - Validates input via Zod schema.
    - Persists score and summary in the database (Prisma ORM).
    - Uses weighted scoring logic from **generateInitialscore()**.
    - Marks document upload status flags for verification-aware scoring.

    ---

    ### 📦 **Response Types**
    | Type | Description |
    |------|--------------|
    | success: true, type: "score_generated" | Score successfully generated or already exists. |
    | success: false, type: "validation_error" | Input failed schema validation. |
    | success: false, type: "user_not_found" | User not found or not authenticated. |
    | success: false, type: "database_error" | Unexpected database failure occurred. |

    ---

    ### 💡 **Behavior**
    - Executes only for authenticated users.
    - Fully idempotent (prevents duplicate scores).
    - Integrates seamlessly with LangChain’s tool-calling pipeline.
    - Supports the new **multi-step verification flow (Steps 1–8)** including uploads and final scoring.
`,
    schema: initialDatafromUserSchema,
  }
);
