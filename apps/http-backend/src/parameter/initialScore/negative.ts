import type { ParameterType } from "../../algorithm/initialScoreAlgo/initialScore";

export const InitialScoreNegativeParameters:ParameterType[] = [
    {
        key: "ghostingAfterOffer",
        label: "Ghosting After Offer",
        type: "boolean",
        severity: "elite",
        behaviour: "negative",
        question: "Has the candidate ever ghosted after receiving an offer?",
        validation: { allowed: [true, false] },
        belongsTo: "negative",
    },
    {
        key: "jobAbandonment",
        label: "Job Abandonment",
        type: "boolean",
        severity: "elite",
        behaviour: "negative",
        question: "Has the candidate ever abandoned a job without formal resignation?",
        validation: { allowed: [true, false] },
        belongsTo: "negative",
    },
    {
        key: "notServedNoticePeriod",
        label: "Not Served Notice Period",
        type: "boolean",
        severity: "elite",
        behaviour: "negative",
        question: "Did the candidate fail to serve their notice period?",
        validation: { allowed: [true, false] },
        belongsTo: "negative",
    },
    {
        key: "breachOfConfidentiality",
        label: "Breach of Confidentiality",
        type: "boolean",
        severity: "elite",
        behaviour: "negative",
        question: "Has the candidate ever breached confidentiality or mishandled sensitive data?",
        validation: { allowed: [true, false] },
        belongsTo: "negative",
    },
];
