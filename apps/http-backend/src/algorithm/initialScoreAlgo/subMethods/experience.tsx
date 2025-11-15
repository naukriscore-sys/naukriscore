import type { ParameterType } from "../initialScore";

export const Experience = (parameter: ParameterType, value: number) => {
  if (value >= 0 && value < 1) {
    return {
      pts: 30,
      belongsTo: parameter?.belongsTo,
      label: "Initial Careers Bonus Points",
    };
  }
  if (value >= 1 && value <= 20.5) {
    const points = Math.ceil(value * 5);
    return {
      pts: points,
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
  if (value >= 20.6 && value <= 40) {
    const points = Math.ceil(value * 5);
    return {
      pts: points,
      belongsTo: "excilentRecord",
      label: parameter?.label,
    };
  }
};
