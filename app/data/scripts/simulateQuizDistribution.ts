import { PersonalityScores } from "../../types/quiz";
import { conversationIds } from "../../types/conversationState";
import { CHOICE_SCORES } from "../score/scoreMapping";

// Configuration
const SIMULATIONS = 10000; // Run 10,000 virtual quiz-takers

// Define all questions with their conversation and available choices
const QUESTIONS = [
  // Flower Store - 8 questions
  {
    conversation: "flowerStore" as conversationIds,
    questionId: "1",
    choices: ["1.1", "1.2", "1.3"],
  },
  {
    conversation: "flowerStore" as conversationIds,
    questionId: "2",
    choices: ["2.1", "2.2", "2.3"],
  },
  {
    conversation: "flowerStore" as conversationIds,
    questionId: "3",
    choices: ["3.1", "3.2", "3.3"],
  },
  {
    conversation: "flowerStore" as conversationIds,
    questionId: "4",
    choices: ["4.1", "4.2", "4.3"],
  },
  {
    conversation: "flowerStore" as conversationIds,
    questionId: "5",
    choices: ["5.1", "5.2", "5.3"],
  },
  {
    conversation: "flowerStore" as conversationIds,
    questionId: "6",
    choices: ["6.1", "6.2", "6.3"],
  },
  {
    conversation: "flowerStore" as conversationIds,
    questionId: "7",
    choices: ["7.1", "7.2", "7.3"],
  },
  {
    conversation: "flowerStore" as conversationIds,
    questionId: "8",
    choices: ["8.1", "8.2", "8.3"],
  },

  // Friend - 3 questions
  {
    conversation: "friend" as conversationIds,
    questionId: "1",
    choices: ["1.1", "1.2", "1.3"],
  },
  {
    conversation: "friend" as conversationIds,
    questionId: "2",
    choices: ["2.1", "2.2", "2.3"],
  },
  {
    conversation: "friend" as conversationIds,
    questionId: "3",
    choices: ["3.1", "3.2", "3.3"],
  },

  // Guardian - 3 questions
  {
    conversation: "guardian" as conversationIds,
    questionId: "1",
    choices: ["1.1", "1.2", "1.3"],
  },
  {
    conversation: "guardian" as conversationIds,
    questionId: "2",
    choices: ["2.1", "2.2", "2.3"],
  },
  {
    conversation: "guardian" as conversationIds,
    questionId: "3",
    choices: ["3.1", "3.2", "3.3"],
  },
];

// Flower display names and emojis
const FLOWER_META = {
  SUN: { name: "Sunflower", emoji: "🌻" },
  DESERT: { name: "Cactus", emoji: "🌵" },
  MIST: { name: "Lily of the Valley", emoji: "🌷" },
  ALPINE: { name: "Sedum", emoji: "🌲" },
  THORN: { name: "Rose", emoji: "🌹" },
  WIND: { name: "Dandelion", emoji: "🍃" },
  MOON: { name: "Nemophila", emoji: "🌙" },
  SHRUB: { name: "Hydrangea", emoji: "🪴" },
};

// Maximum possible points per flower (calculated from score mappings)
const MAX_POSSIBLE = {
  SUN: 0,
  DESERT: 0,
  MIST: 0,
  ALPINE: 0,
  THORN: 0,
  WIND: 0,
  MOON: 0,
  SHRUB: 0,
};

// Calculate max possible points
Object.values(CHOICE_SCORES).forEach((conversation) => {
  Object.values(conversation).forEach((choice) => {
    Object.entries(choice).forEach(([trait, points]) => {
      const key = trait as keyof PersonalityScores;
      MAX_POSSIBLE[key] = (MAX_POSSIBLE[key] || 0) + points;
    });
  });
});

/**
 * Initialize empty scores
 */
const initializeScores = (): PersonalityScores => ({
  SUN: 0,
  DESERT: 0,
  MIST: 0,
  ALPINE: 0,
  THORN: 0,
  WIND: 0,
  MOON: 0,
  SHRUB: 0,
});

/**
 * Add scores for a choice
 */
const addChoiceScores = (
  scores: PersonalityScores,
  conversation: conversationIds,
  choiceId: string,
): PersonalityScores => {
  const conversationScores = CHOICE_SCORES[conversation];
  if (!conversationScores) return scores;

  const choiceScores = conversationScores[choiceId];
  if (!choiceScores) return scores;

  const updated = { ...scores };
  Object.entries(choiceScores).forEach(([trait, points]) => {
    const key = trait as keyof PersonalityScores;
    updated[key] = (updated[key] || 0) + points;
  });

  return updated;
};

/**
 * PERSONALITY TYPES - Each has a consistent behavior pattern
 */
type PersonalityType = keyof typeof FLOWER_META;

const PERSONALITY_TRAITS: Record<
  PersonalityType,
  {
    consistency: number; // How consistently they stick to their type (0-1)
    secondaryInfluence: PersonalityType[]; // Other types they're drawn to
    volatility: number; // How likely to make "out of character" choices (0-1)
  }
> = {
  SUN: {
    consistency: 0.85,
    secondaryInfluence: ["SHRUB", "WIND"],
    volatility: 0.15,
  },
  DESERT: {
    consistency: 0.9,
    secondaryInfluence: ["ALPINE", "MOON"],
    volatility: 0.1,
  },
  MIST: {
    consistency: 0.8,
    secondaryInfluence: ["MOON", "SHRUB"],
    volatility: 0.2,
  },
  ALPINE: {
    consistency: 0.85,
    secondaryInfluence: ["DESERT", "THORN"],
    volatility: 0.15,
  },
  THORN: {
    consistency: 0.75, // Rose users are a bit more unpredictable
    secondaryInfluence: ["ALPINE", "DESERT"],
    volatility: 0.25,
  },
  WIND: {
    consistency: 0.7, // Dandelion users are free-spirited, less consistent
    secondaryInfluence: ["SUN", "SHRUB"],
    volatility: 0.3,
  },
  MOON: {
    consistency: 0.8,
    secondaryInfluence: ["MIST", "DESERT"],
    volatility: 0.2,
  },
  SHRUB: {
    consistency: 0.85,
    secondaryInfluence: ["SUN", "WIND"],
    volatility: 0.15,
  },
};

/**
 * Calculate how well a choice matches a personality type
 */
const calculateChoiceAffinity = (
  choiceScores: Partial<PersonalityScores>,
  primaryType: PersonalityType,
  secondaryTypes: PersonalityType[],
): number => {
  let affinity = 0;

  // Primary type points are weighted heavily
  affinity += (choiceScores[primaryType] || 0) * 3;

  // Secondary types add some affinity
  secondaryTypes.forEach((secondary) => {
    affinity += (choiceScores[secondary] || 0) * 1.5;
  });

  // Points for other types actually reduce affinity (this choice doesn't match their vibe)
  Object.entries(choiceScores).forEach(([trait, points]) => {
    const t = trait as PersonalityType;
    if (t !== primaryType && !secondaryTypes.includes(t)) {
      affinity -= points * 0.5;
    }
  });

  return affinity;
};

/**
 * Generate a realistic quiz response based on a personality type
 */
const generateUserWithPersonality = (
  personalityType: PersonalityType,
): PersonalityScores => {
  let scores = initializeScores();
  const traits = PERSONALITY_TRAITS[personalityType];

  QUESTIONS.forEach((question) => {
    // Get all available choices for this question with their scores
    const availableChoices = question.choices.map((choiceId) => ({
      id: choiceId,
      scores: CHOICE_SCORES[question.conversation]?.[choiceId] || {},
      // Pre-calculate affinity for this personality
      affinity: calculateChoiceAffinity(
        CHOICE_SCORES[question.conversation]?.[choiceId] || {},
        personalityType,
        traits.secondaryInfluence,
      ),
    }));

    // Find the choice with highest affinity (their "perfect" answer)
    const bestChoice = availableChoices.reduce((best, current) =>
      current.affinity > best.affinity ? current : best,
    );

    // Determine if they pick their best match or something else
    const rand = Math.random();
    let selectedChoice: string;

    if (rand < traits.consistency) {
      // They pick their best match
      selectedChoice = bestChoice.id;
    } else if (rand < traits.consistency + traits.volatility) {
      // They make an "out of character" choice - pick randomly from remaining
      const otherChoices = availableChoices.filter(
        (c) => c.id !== bestChoice.id,
      );
      selectedChoice =
        otherChoices[Math.floor(Math.random() * otherChoices.length)].id;
    } else {
      // They're influenced by their secondary traits - pick second best
      const sortedByAffinity = availableChoices.sort(
        (a, b) => b.affinity - a.affinity,
      );
      selectedChoice = sortedByAffinity[1]?.id || bestChoice.id;
    }

    // Add the scores
    scores = addChoiceScores(scores, question.conversation, selectedChoice);
  });

  return scores;
};

/**
 * Generate a completely random user (for comparison)
 */
const generateRandomUser = (): PersonalityScores => {
  let scores = initializeScores();

  QUESTIONS.forEach((question) => {
    const randomChoice =
      question.choices[Math.floor(Math.random() * question.choices.length)];
    scores = addChoiceScores(scores, question.conversation, randomChoice);
  });

  return scores;
};

/**
 * Run realistic simulation
 */
const simulate = () => {
  console.log("\n🌸 REALISTIC PERSONALITY SIMULATION 🌸");
  console.log("==================================================");
  console.log(
    `Running ${SIMULATIONS.toLocaleString()} virtual users with personalities...\n`,
  );

  // Track results
  const results: Record<PersonalityType, number> = {
    SUN: 0,
    DESERT: 0,
    MIST: 0,
    ALPINE: 0,
    THORN: 0,
    WIND: 0,
    MOON: 0,
    SHRUB: 0,
  };

  // Track raw scores for analysis
  const allScores: PersonalityScores[] = [];

  // Track confusion matrix (what personality they actually got vs what they were)
  const confusionMatrix: Record<string, Record<string, number>> = {};

  // Initialize confusion matrix
  Object.keys(FLOWER_META).forEach((actual) => {
    confusionMatrix[actual] = {};
    Object.keys(FLOWER_META).forEach((expected) => {
      confusionMatrix[actual][expected] = 0;
    });
  });

  // Run simulations
  for (let i = 0; i < SIMULATIONS; i++) {
    // Pick a random personality for this user
    const personalities = Object.keys(FLOWER_META) as PersonalityType[];
    const truePersonality =
      personalities[Math.floor(Math.random() * personalities.length)];

    // Generate their responses based on their true personality
    const rawScores = generateUserWithPersonality(truePersonality);
    allScores.push(rawScores);

    // Determine result based on raw scores (no normalization)
    const entries = Object.entries(rawScores) as [PersonalityType, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    const resultingPersonality = sorted[0][0];

    results[resultingPersonality]++;
    confusionMatrix[resultingPersonality][truePersonality]++;
  }

  // Display results
  console.log("📊 FINAL DISTRIBUTION (what users ACTUALLY got):\n");

  const sortedResults = Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .map(([trait, count]) => ({
      trait: trait as PersonalityType,
      meta: FLOWER_META[trait as PersonalityType],
      count,
      percentage: ((count / SIMULATIONS) * 100).toFixed(2),
    }));

  sortedResults.forEach(({ meta, count, percentage }) => {
    const barLength = Math.floor((count / SIMULATIONS) * 50);
    const bar = "█".repeat(barLength);
    console.log(`${meta.emoji} ${meta.name}: ${bar} ${count} (${percentage}%)`);
  });

  // Calculate average raw scores
  console.log("\n📈 AVERAGE RAW SCORES PER FLOWER:");

  const avgScores: PersonalityScores = initializeScores();
  allScores.forEach((scores) => {
    Object.keys(scores).forEach((key) => {
      const trait = key as keyof PersonalityScores;
      avgScores[trait] += scores[trait];
    });
  });

  Object.keys(avgScores).forEach((key) => {
    const trait = key as keyof PersonalityScores;
    avgScores[trait] = Math.round((avgScores[trait] / SIMULATIONS) * 100) / 100;
  });

  const sortedAvgs = Object.entries(avgScores)
    .sort((a, b) => b[1] - a[1])
    .map(([trait, score]) => ({
      trait: trait as PersonalityType,
      meta: FLOWER_META[trait as PersonalityType],
      score,
    }));

  sortedAvgs.forEach(({ meta, score }) => {
    console.log(`${meta.emoji} ${meta.name}: ${score.toFixed(2)} points`);
  });

  // Balance analysis
  console.log("\n🔍 BALANCE ANALYSIS:");
  console.log("==================================================");

  const percentages = sortedResults.map((r) => parseFloat(r.percentage));
  const maxPercent = Math.max(...percentages);
  const minPercent = Math.min(...percentages);
  const range = maxPercent - minPercent;
  const idealPercent = 12.5;

  console.log(
    `Ideal distribution: ${idealPercent}% each (${(SIMULATIONS * idealPercent) / 100} users per flower)`,
  );
  console.log(
    `Highest: ${sortedResults[0].meta.emoji} ${sortedResults[0].meta.name} at ${sortedResults[0].percentage}%`,
  );
  console.log(
    `Lowest: ${sortedResults[sortedResults.length - 1].meta.emoji} ${sortedResults[sortedResults.length - 1].meta.name} at ${sortedResults[sortedResults.length - 1].percentage}%`,
  );
  console.log(`Range: ${range.toFixed(2)} percentage points`);

  // Grade
  console.log("\n📋 BALANCE GRADE:");
  if (range < 5) {
    console.log("✅ EXCELLENT: Perfectly balanced!");
  } else if (range < 7) {
    console.log("👍 GOOD: Well balanced distribution.");
  } else if (range < 9) {
    console.log("🟡 ACCEPTABLE: Minor imbalances, but playable.");
  } else if (range < 12) {
    console.log("⚠️  CONCERNING: Some flowers over/under represented.");
  } else {
    console.log("❌ PROBLEM: Severe imbalance detected!");
  }

  // Show confusion matrix (which personalities get misidentified as what)
  console.log("\n🔬 PERSONALITY ACCURACY MATRIX:");
  console.log("==================================================");
  console.log("Shows what % of each true personality got each result\n");

  Object.keys(confusionMatrix).forEach((resultTrait) => {
    const result = resultTrait as PersonalityType;
    const row: string[] = [];

    Object.keys(confusionMatrix[resultTrait]).forEach((trueTrait) => {
      const count = confusionMatrix[resultTrait][trueTrait];
      const totalForTrue = Object.values(confusionMatrix).reduce(
        (sum, row) => sum + (row[trueTrait] || 0),
        0,
      );
      const percentage =
        totalForTrue > 0 ? ((count / totalForTrue) * 100).toFixed(1) : "0.0";
      row.push(
        `${FLOWER_META[trueTrait as PersonalityType].emoji} ${percentage}%`,
      );
    });

    console.log(`${FLOWER_META[result].emoji} got: ${row.join(" | ")}`);
  });
};

/**
 * Run comparison with random users
 */
const compareWithRandom = () => {
  console.log("\n\n🎲 COMPARISON: RANDOM USERS vs REALISTIC");
  console.log("==================================================");

  const randomResults: Record<PersonalityType, number> = {
    SUN: 0,
    DESERT: 0,
    MIST: 0,
    ALPINE: 0,
    THORN: 0,
    WIND: 0,
    MOON: 0,
    SHRUB: 0,
  };

  for (let i = 0; i < 5000; i++) {
    const scores = generateRandomUser();
    const entries = Object.entries(scores) as [PersonalityType, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    randomResults[sorted[0][0]]++;
  }

  console.log("Random users (no personality):");
  Object.entries(randomResults)
    .sort((a, b) => b[1] - a[1])
    .forEach(([trait, count]) => {
      const pct = ((count / 5000) * 100).toFixed(1);
      console.log(`${FLOWER_META[trait as PersonalityType].emoji}: ${pct}%`);
    });
};

// Run everything
const startTime = Date.now();
simulate();
compareWithRandom();
const endTime = Date.now();
console.log(
  `\n⏱️  Simulation completed in ${((endTime - startTime) / 1000).toFixed(2)} seconds`,
);
