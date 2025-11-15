import type { ParameterType } from "../../algorithm/initialScoreAlgo/initialScore";
import { InitialScoreAccountCreation } from "./accountCreation";
import { InitialScoreBackGroundVerification } from "./backGroundVerification";
import { InitialScoreEmploymentTenure } from "./employmentTenure";
import { InitialScoreExperience } from "./experience";
import { InitialScoreJoiningAndExit } from "./joiningAndExit";
import { InitialScoreNegativeParameters } from "./negative";
import { InitialScorePositiveParameter } from "./positive";

export const initialScoreParameter = () => {
    const arr: ParameterType[] = []

    const final = arr.concat(InitialScoreEmploymentTenure, InitialScoreExperience, InitialScoreJoiningAndExit, InitialScoreNegativeParameters, InitialScorePositiveParameter);

    return final
}