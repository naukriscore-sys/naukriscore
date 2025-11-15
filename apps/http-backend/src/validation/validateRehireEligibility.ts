export const ValidateRehireEligibility = (value: string | boolean | number) => {
  const key = "rehireEligibilityFromLastEmployer";
  try {
    if (typeof value !== "boolean") {
      return { key, question: "Invalid input. Expected true/false." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
