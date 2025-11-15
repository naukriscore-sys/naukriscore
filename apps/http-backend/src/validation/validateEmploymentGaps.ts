export const ValidateEmploymentGaps = (value: string | boolean | number) => {
  const key = "employmentGapsMonths";
  try {
    if (typeof value === "number") {
      if (value < 0) return { key, question: "Gap cannot be negative." };
      if (value > 60)
        return { key, question: "Gap cannot exceed 60 months (5 years)." };
    } else {
      return { key, question: "Invalid type of data. Required Number." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
