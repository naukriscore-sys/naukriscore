export const ValidateExitDisputes = (value: string | boolean | number) => {
  const key = "exitDisputesCount";
  try {
    if (typeof value === "number") {
      if (value < 0)
        return { key, question: "Exit disputes cannot be negative." };
      if (value > 10)
        return { key, question: "Exit disputes cannot exceed 10." };
    } else {
      return { key, question: "Invalid type of data. Required Number." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
