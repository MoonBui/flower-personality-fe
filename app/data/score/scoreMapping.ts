import { PersonalityScores } from "../../types/quiz";
import { conversationIds } from "../../types/conversationState";

export type ScoreMapping = {
  [conversation in conversationIds]: {
    [choiceId: string]: Partial<PersonalityScores>;
  };
};

export const CHOICE_SCORES: ScoreMapping = {
  flowerStore: {
    // Question 1
    "1.1": { SUN: 2, SHRUB: 2 }, // SUN/SHRUB only - Rose wouldn't say this
    "1.2": { ALPINE: 2, DESERT: 1, THORN: 1 }, // ADD THORN - honest about time
    "1.3": { MOON: 2, WIND: 2 }, // Keep MOON/WIND

    // Question 2
    "2.1": { ALPINE: 2, SUN: 2 }, // Keep - Rose wouldn't say this
    "2.2": { SHRUB: 2, DESERT: 2 }, // Keep - Rose wouldn't say this
    "2.3": { WIND: 2, THORN: 2 }, // BOOST THORN - "freebies" is very Rose

    // Question 3
    "3.1": { ALPINE: 2, SHRUB: 2 }, // Keep
    "3.2": { MIST: 3, SHRUB: 1, SUN: 1 }, // Keep - Rose wouldn't say "I need help"
    "3.3": { MOON: 2, WIND: 2 }, // Keep

    // Question 4
    "4.1": { ALPINE: 2, SHRUB: 2 }, // Keep
    "4.2": { WIND: 2, DESERT: 1, MOON: 1, THORN: 1 }, // ADD THORN - honest about limits
    "4.3": { MOON: 2, WIND: 1, MIST: 1, SUN: 1 }, // Keep

    // Question 5
    "5.1": { ALPINE: 2, SUN: 1, THORN: 1 }, // Keep
    "5.2": { DESERT: 2, WIND: 1, SHRUB: 1 }, // Keep
    "5.3": { WIND: 2, MOON: 1, MIST: 1, THORN: 1 }, // ADD THORN - playful honesty is Rose

    // Question 6
    "6.1": { ALPINE: 2, SHRUB: 1, SUN: 2 }, // Keep
    "6.2": { MIST: 2, SHRUB: 1, MOON: 1 }, // Keep
    "6.3": { WIND: 2, DESERT: 1, MOON: 1, THORN: 1 }, // ADD THORN - honest about space

    // Question 7
    "7.1": { SUN: 2, MIST: 1, SHRUB: 1, WIND: 1 }, // Keep
    "7.2": { ALPINE: 2, DESERT: 1, MOON: 1, THORN: 1 }, // ADD THORN - minimalist appeals to Rose
    "7.3": { MOON: 2, SHRUB: 1, MIST: 1 }, // Keep

    // Question 8
    "8.1": { MIST: 2, SHRUB: 1, SUN: 1 }, // Keep
    "8.2": { ALPINE: 2, WIND: 1, DESERT: 1, THORN: 1 }, // ADD THORN - budget-conscious
    "8.3": { DESERT: 2, WIND: 1, MOON: 1 }, // Keep
  },

  friend: {
    // Question 1
    "1.1": { SUN: 2, WIND: 1, SHRUB: 1 }, // Keep
    "1.2": { DESERT: 2, MOON: 1, MIST: 1, THORN: 1 }, // ADD THORN - "hell nah" is Rose
    "1.3": { WIND: 2, MOON: 1, SUN: 1 }, // Keep

    // Question 2
    "2.1": { SHRUB: 2, ALPINE: 1, SUN: 1 }, // Keep
    "2.2": { DESERT: 2, MOON: 1, WIND: 1, THORN: 1 }, // ADD THORN - "lazing through days"
    "2.3": { MIST: 2, MOON: 1, THORN: 1 }, // Keep (already has THORN)

    // Question 3
    "3.1": { ALPINE: 2, THORN: 2, WIND: 1 }, // BOOST THORN - "money and power"
    "3.2": { MIST: 2, MOON: 1, SHRUB: 1 }, // Keep
    "3.3": { SHRUB: 2, SUN: 1, WIND: 1 }, // Keep
  },

  guardian: {
    // Question 1
    "1.1": { SHRUB: 2, ALPINE: 1, SUN: 1 }, // Keep
    "1.2": { WIND: 2, MOON: 1, MIST: 1 }, // Keep - indecisive isn't Rose
    "1.3": { THORN: 2, DESERT: 1, ALPINE: 1 }, // Keep (strong Rose)

    // Question 2
    "2.1": { SUN: 2, WIND: 1, SHRUB: 1 }, // Keep
    "2.2": { THORN: 2, DESERT: 1, MOON: 1 }, // Keep (strong Rose)
    "2.3": { DESERT: 2, MOON: 1, MIST: 1 }, // Keep

    // Question 3
    "3.1": { THORN: 2, ALPINE: 1, DESERT: 1 }, // Keep (strong Rose)
    "3.2": { SHRUB: 2, SUN: 1, MIST: 1 }, // Keep
    "3.3": { ALPINE: 2, DESERT: 1, MOON: 1 }, // Keep
  },
};
