export const ValidateContractRoles = (value: string | boolean | number) => {
  const key = "contractRolesCount";
  try {
    if (typeof value === "number") {
      if (value < 0)
        return { key, question: "Contract roles cannot be negative." };
      if (value > 20)
        return { key, question: "Contract roles cannot exceed 20." };
    } else {
      return { key, question: "Invalid type of data. Required Number." };
    }
  } catch {
    return { key, question: "Something went wrong while validating " + key };
  }
};
