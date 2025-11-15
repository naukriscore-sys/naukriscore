import z from "zod";

// // Example usage:
// const validAadhaar = "1234 5678 9012"; // This would be invalid due to the leading '1'
// const invalidAadhaarFormat = "123456789012"; // Invalid format (missing spaces)
// const validAadhaarExample = "2345 6789 0123"; // Valid example

const aadhaarRegex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;

export const feedbackScoreSchema = z.object({
  aadhaarNumber: z
    .string()
    .regex(aadhaarRegex, "Invalid Aadhaar number format."), // aadhaarNumber of the employee
  isWorkedWithYou: z.boolean(), // is the employee worked with the employer who is giving feedback
  message: z.string().min(10), // a normal message by the employer describing employee
  employerId: z.string(),
  keyPoints: z.array(z.string()), // the array of predefined points for easy score calculation
});
