import { ChoiceOption } from "../types/quiz";

// Question 1: Is now a good time to chat?
const question1Choices: ChoiceOption[] = [
  {
    id: "1.1",
    score: 0,
    text: "Of course! Been looking forward to this all day!",
  },
  {
    id: "1.2",
    score: 0,
    text: "I should be good for the next 10', got some stuff to do after that",
  },
  {
    id: "1.3",
    score: 0,
    text: "I don't remember signing up, but I am intrigued...",
    additionalText: ["So ig we can continue with our business"],
  },
];

// Question 2: Response to "Great! So glad that you are interested..."
const question2Choices: ChoiceOption[] = [
  {
    id: "2.1",
    score: 0,
    text: "Can't wait to take my gardening to the next level!!",
  },
  {
    id: "2.2",
    score: 0,
    text: "Yeah, sounds like something I signed up for",
    additionalText: ["Looking forward to working with you"],
  },
  {
    id: "2.3",
    score: 0,
    text: "Welp, I'm in it for the freebies",
  },
];

// Question 3: First garden experience?
const question3Choices: ChoiceOption[] = [
  {
    id: "3.1",
    score: 0,
    text: "Nope, I have somewhat of a green thumb",
    additionalText: ["But I want to learn how else I can improve my game"],
  },
  {
    id: "3.2",
    score: 0,
    text: "I've tended to plants before, but not a whole garden",
    additionalText: [
      "So I definitely feel like I need some help with expanding",
    ],
  },
  {
    id: "3.3",
    score: 0,
    text: "Complete newbie here",
    additionalText: ["Very lost", "Please help"],
  },
];

// Question 4: How often can you tend to the garden?
const question4Choices: ChoiceOption[] = [
  {
    id: "4.1",
    score: 0,
    text: "Pretty often, I'd say it's a hobby",
    additionalText: [
      "Should be able to dedicate a good chunk of my time every week",
    ],
  },
  {
    id: "4.2",
    score: 0,
    text: "On and off, it depends on the day",
    additionalText: [
      "My schedule's a bit hectic right now",
      "So I'd say maybe only around 10'-30' per day",
    ],
  },
  {
    id: "4.3",
    score: 0,
    text: "I have no clue...",
  },
];

// Question 5: Low maintenance or extra care?
const question5Choices: ChoiceOption[] = [
  {
    id: "5.1",
    score: 0,
    text: "Go big or go home",
    additionalText: ["I'm ready to get serious!! 💪"],
  },
  {
    id: "5.2",
    score: 0,
    text: "Just looking for something that doesn't take away too much from my current flow",
    additionalText: ["I'm pretty busy as is"],
  },
  {
    id: "5.3",
    score: 0,
    text: "The most I want to do is water the plants lol",
    additionalText: ["I'm not the most hard working bee of the hive 😔"],
  },
];

// Question 6: How much space available?
const question6Choices: ChoiceOption[] = [
  {
    id: "6.1",
    score: 0,
    text: "I can dedicate a plot in my backyard garden for this!",
  },
  {
    id: "6.2",
    score: 0,
    text: "I have some modest space in my apartment that I think can use some green",
  },
  {
    id: "6.3",
    score: 0,
    text: "Does a window sill work?",
  },
];

const question7Choices: ChoiceOption[] = [
  {
    id: "7.1",
    score: 0,
    text: "Style A - Lush and vibrant",
  },
  {
    id: "7.2",
    score: 0,
    text: "Style B - Minimalist and modern",
  },
  {
    id: "7.3",
    score: 0,
    text: "Style C - Rustic and charming",
  },
];
// Question 8: Budget for the project?
const question8Choices: ChoiceOption[] = [
  {
    id: "8.1",
    score: 0,
    text: "I'm willing to splurge if that makes my plants thrive and happy 🥰",
  },
  {
    id: "8.2",
    score: 0,
    text: "I've set about $100 for this, not looking to increase it",
    additionalText: [
      "If it's really necessary then I can make some more wiggle room",
    ],
  },
  {
    id: "8.3",
    score: 0,
    text: "Let's start small first and see how I handle with that",
  },
];

export const flowerStoreChoices = [
  question1Choices,
  question2Choices,
  question3Choices,
  question4Choices,
  question5Choices,
  question6Choices,
  question7Choices,
  question8Choices,
];
