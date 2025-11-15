export const ValidatePromotionsCount = (value: string | boolean | number) => {
  const key = "promotionsCount";
  try {
    if (typeof value === "number") {
      if (value < 0) return { key, question: "Promotions cannot be negative." };
      if (value > 15) return { key, question: "Promotions cannot exceed 15." };
    } else {
      return { key, question: "Invalid type of data. Required Number." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
