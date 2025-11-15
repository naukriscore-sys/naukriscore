
export type severityType = "veryLow" | "low" | "belowAverage" | "medium" | "moderate" | "aboveModerate" | "high" | "veryHigh" | "elite"

export const severity: Record<severityType, number> = {
  veryLow: 2,
  low: 3,
  belowAverage: 4,
  medium: 7,
  moderate: 7,
  aboveModerate: 9,
  high: 11,
  veryHigh: 13,
  elite: 15,
};
