import { ChoiceOption } from "../types/quiz";

// Question 1: Response to grocery request
const question1Choices: ChoiceOption[] = [
  {
    id: "1.1",
    score: 0,
    text: "Sure chief, can head out around 6 or something",
    additionalText: ["might have something going on at 8 though"],
  },
  {
    id: "1.2",
    score: 0,
    text: "Ummmmmmm I'm still deciding on my plans",
    additionalText: ["I'll lyk if I can pick stuff up or not"],
  },
  {
    id: "1.3",
    score: 0,
    text: "Your child expresses hesitancy towards this request and is reluctant to fulfill it",
    additionalText: [
      "Your child urges you to consider other humans for this request",
    ],
  },
];

// Question 2: What mischief are you up to?
const question2Choices: ChoiceOption[] = [
  {
    id: "2.1",
    score: 0,
    text: "Hanging out with a favorite human of mind",
    additionalText: ["Things are gonna get wild"],
  },
  {
    id: "2.2",
    score: 0,
    text: "None of your business 🙂‍↔️",
  },
  {
    id: "2.3",
    score: 0,
    text: "Staying in, movie on, doors shut to society",
    additionalText: ["It will be a glorious night"],
  },
];

// Question 3: Response to the menu
const question3Choices: ChoiceOption[] = [
  {
    id: "3.1",
    score: 0,
    text: "Your child agrees with the assessment",
    additionalText: [
      "and requests it to be specially prepared to their taste",
      "Your child is very particular about their preferences",
    ],
  },
  {
    id: "3.2",
    score: 0,
    text: "My liege",
    additionalText: [
      "Tis a wonderful sounding menu",
      "I must inform you that there maybe extra company who would greatly appreciate your cooking talents",
    ],
  },
  {
    id: "3.3",
    score: 0,
    text: "My lord",
    additionalText: [
      "Tis lovely indeed",
      "But i am on a diet",
      "And that is not diet friendly food…",
    ],
  },
];

export const GuardianChoices = [
  question1Choices,
  question2Choices,
  question3Choices,
];
