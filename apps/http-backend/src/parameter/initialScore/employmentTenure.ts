import type { ParameterType } from "../../algorithm/initialScoreAlgo/initialScore";

export const InitialScoreEmploymentTenure: ParameterType[] = [
    {
        key: "averageTenure",
        label: "Average Tenure",
        type: "number",
        severity: "high",
        behaviour: "positive",
        question: "Has the candidate maintained a stable average tenure across past roles?",
        validation: { allowed: [true, false] },
        belongsTo: "experience",
    },
    {
        key: "lastEmployerTenure",
        label: "Last Employer Tenure",
        type: "number",
        severity: "high",
        behaviour: "positive",
        question: "Did the candidate serve a reasonable tenure with their last employer?",
        validation: { allowed: [true, false] },
        belongsTo: "experience",
    },
];
