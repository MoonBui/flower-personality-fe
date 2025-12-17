import { Message, Choice } from "../types/quiz";
import { flowerStoreChoices } from "./FlowStoreChoices";

export interface FlowStoreScript extends Message {
  type: "npc";
  choices?: Choice;
}

export const FLOW_STORE_DATA: FlowStoreScript[] = [
  {
    id: 1,
    text: "Hello! This is Moon from Build-A-Garden. You left a voicemail asking for our services. Is now a good time to chat?",
    choices: {
      conversation: "flowerStore",
      id: "1",
      options: flowerStoreChoices[0],
    },
    type: "npc" as const,
  },
  {
    id: 2,
    text: "Great! So glad that you are interested in working with us! Just wanted to go through a couple of questions so we can customize the best garden for you!",
    type: "npc" as const,
  },
  {
    id: 3,
    text: "In case you forgot, we offer a special complimentary seed that we think will best fit the needs for your garden and style of care.",
    type: "npc" as const,
  },
  {
    id: 4,
    text: "Essentially something that will reflect you and best suit your lifestyle! Hope that sounds good!",
    type: "npc" as const,
    choices: {
      conversation: "flowerStore",
      id: "2",
      options: flowerStoreChoices[1],
    },
  },
  {
    id: 5,
    text: "Amazing, let's get things started. First things first, will this be your first garden?",
    type: "npc" as const,
    choices: {
      conversation: "flowerStore",
      id: "3",
      options: flowerStoreChoices[2],
    },
  },
  {
    id: 6,
    text: "Nice! It's always exciting to put care into your little green space, be it your first or millionth time.",
    type: "npc" as const,
  },
  {
    id: 7,
    text: "Glad that you chose us to accompany you this time!",
    type: "npc" as const,
  },
  {
    id: 8,
    text: "How often will you be able to tend to the garden?",
    type: "npc" as const,
    choices: {
      conversation: "flowerStore",
      id: "4",
      options: flowerStoreChoices[3],
    },
  },
  {
    id: 9,
    text: "Are you thinking of something more low maintenance or are you able to dedicate some extra care to this?",
    type: "npc" as const,
    choices: {
      conversation: "flowerStore",
      id: "5",
      options: flowerStoreChoices[4],
    },
  },
  {
    id: 10,
    text: "Yep, totally get it! Whatever suits your needs!",
    type: "npc" as const,
  },
  {
    id: 11,
    text: "How much space will we be able to use for this project?",
    type: "npc" as const,
    choices: {
      conversation: "flowerStore",
      id: "6",
      options: flowerStoreChoices[5],
    },
  },
  {
    id: 12,
    text: "I have a couple of pics here from past clients. Which style are you drawn to the most?",
    type: "npc" as const,
    choices: {
      conversation: "flowerStore",
      id: "7",
      options: flowerStoreChoices[6],
    },
  },
  {
    id: 13,
    text: "Oooooooo good eye! That's one of my personal favorites for sure!",
    type: "npc" as const,
  },
  {
    id: 14,
    text: "I almost forgot, what does your budget look like for this project?",
    type: "npc" as const,
    choices: {
      conversation: "flowerStore",
      id: "8",
      options: flowerStoreChoices[7],
    },
  },
  {
    id: 15,
    text: "Lovely, we can definitely make that work! Alright, I think we're good with the initial questions for now",
    type: "npc" as const,
  },
  {
    id: 16,
    text: "Lemme go over my notes and see what we can do in terms of your garden and complimentary seed!",
    type: "npc" as const,
  },
];
