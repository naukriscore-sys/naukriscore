import type { ParameterType } from "../../algorithm/initialScoreAlgo/initialScore";

export const InitialScoreExperience: ParameterType[] = [
    {
        key: "totalExperience",
        label: "Total Experience",
        type: "number",
        severity: "elite",
        behaviour: "positive",
        question: "Has the candidate’s total work experience been verified?",
        validation: { allowed: [true, false] },
        belongsTo: "experience",
    },
    {
        key: "employmentGap",
        label: "Employment Gap",
        type: "number",
        severity: "moderate",
        behaviour: "negative",
        question: "Has the candidate had any significant employment gaps in their career?",
        validation: { allowed: [true, false] },
        belongsTo: "experience",
    },
    {
        key: "noOfPromotion",
        label: "Number of Promotions",
        type: "number",
        severity: "high",
        behaviour: "positive",
        question: "How many promotions has the candidate received across their career?",
        validation: { allowed: "number" },
        belongsTo: "experience",
    }
];
