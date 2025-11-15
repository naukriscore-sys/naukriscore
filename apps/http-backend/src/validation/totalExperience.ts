export const ValidateTotalExperience = (value: string | boolean | number) => {
  const key = "totalExperienceYears";

  try {
    if (typeof value === "number") {
      if (!Number.isFinite(value) || Number.isNaN(value)) {
        return {
          key,
          question:
            "Experience must be a valid number (e.g. 4 or 3.5). Please correct the input.",
        };
      }

      if (value < 0) {
        return {
          key,
          question:
            "Experience cannot be negative. Please enter a valid number of years.",
        };
      }

      if (value > 30) {
        return {
          key,
          question:
            "Experience can't be greater than 30 years. Please enter a valid input.",
        };
      }
    } else {
      return {
        key,
        question: "Invalid type of data. Required Number",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      key,
      question: "Something went wrong while validating " + key,
    };
  }
};
