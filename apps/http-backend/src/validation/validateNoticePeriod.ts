export const ValidateNoticePeriod = (value: string | boolean | number) => {
  const key = "currentNoticePeriodWeeks";
  try {
    if (typeof value === "number") {
      if (value < 0)
        return { key, question: "Notice period cannot be negative." };
      if (value > 52)
        return { key, question: "Notice period cannot exceed 52 weeks." };
    } else {
      return { key, question: "Invalid type of data. Required Number." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
