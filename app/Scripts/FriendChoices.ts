import { ChoiceOption } from "../types/quiz";

// Question 1: YOU IN?
const question1Choices: ChoiceOption[] = [
  {
    id: "1.1",
    score: 0,
    text: "Hell yeah!",
    additionalText: [
      "I've been itching for booze and distractions from my existential dread 🫠🫠",
    ],
  },
  {
    id: "1.2",
    score: 0,
    text: "Hell nah",
    additionalText: [
      "My immaculate vibes belong indoors today",
      "In my doors not someone else's",
    ],
  },
  {
    id: "1.3",
    score: 0,
    text: "Maybe, my vibes will decide at 7:59",
  },
];

// Question 2: What is the ups these days?
const question2Choices: ChoiceOption[] = [
  {
    id: "2.1",
    score: 0,
    text: "I have a plant project going for me",
    additionalText: ["Wanted to spruce of the space around me a little bit"],
  },
  {
    id: "2.2",
    score: 0,
    text: "Nothing much, kinda lazing through the days",
    additionalText: [
      "Im in my gremlin phase, do not seek of me until I willingly come out of my cave 😌🫶",
    ],
  },
  {
    id: "2.3",
    score: 0,
    text: "Depends on what day your asking",
    additionalText: [
      "Some days it's serotonin and rainbows",
      "Other days it's existential dread and shower",
    ],
  },
];

// Question 3: Any cravings?
const question3Choices: ChoiceOption[] = [
  {
    id: "3.1",
    score: 0,
    text: "Nothing in particular",
    additionalText: [
      "Other than the insatiable crave for money and power 💅✨",
    ],
  },
  {
    id: "3.2",
    score: 0,
    text: "Something soupy",
    additionalText: [
      "I want to be bundled up and cozied",
      "The creature yearns for warmth",
    ],
  },
  {
    id: "3.3",
    score: 0,
    text: "Idk, wanna just come over for dinner?",
    additionalText: ["Dad might be cooking up sth tonight"],
  },
];

export const FriendChoices = [
  question1Choices,
  question2Choices,
  question3Choices,
];
