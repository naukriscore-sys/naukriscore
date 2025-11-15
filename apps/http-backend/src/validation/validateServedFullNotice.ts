export const ValidateServedFullNotice = (value: string | boolean | number) => {
  const key = "servedFullNoticeLastExit";
  try {
    if (typeof value !== "boolean") {
      return { key, question: "Invalid input. Expected true/false." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
