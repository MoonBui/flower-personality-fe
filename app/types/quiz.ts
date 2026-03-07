export interface Message {
  id: number;
  type: "npc" | "user";
  text: string;
  choices?: Choice;
}

export interface Choice {
  conversation: "flowerStore" | "friend" | "guardian";
  id: string;
  options: ChoiceOption[];
}

export interface ChoiceOption {
  id: string;
  score: number;
  text: string;
  additionalText?: string[];
}

export interface PersonalityScores {
  SUN: number;
  DESERT: number;
  MIST: number;
  ALPINE: number;
  THORN: number;
  WIND: number;
  MOON: number;
  SHRUB: number;
}

export interface ScoreMapping {
  [key: string]: Partial<PersonalityScores>;
}

export interface QuizResult {
  primaryFlower: string;
  compatibleFlowers: string[];
  personalityDescription: string;
  scoreBreakdown: PersonalityScores;
}
