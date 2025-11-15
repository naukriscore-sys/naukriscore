import { severity } from "../parameter/severity";
import type { Severity } from "@repo/db/db";

type statusType = "positive" | "negative";

export interface feedBackType {
  key: string;
  severity: Severity;
  status: statusType;
  description: string;
  label: string;
}

export const manipulateScore = (
  employeeId: string,
  feedbacks: feedBackType[],
  userScore: number,
) => {
  let updatedScore = userScore;
  const feedbackSummary = feedbacks!.map((feedback) => {
    const weightage = severity[feedback.severity] || 0;
    const points = feedback.status === "negative" ? -weightage : weightage;

    const prevScore = updatedScore;
    updatedScore = updatedScore + points

    return {
      key: feedback?.key,
      label: feedback?.label,
      prevScore: prevScore,
      updatedScore: updatedScore,
      points,
      severity: feedback.severity,
      employeeId: employeeId,
    };

  });

  return {
    score: updatedScore,
    feedbackSummary
  };
};

// dummy user data

// const user = {
//   score: 399,
//   summary: [
//     {
//       key: "account_creation",
//       label: "Score after generating your naukri score",
//       points: 100,
//     },
//     {
//       key: "background_verification",
//       label: "Score after completing your background checks",
//       points: 100,
//     },
//     {
//       key: "totalExperienceYears",
//       label: "Total Professional Experience (Years)",
//       points: 24.9,
//     },
//     {
//       key: "averageTenureYears",
//       label: "Average Tenure Per Employer (Years)",
//       points: 25,
//     },
//     {
//       key: "lastEmployerTenureYears",
//       label: "Tenure at Last Employer (Years)",
//       points: 14.28,
//     },
//     {
//       key: "jobsInLast5Years",
//       label: "Number of Jobs Held in Last 5 Years",
//       points: 14.28,
//     },
//     {
//       key: "longestSingleTenureYears",
//       label: "Longest Single Employer Tenure (Years)",
//       points: 14.28,
//     },
//     {
//       key: "employmentGapsMonths",
//       label: "Largest Employment Gap (Months)",
//       points: 25,
//     },
//     {
//       key: "promotionsCount",
//       label: "Number of Promotions (listed on CV)",
//       points: 25,
//     },
//     {
//       key: "servedFullNoticeLastExit",
//       label: "Served Full Notice Period at Last Exit",
//       points: 14.28,
//     },
//     {
//       key: "rehireEligibilityFromLastEmployer",
//       label: "Marked Eligible for Rehire by Last Employer",
//       points: 14.28,
//     },
//     {
//       key: "properHandoverDocumented",
//       label: "Handover / Knowledge Transfer Documented at Exit",
//       points: 14.28,
//     },
//     {
//       key: "joinedOnAgreedDate",
//       label: "Joined On Agreed Start Date (for last joining)",
//       points: 14.28,
//     },
//   ],
// };

const user = {
  score: 399,
  summary: [
    {
      key: "account_creation",
      label: "Score after generating your naukri score",
      points: 100,
      severity: "high",
    },
  ],
};
