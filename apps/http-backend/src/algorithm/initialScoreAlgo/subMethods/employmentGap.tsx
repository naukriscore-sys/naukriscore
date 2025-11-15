import type { ParameterType } from "../initialScore";
import { severity } from "../../../parameter/severity";
import type { severityType } from "../../../parameter/severity";

export const EmployementGap = (parameter: ParameterType, value: number) => {
  const pts = severity[parameter?.severity as severityType];
  if (value >= 0 && value <= 3) {
    return {
      pts: pts,
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
  if (value >= 4 && value <= 6) {
    return {
      pts: Math.ceil(pts / 2),
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
  if (value >= 7) {
    return {
      pts: 0,
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
};
