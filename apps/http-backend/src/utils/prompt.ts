export const prompt = (notFoundKeys: string[], message: string): string => {
  return `
You are tasked with generating a structured JSON array of feedback objects based on the provided inputs.

The **goal** is to map each feedback key to a well-defined object that describes whether it represents a **positive** or **negative** behavior, along with its severity, description, and a user-facing label.

---

### **What You Are Given:**
1. **User Inputs (Feedback Keys)**:
   - These are strings that represent behaviors, actions, or attributes.
   - Example: \`["ghostingAfterOffer", "perfectAttendancePunctuality"]\`

2. **Optional Message (Contextual Clue)**:
   - The user **may or may not** provide a message with additional context.
   - If provided, **use it to help determine whether a key is positive or negative**.
   - If not provided, infer from the key name itself.

---

### **Your Task:**
For each feedback key:
1. **Identify Status (positive or negative):**
   - If the behavior represents a **good trait or achievement**, mark it as \`"positive"\`.
   - If the behavior represents a **problem, weakness, or misconduct**, mark it as \`"negative"\`.
   - Use the **key name itself** or the **message content** (if provided) to decide.

2. **Determine Severity (severity):**
   - Must be **one of the following exact values**:
     \`"veryLow" | "low" | "belowAverage" | "medium" | "abovemedium" | "high" | "veryHigh" | "elite"\`
   - Choose based on the seriousness or value of the behavior:
     - **veryLow** → Minor positive/neutral factor (e.g., knowing extra languages).
     - **low** → Slightly positive or slightly negative factor.
     - **belowAverage** → Somewhat below expectations.
     - **medium** → Common behaviors with noticeable impact.
     - **abovemedium** → Strong positive or notable negative behavior.
     - **high** → Major positive or significant negative issue.
     - **veryHigh** → Extremely important issue or critical achievement.
     - **elite** → Rare, exceptional achievement or very rare top-tier recognition.

3. **Write Description (description):**
   - A **neutral, concise explanation** of what the key represents.
   - Example: \`"Employee leaves the job suddenly without any notice."\`

4. **Write Label (label):**
   - A **user-facing sentence** that directly addresses the candidate.
   - Must sound natural and human-readable.
   - Example: \`"It was reported that you left a job suddenly without providing any notice, which affected the team and company operations."\`

---

### **Final Output Format**
You must return **only an array of JSON objects**, nothing else.

Each object must strictly follow this interface:
\`\`\`typescript
interface FeedbackParamsProps {
  key: string;          // unique, camelCase identifier
  severity: string;     // one of the defined severity levels
  status: string;       // "positive" or "negative"
  description: string;  // short neutral explanation
  label: string;        // natural language user-facing statement
}
\`\`\`

---

### **Examples**

#### Example 1 – Positive
\`\`\`json
{
  "key": "perfectAttendancePunctuality",
  "severity": "medium",
  "status": "positive",
  "description": "Maintaining perfect attendance and punctuality.",
  "label": "You consistently maintained perfect attendance and punctuality."
}
\`\`\`

#### Example 2 – Negative
\`\`\`json
{
  "key": "ghostingAfterOffer",
  "severity": "veryHigh",
  "status": "negative",
  "description": "Candidate accepts a job offer but then stops responding and does not join.",
  "label": "One of your employers mentioned that you accepted a job offer but later stopped responding and didn’t join, which reflects poorly on your reliability."
}
\`\`\`

---

### **Inputs Provided:**
**Feedback Keys:**  
${JSON.stringify(notFoundKeys)}

**Optional Message for Reference:**  
${message ? message : "No message provided"}

---

### **Important Rules:**
- You **must** return an **array** with one object **per feedback key**.
- The array should **not contain extra text, explanations, or formatting**, only pure JSON.
- Use the **message** if it exists to help identify the sentiment (positive/negative).
- If no message is provided, infer from the **key name itself**.

---

### **Expected Output Example**
\`\`\`json
[
  {
    "key": "exampleKey",
    "severity": "low",
    "status": "positive",
    "description": "Short neutral explanation of the key.",
    "label": "Natural language description directly addressing the user."
  }
]
\`\`\`
`;
};

export const STRUCTURE_PROMPT = `
    you have to do nothing just randomly returns the following data as json
    so times skip some of the points and some time return all the points with random
    number or boolean value but the number should be from 1 to 20

    output:
    {
        totalExperienceYears: number;
        averageTenureYears: number;
        lastEmployerTenureYears: number;
        jobsInLast5Years: number;
        longestSingleTenureYears: number;
        employmentGapsMonths: number;
        promotionsCount: number;
        servedFullNoticeLastExit: boolean;
        rehireEligibilityFromLastEmployer: boolean;
        properHandoverDocumented: boolean;
        joinedOnAgreedDate: boolean;
    }

`;
