import type { ParameterType } from "../../algorithm/initialScoreAlgo/initialScore";

export const InitialScoreAccountCreation: ParameterType[] = [
    {
        key: "emailIdVerify",
        label: "Email ID Verified",
        type: "number",
        severity: "critical",
        behaviour: "positive",
        question: "Has the candidate’s email ID been verified?",
        validation: { allowed: [true, false] },
        belongsTo: "accountCreation",
    },
    {
        key: "phoneVerify",
        label: "Phone Number Verified",
        type: "number",
        severity: "critical",
        behaviour: "positive",
        question: "Has the candidate’s phone number been verified?",
        validation: { allowed: [true, false] },
        belongsTo: "accountCreation",
    },
    {
        key: "aadharVerify",
        label: "Aadhaar Verified",
        type: "number",
        severity: "critical",
        behaviour: "positive",
        question: "Has the candidate’s Aadhaar been verified?",
        validation: { allowed: [true, false] },
        belongsTo: "accountCreation",
    },
];
