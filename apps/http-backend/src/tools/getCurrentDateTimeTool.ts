import { tool } from "@langchain/core/tools";
import { getCurrentDateTime } from "../services/getCurrentDateTime";

/**
 * Tool: getCurrentDateTimeTool
 *
 * A simple but essential utility designed for AI-driven systems that require
 * precise and formatted date-time information at runtime.
 */
export const getCurrentDateTimeTool = tool(
  async () => {
    return getCurrentDateTime();
  },
  {
    name: "getCurrentDateTime",
    description: `This utility retrieves the **current system date and time** in a structured and human-readable format.

    It returns **formatted date, time, and year** values, ideal for timestamping, logging, scheduling, or audit-trail purposes in AI workflows.

    ---

    ### 🧩 **Output Structure**

    | Field | Type | Description |
    |--------|------|-------------|
    | date | string | Formatted as **DD-MM-YYYY** |
    | year | number | Current Gregorian calendar year |
    | time | string | Formatted as **HH:MM:SS** (24-hour clock) |

    ---

    ### ⚙️ **Functionality**
    - Captures the system’s current **date and time**.
    - Formats both values with leading zeros for single-digit days, months, hours, minutes, and seconds.
    - Returns structured output for easy parsing and storage.
    - Logs formatted date and time to the console for debugging or monitoring.

    ---

    ### 💡 **Behavior**
    - Requires **no input schema** — operates purely on current system time.
    - Runs **synchronously** and returns consistent output.
    - Can be integrated across pipelines for:
      - Activity or event logging
      - Record timestamping
      - Report generation
      - Temporal validation
      - Time-sensitive automation

    ---

    ### 📦 **Response Example**

    \`\`\`json
    {
      "date": "10-11-2025",
      "year": 2025,
      "time": "17:32:58"
    }
    \`\`\`

    ---

    ### ✅ **Use Case**
    When your workflow or AI agent needs the current timestamp for labeling, tracking, or decision-making, this tool provides a reliable, well-formatted output instantly.
`,
  }
);
