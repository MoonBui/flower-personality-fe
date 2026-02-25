import { Message, Choice } from "../types/quiz";
import { GuardianChoices } from "./GuardianChoices";

export interface GuardianScript extends Message {
  type: "npc";
  choices?: Choice;
}

export const GUARDIAN_CHAT_DATA: GuardianScript[] = [
  {
    id: 1,
    text: "I'm gonne be home a little later tonight, gonna need you to pick up some groceries so I can make dinner",
    type: "npc" as const,
    choices: {
      conversation: "guardian",
      id: "1",
      options: GuardianChoices[0],
    },
  },
  {
    id: 2,
    text: "Alright child. If you can't make it I can just ask mom to go. What mischief are you up to tonight?",
    type: "npc" as const,
    choices: {
      conversation: "guardian",
      id: "2",
      options: GuardianChoices[1],
    },
  },
  {
    id: 3,
    text: "Don't be staying up and having too much fun then.",
    type: "npc" as const,
  },
  {
    id: 4,
    text: "I'm thinking of making pumpkin soup with some cheesy garlic bread. Those make for some good leftovers",
    type: "npc" as const,
    choices: {
      conversation: "guardian",
      id: "3",
      options: GuardianChoices[2],
    },
  },
  {
    id: 5,
    text: "Well then I'll have to make it extra creamy with toasted sour dough, just how you like it, and I'll make extras. See you later dear.",
    type: "npc" as const,
  },
];
