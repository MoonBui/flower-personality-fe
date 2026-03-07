import { PersonalityScores } from "../types/quiz";
import { CHOICE_SCORES } from "../data/score/scoreMapping";
import { FLOWER_RESULTS } from "../data/score/quizResults";
import { conversationIds } from "../types/conversationState";

// Flower names for display
export const FLOWER_NAMES = {
  SUN: "Sunflower",
  DESERT: "Cactus",
  MIST: "Lily of the Valley",
  ALPINE: "Sedum",
  THORN: "Rose",
  WIND: "Dandelion",
  MOON: "Nemophila",
  SHRUB: "Hydrangea",
};

/**
 * Initialize empty personality scores
 */
export const initializeScores = (): PersonalityScores => ({
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
 * Add scores for a selected choice
 */
export const addChoiceScores = (
  currentScores: PersonalityScores,
  conversationId: string,
  choiceId: string,
): PersonalityScores => {
  const scoreAdditions =
    CHOICE_SCORES[conversationId as conversationIds]?.[choiceId];

  if (!scoreAdditions) {
    console.warn(`No score mapping found for choice ID: ${choiceId}`);
    return currentScores;
  }

  const updatedScores = { ...currentScores };

  Object.entries(scoreAdditions).forEach(([trait, points]) => {
    const key = trait as keyof PersonalityScores;
    updatedScores[key] = (updatedScores[key] || 0) + points;
  });

  return updatedScores;
};

/**
 * Calculate total score across all conversations
 */
export const calculateFinalScores = (
  selectedChoiceIds: { conversationId: string; choiceId: string }[],
): PersonalityScores => {
  return selectedChoiceIds.reduce(
    (scores, { conversationId, choiceId }) =>
      addChoiceScores(scores, conversationId, choiceId),
    initializeScores(),
  );
};

/**
 * Normalize scores to ensure each flower has equal statistical chance
 */
export const normalizeScores = (
  rawScores: PersonalityScores,
): PersonalityScores => {
  const normalized: Partial<PersonalityScores> = {};

  // Total points available per flower (from your debug output)
  const TOTAL_AVAILABLE = {
    SUN: 21,
    DESERT: 21,
    MIST: 19,
    ALPINE: 24,
    THORN: 20,
    WIND: 26,
    MOON: 23,
    SHRUB: 26,
  };

  // How many questions each flower appears in (approx)
  const APPEARANCES = {
    SUN: 15,
    DESERT: 15,
    MIST: 13,
    ALPINE: 14,
    THORN: 15,
    WIND: 18,
    MOON: 19,
    SHRUB: 18,
  };

  Object.entries(rawScores).forEach(([trait, score]) => {
    const key = trait as keyof PersonalityScores;
    const available = TOTAL_AVAILABLE[key];
    const appearances = APPEARANCES[key];

    // What percentage of available points did they get?
    const pctOfAvailable = (score / available) * 100;

    // How consistently did they pick this flower? (points per appearance)
    const avgPerAppearance = score / appearances;
    const consistencyBonus = Math.min(avgPerAppearance * 10, 20); // Max 20% bonus

    // Final score: base percentage + consistency bonus, capped at 100
    const finalScore = Math.min(100, pctOfAvailable + consistencyBonus);

    normalized[key] = Math.round(finalScore * 100) / 100;
  });

  return normalized as PersonalityScores;
};

/**
 * Get the primary flower result based on highest score
 */
export const getPrimaryFlower = (rawScores: PersonalityScores): string => {
  // Normalize first to ensure fairness
  const scores = normalizeScores(rawScores);

  const entries = Object.entries(scores) as [keyof PersonalityScores, number][];
  const sortedTraits = entries.sort((a, b) => b[1] - a[1]);

  const topScore = sortedTraits[0][1];
  const secondScore = sortedTraits[1][1];

  // Check for ties (within 1 point after normalization)
  if (Math.abs(topScore - secondScore) <= 1) {
    // For ties, use raw scores as tiebreaker
    const rawEntries = Object.entries(rawScores) as [
      keyof PersonalityScores,
      number,
    ][];
    const rawTrait1 =
      rawEntries.find((e) => e[0] === sortedTraits[0][0])?.[1] || 0;
    const rawTrait2 =
      rawEntries.find((e) => e[0] === sortedTraits[1][0])?.[1] || 0;

    return rawTrait1 >= rawTrait2 ? sortedTraits[0][0] : sortedTraits[1][0];
  }

  return sortedTraits[0][0];
};

// export const getPrimaryFlower = (rawScores: PersonalityScores): string => {
//   // NO NORMALIZATION - just raw scores
//   const entries = Object.entries(rawScores) as [keyof PersonalityScores, number][];
//   const sortedTraits = entries.sort((a, b) => b[1] - a[1]);
//   return sortedTraits[0][0];
// };

/**
 * Get complete quiz result with flower details
 */
export const getQuizResult = (rawScores: PersonalityScores) => {
  const primaryTrait = getPrimaryFlower(rawScores);
  const normalizedScores = normalizeScores(rawScores);

  // Find the matching flower result
  const result = FLOWER_RESULTS.find((flower) => flower.trait === primaryTrait);

  if (!result) {
    // Fallback
    return {
      primaryFlower: FLOWER_NAMES[primaryTrait as keyof typeof FLOWER_NAMES],
      trait: primaryTrait,
      description: `You are a beautiful ${FLOWER_NAMES[primaryTrait as keyof typeof FLOWER_NAMES]} spirit.`,
      careInstructions: "Trust your instincts when caring for your garden.",
      compatibleFlowers: ["Sunflower", "Hydrangea", "Dandelion"],
      scores: rawScores,
      normalizedScores,
    };
  }

  return {
    ...result,
    scores: rawScores,
    normalizedScores,
  };
};

/**
 * Debug function to check score balance
 */
export const getScoreBalanceDebug = (): Record<string, number> => {
  const totals: Partial<PersonalityScores> = {};

  Object.values(CHOICE_SCORES).forEach((conversation) => {
    Object.values(conversation).forEach((choice) => {
      Object.entries(choice).forEach(([trait, points]) => {
        const key = trait as keyof PersonalityScores;
        totals[key] = (totals[key] || 0) + (points ?? 0);
      });
    });
  });

  return totals as Record<string, number>;
};
