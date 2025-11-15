import type { ParameterType } from "../../algorithm/initialScoreAlgo/initialScore";

export const InitialScoreJoiningAndExit: ParameterType[] = [
    {
        key: "noticePeriodServedInFull",
        label: "Notice Period Served in Full (Last 3 Roles)",
        type: "number",
        severity: "elite",
        behaviour: "positive",
        question: "Has the candidate served the full notice period in their last 3 roles?",
        validation: { allowed: [true, false] },
        belongsTo: "joiningAndExit",
    },
    {
        key: "cleanHandoverDocumentation",
        label: "Clean Handover Documentation",
        type: "number",
        severity: "elite",
        behaviour: "positive",
        question: "Did the candidate provide complete and clean handover documentation during exits?",
        validation: { allowed: [true, false] },
        belongsTo: "joiningAndExit",
    },
    {
        key: "relievingLetterIssuedWithin30Days",
        label: "Relieving Letter Issued Within 30 Days",
        type: "number",
        severity: "elite",
        behaviour: "positive",
        question: "Was the relieving letter issued within 30 days of resignation in previous employment?",
        validation: { allowed: [true, false] },
        belongsTo: "joiningAndExit",
    },
    {
        key: "rehireStatusYesInAllPastEmployers",
        label: "Rehire Status = Yes in All Past Employers",
        type: "number",
        severity: "elite",
        behaviour: "positive",
        question: "Was the candidate eligible for rehire with all previous employers?",
        validation: { allowed: [true, false] },
        belongsTo: "joiningAndExit",
    }
];
