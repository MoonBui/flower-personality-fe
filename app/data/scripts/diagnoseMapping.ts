// scripts/diagnoseMappings.ts
import { CHOICE_SCORES } from "../score/scoreMapping";
import { PersonalityScores } from "../../types/quiz";

const appearanceCount: Record<keyof PersonalityScores, number> = {
  SUN: 0,
  DESERT: 0,
  MIST: 0,
  ALPINE: 0,
  THORN: 0,
  WIND: 0,
  MOON: 0,
  SHRUB: 0,
};

const pointTotal: Record<keyof PersonalityScores, number> = {
  SUN: 0,
  DESERT: 0,
  MIST: 0,
  ALPINE: 0,
  THORN: 0,
  WIND: 0,
  MOON: 0,
  SHRUB: 0,
};

let totalQuestions = 0;

Object.entries(CHOICE_SCORES).forEach(([conversation, questions]) => {
  Object.entries(questions).forEach(([choiceId, scores]) => {
    totalQuestions++;
    Object.entries(scores).forEach(([trait, points]) => {
      const key = trait as keyof PersonalityScores;
      appearanceCount[key]++;
      pointTotal[key] += points;
    });
  });
});

console.log("📊 SCORE MAPPING DIAGNOSIS");
console.log("==================================================");
console.log(`Total choices: ${totalQuestions}\n`);

console.log("Appearance count (how many choices include this flower):");
Object.entries(appearanceCount)
  .sort((a, b) => b[1] - a[1])
  .forEach(([trait, count]) => {
    const percentage = ((count / totalQuestions) * 100).toFixed(1);
    console.log(`${trait}: ${count} choices (${percentage}%)`);
  });

console.log("\nTotal points available:");
Object.entries(pointTotal)
  .sort((a, b) => b[1] - a[1])
  .forEach(([trait, total]) => {
    console.log(`${trait}: ${total} points`);
  });

// Calculate average points per appearance
console.log("\nAverage points per appearance:");
Object.entries(pointTotal).forEach(([trait, total]) => {
  const appearances = appearanceCount[trait as keyof PersonalityScores];
  const avg = (total / appearances).toFixed(2);
  console.log(`${trait}: ${avg} points per appearance`);
});
