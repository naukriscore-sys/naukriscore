export const ValidateJobsInLast5Years = (value: string | boolean | number) => {
  const key = "jobsInLast5Years";
  try {
    if (typeof value === "number") {
      if (!Number.isFinite(value)) {
        return { key, question: "Jobs count must be a valid number." };
      }
      if (value < 0) {
        return { key, question: "Jobs count cannot be negative." };
      }
      if (value > 10) {
        return { key, question: "Jobs in last 5 years cannot exceed 10." };
      }
    } else {
      return { key, question: "Invalid type of data. Required Number." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
