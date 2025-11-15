//@ts-ignore
import { NlpManager } from "node-nlp";

// 1. Create NLP Manager
const manager = new NlpManager({ languages: ["en"], forceNER: true });

// 2. Train with Example Sentences for Each Indicator
manager.addDocument("en", "He is always punctual and on time", "punctuality");

manager.addDocument(
  "en",
  "She meets all deadlines without delay",
  "punctuality"
);
manager.addDocument(
  "en",
  "He achieved all his goals successfully",
  "performance"
);
manager.addDocument(
  "en",
  "She exceeded the targets consistently",
  "performance"
);
manager.addDocument(
  "en",
  "He mentored new employees in the team",
  "leadership"
);
manager.addDocument("en", "She trained and guided her juniors", "leadership");
manager.addDocument(
  "en",
  "He works well with others and collaborates",
  "teamwork"
);
manager.addDocument("en", "She is a great team player", "teamwork");
manager.addDocument("en", "He came up with innovative solutions", "innovation");
manager.addDocument(
  "en",
  "She introduced new ideas to improve work",
  "innovation"
);
manager.addDocument("en", "He is honest and trustworthy", "integrity");
manager.addDocument("en", "She follows ethics and integrity", "integrity");

// Experience
manager.addDocument(
  "en",
  "He has 10 years of total experience",
  "experience.total"
);
manager.addDocument(
  "en",
  "She has been working professionally for 8 years",
  "experience.total"
);
manager.addDocument(
  "en",
  "He usually stays at companies for around 2 years",
  "experience.tenure.average"
);
manager.addDocument(
  "en",
  "She spent 5 years with her last employer",
  "experience.tenure.last"
);
manager.addDocument(
  "en",
  "He switched jobs three times in the past five years",
  "experience.jobs.recent"
);
manager.addDocument(
  "en",
  "She had a career gap of 12 months",
  "experience.gaps"
);

// Growth
manager.addDocument(
  "en",
  "He was promoted twice during his tenure",
  "growth.promotions"
);
manager.addDocument(
  "en",
  "She moved up quickly in her last company",
  "growth.promotions"
);

// Contract roles
manager.addDocument(
  "en",
  "He worked as a contractor in two projects",
  "experience.contracts"
);
manager.addDocument(
  "en",
  "She had several freelance assignments",
  "experience.contracts"
);

// Joining & exit behaviour
manager.addDocument(
  "en",
  "He served his full notice period",
  "exit.notice.served"
);
manager.addDocument(
  "en",
  "She did not complete the notice period",
  "exit.notice.served"
);
manager.addDocument("en", "He absconded without informing", "exit.absconding");
manager.addDocument(
  "en",
  "She is eligible for rehire at her last employer",
  "exit.rehire.eligible"
);
manager.addDocument(
  "en",
  "He left with disputes in HR records",
  "exit.disputes"
);
manager.addDocument("en", "She resigned voluntarily", "exit.type.voluntary");
manager.addDocument(
  "en",
  "He was terminated by the company",
  "exit.type.termination"
);
manager.addDocument(
  "en",
  "She joined on the agreed start date",
  "joining.ondate"
);

// 3. Assign Indicator Scores
const indicatorScores: Record<string, number> = {
  // Soft skills (kept smaller, since they are qualitative)
  punctuality: 20,
  performance: 30,
  leadership: 25,
  teamwork: 20,
  innovation: 25,
  integrity: 25,

  // Employment tenure stability (normalized)
  "experience.total": 80,
  "experience.tenure.average": 70,
  "experience.tenure.last": 80,
  "experience.jobs.recent": 75,
  "experience.gaps": 60,
  "growth.promotions": 90,
  "experience.contracts": 65,

  // Joining & exit behaviour (normalized)
  "joining.ondate": 70,
  "exit.notice.served": 90,
  "exit.absconding": 100, // max penalty / red flag
  "exit.rehire.eligible": 85,
  "exit.disputes": 95,
  "exit.type.voluntary": 80,
  "exit.type.termination": 80,
};

// 4. Train Model
export async function trainModel() {
  await manager.train();
  manager.save();
  return manager;
}

// 5. Calculate Score from Feedback
export async function calculateScore(feedback: string) {
  const manager = await trainModel();
  const result = await manager.process("en", feedback);

  let totalScore = 0;
  let matchedIndicators: {
    indicator: string;
    confidence: string;
    awarded: number;
  }[] = [];
  const allIndicators = Object.keys(indicatorScores);

  for (const intent of result.classifications) {
    if (intent.score > 0.3) {
      const indicator = intent.intent;
      const awarded = indicatorScores[indicator] || 0;
      totalScore += awarded;
      matchedIndicators.push({
        indicator,
        confidence: intent.score.toFixed(2),
        awarded,
      });
    }
  }

  // what was not matched (potential deductions)
  const matchedKeys = matchedIndicators.map((m) => m.indicator);
  const missedIndicators = allIndicators
    .filter((i) => !matchedKeys.includes(i))
    .map((i) => ({
      indicator: i,
      deducted: indicatorScores[i],
    }));

  return {
    totalScore,
    matchedIndicators,
    missedIndicators,
  };
}
