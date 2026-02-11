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
