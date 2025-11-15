import { tool } from "@langchain/core/tools";
import z from "zod";
import { getEmployeeDetails } from "../services/getEmployeeDetails";

export const getExisingEmployeeDetails = tool(
  async (input: unknown) => {
    return await getEmployeeDetails(input as any);
  },
  {
    name: "generateInitialscore",
    // add the description like the generateInitialScoreTool
    description: "",
    schema: z.object({
      employeeId: z.string(),
    }),
  }
);


// MAYBE A TOOL