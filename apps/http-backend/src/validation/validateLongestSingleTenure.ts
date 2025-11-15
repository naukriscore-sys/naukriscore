export const ValidateLongestSingleTenure = (
  value: string | boolean | number
) => {
  const key = "longestSingleTenureYears";
  try {
    if (typeof value === "number") {
      if (value < 0) return { key, question: "Tenure cannot be negative." };
      if (value > 30)
        return { key, question: "Tenure cannot exceed 30 years." };
    } else {
      return { key, question: "Invalid type of data. Required Number." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
