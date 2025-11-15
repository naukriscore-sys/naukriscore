export const initialScoringParams = [
  {
    key: "totalExperienceYears",
    label: "Total Professional Experience (Years)",
    type: "number",
    weight: 20,
    question:
      "What is the candidate's total professional experience (in years)?",
    validation: { min: 0, max: 50 },
  },
  {
    key: "totalInternships",
    label: "Total Internships Experience (Years/Months)",
    type: "number",
    weight: 10,
    question:
      "What is the candidate's total professional internships experience (in years)?",
    validation: { min: 0, max: 50 },
  },
  {
    key: "averageTenureYears",
    label: "Average Tenure Per Employer (Years)",
    type: "number",
    weight: 33,
    question: "What is the candidate's average tenure per employer (in years)?",
    validation: { min: 0, max: 15 },
  },
  {
    key: "employmentGapsMonths",
    label: "Largest Employment Gap (Months)",
    type: "number",
    weight: 25,
    question:
      "What is the longest gap between two jobs as listed on the CV (in months)?",
    validation: { min: 0, max: 60 },
  },
  {
    key: "promotionsCount",
    label: "Number of Promotions",
    type: "number",
    weight: 25,
    question:
      "How many promotions are listed in the candidate's CV/employment history?",
    validation: { min: 0, max: 15 },
  },
];
