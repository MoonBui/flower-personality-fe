import { Message, Choice } from "../types/quiz";
import { FriendChoices } from "./FriendChoices";

export interface FriendScript extends Message {
  type: "npc";
  choices?: Choice;
}

export const FRIEND_CHAT_DATA: FriendScript[] = [
  {
    id: 1,
    text: "Oiiiiiiiiiiiiiiiii",
    type: "npc" as const,
  },
  {
    id: 2,
    text: "PARTY 🎉🎉🎉",
    type: "npc" as const,
  },
  {
    id: 3,
    text: "AT 8!",
    type: "npc" as const,
  },
  {
    id: 4,
    text: "TONIGHT",
    type: "npc" as const,
  },
  {
    id: 5,
    text: "EVERYONES GOING 🤪🤪",
    type: "npc" as const,
  },
  {
    id: 6,
    text: "YOU IN?",
    type: "npc" as const,
    choices: {
      conversation: "friend",
      id: "1",
      options: FriendChoices[0],
    },
  },
  {
    id: 7,
    text: "SLAYYYYYYYYYY",
    type: "npc" as const,
  },
  {
    id: 8,
    text: "I was waiting for that answer so I can join you lol!",
    type: "npc" as const,
  },
  {
    id: 9,
    text: "What is the ups these days?",
    type: "npc" as const,
    choices: {
      conversation: "friend",
      id: "2",
      options: FriendChoices[1],
    },
  },
  {
    id: 10,
    text: "Sounds like you're having more fun than what I've been doing",
    type: "npc" as const,
  },
  {
    id: 11,
    text: "*send help lm dying 🫠🫠🫠",
    type: "npc" as const,
  },
  {
    id: 12,
    text: "Anyways, *insert smooth topic change*",
    type: "npc" as const,
  },
  {
    id: 13,
    text: "We're grabbing food before our plans tonight",
    type: "npc" as const,
  },
  {
    id: 14,
    text: "Any cravings?",
    type: "npc" as const,
    choices: {
      conversation: "friend",
      id: "3",
      options: FriendChoices[2],
    },
  },
  {
    id: 15,
    text: "Alright, I'll check how things looks like on my end and lyk. see you later loveeeeeeee",
    type: "npc" as const,
  },
  {
    id: 16,
    text: "Dont be late 🗡️",
    type: "npc" as const,
  },
  {
    id: 17,
    text: "Byeeeeeeeee 😘",
    type: "npc" as const,
  },
];