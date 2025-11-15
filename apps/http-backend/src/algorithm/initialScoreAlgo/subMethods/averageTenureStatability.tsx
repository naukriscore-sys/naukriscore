import type { ParameterType } from "../initialScore";

export const AverageEmploymentTenure = (
  parameter: ParameterType,
  value: number
) => {
  if (value <= 0) {
    return {
      pts: 0,
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
  if (value >= 1 && value <= 5) {
    return {
      pts: Math.ceil(value * 10),
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
  if (value > 5) {
    return {
      pts: 50,
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
};
