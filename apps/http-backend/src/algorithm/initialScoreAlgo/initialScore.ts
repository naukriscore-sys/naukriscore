import { initialScoreParameter } from "../../parameter/initialScore";
import { InitialScoreAccountCreation } from "../../parameter/initialScore/accountCreation";
import { InitialScoreBackGroundVerification } from "../../parameter/initialScore/backGroundVerification";
import { severity, type severityType } from "../../parameter/severity";
import type { initialDatafromUserTypes } from "../../zod/initalDataFromUserSchema";
import { Submethods } from "./subMethods";

type belongsToType =
  | "accountCreation"
  | "experience"
  | "tenure"
  | "positive"
  | "negative"
  | "documentUpload"
  | "joiningAndExit"
  | "backGroundVerification";

export interface ParameterType {
  key: string;
  label: string;
  type: string;
  severity: string;
  question: string;
  belongsTo: belongsToType;
  behaviour: string;
  validation: {};
}

export const intialScore = (userData: initialDatafromUserTypes) => {
  let score = 0;
  let summary: {
    key: string;
    label: string;
    points: number;
    belongsTo: string;
  }[] = [];

  InitialScoreAccountCreation.forEach((parameter) => {
    score = score + 33;
    summary.push({
      key: parameter?.key,
      label: parameter?.label,
      points: 33,
      belongsTo: parameter?.belongsTo,
    });
  });

  InitialScoreBackGroundVerification.forEach((parameter) => {
    score = score + 6;
    summary.push({
      key: parameter?.key,
      label: parameter?.label,
      points: 6,
      belongsTo: parameter?.belongsTo,
    });
  });

  const parameter = initialScoreParameter();

  parameter?.forEach((parameter) => {
    const value = userData[parameter?.key as keyof typeof userData];

    if (value) {
      if (parameter?.type === "boolean") {
        const sev = parameter?.severity as severityType;
        const points = severity[sev];
        score = score + points;
        summary.push({
          key: parameter?.key,
          label: parameter?.label,
          points: points,
          belongsTo: parameter?.belongsTo,
        });
      } else {
        const result = Submethods(parameter, value);
        if (result) {
          score = score + result?.pts;
          summary.push({
            key: parameter?.key,
            label: result?.label,
            points: result?.pts,
            belongsTo: result?.belongsTo,
          });
        }
      }
    }
  });

  console.log("this is score", score);
  console.log("this is summary", summary);

  return {
    score,
    summary,
  };
};
