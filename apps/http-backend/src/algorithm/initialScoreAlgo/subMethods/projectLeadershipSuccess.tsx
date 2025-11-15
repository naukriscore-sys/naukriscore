import type { ParameterType } from "../initialScore";
import { severity } from "../../../parameter/severity";
import type { severityType } from "../../../parameter/severity";

export const ProjectLeadershipSuccess = (
  parameter: ParameterType,
  value: number
) => {
  const pts = severity[parameter?.severity as severityType];
  if (value < 0) {
    return {
      pts: 0,
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
  if (value === 1) {
    return {
      pts: Math.ceil(pts / 3),
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
  if (value === 2) {
    return {
      pts: Math.ceil(pts / 2),
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
  if (value > 2) {
    return {
      pts: pts,
      belongsTo: parameter?.belongsTo,
      label: parameter?.label,
    };
  }
};
