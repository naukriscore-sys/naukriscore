export const ValidateExitType = (value: string | boolean | number) => {
  const key = "exitType";
  try {
    if (typeof value === "number") {
      if (![1, 2, 3].includes(value)) {
        return {
          key,
          question:
            "Exit type must be 1 (Voluntary), 2 (Mutual), or 3 (Terminated).",
        };
      }
    } else {
      return { key, question: "Invalid type of data. Required Number." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
