import type { ParameterType } from "../initialScore"
import { Experience } from "./experience";
import { LanguageKnow } from "./languageKnow"
import { LinkedinProfileStrength } from "./linkedinProfileStrength";
import { NoOfpromotion } from "./numberOfPromotions";
import { ProjectLeadershipSuccess } from "./projectLeadershipSuccess";
import { LastEmploymentTenure } from "./lastTenureStatability";
import { AverageEmploymentTenure } from "./averageTenureStatability";
import { EmployementGap } from "./employmentGap";

export const Submethods = (parameter: ParameterType, value: number | any) => {
    if (parameter?.key === "languagesKnown") {
        return LanguageKnow(parameter, value); ``
    }
    if (parameter?.key === "noOfPromotion") {
        return NoOfpromotion(parameter, value);
    }
    if (parameter?.key === "projectLeadershipSuccess") {
        return ProjectLeadershipSuccess(parameter, value);
    }
    if (parameter?.key === "linkedinProfileStrength") {
        return LinkedinProfileStrength(parameter, value)
    }
    if (parameter?.key === "totalExperience") {
        return Experience(parameter, value)
    }
    if (parameter?.key === "averageTenure") {
        return AverageEmploymentTenure(parameter, value)
    }
    if (parameter?.key === "employmentGap") {
        return EmployementGap(parameter, value)
    }
    if (parameter?.key === "lastEmployerTenure") {
        return LastEmploymentTenure(parameter, value)
    }
    if (parameter?.key === "noticePeriodServedInFull" || parameter?.key === "cleanHandoverDocumentation" || parameter?.key === "relievingLetterIssuedWithin30Days" || parameter?.key === "rehireStatusYesInAllPastEmployers" || parameter?.key === "joiningDateAdherenceAcrossCareer") {
        return {
            pts: 20,
            belongsTo: parameter?.belongsTo,
            label: parameter?.label
        }
    }
}