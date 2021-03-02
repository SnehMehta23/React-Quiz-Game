import he from "he";

// This will eventually come from a server

let triviaData = [
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Which of the following sports is not part of the triathlon?",
    correct_answer: "Horse-Riding",
    incorrect_answers: ["Cycling", "Swimming", "Running"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "The F1 season of 1994 is remembered for what tragic event?",
    correct_answer: "Death of Ayrton Senna (San Marino)",
    incorrect_answers: [
      "The Showdown (Australia)",
      "Verstappen on Fire (Germany)",
      "Schumacher&#039;s Ban (Britain)",
    ],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
    correct_answer: "7 - 1",
    incorrect_answers: ["0 - 1", "3 - 4", "16 - 0"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Which team was the 2015-2016 NBA Champions?",
    correct_answer: "Cleveland Cavaliers",
    incorrect_answers: [
      "Golden State Warriors",
      "Toronto Raptors",
      "Oklahoma City Thunders",
    ],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question: "Where was the Games of the XXII Olympiad held?",
    correct_answer: "Moscow",
    incorrect_answers: ["Barcelona", "Tokyo", "Los Angeles"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following Grand Slam tennis tournaments occurs LAST?",
    correct_answer: "US Open",
    incorrect_answers: ["French Open", "Wimbledon", "Australian Open"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Who won the &quot;Champions League&quot; in 1999?",
    correct_answer: "Manchester United",
    incorrect_answers: ["Barcelona", "Bayern Munich", "Liverpool"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which African American is in part responsible for integrating  Major League baseball?",
    correct_answer: "Jackie Robinson",
    incorrect_answers: ["Curt Flood", "Roy Campanella", "Satchell Paige"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Who did Steven Gerrard win the Champions League with?",
    correct_answer: "Liverpool",
    incorrect_answers: ["Real Madrid", "Chelsea", "Man City"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Which basketball team has attended the most NBA grand finals?",
    correct_answer: "Los Angeles Lakers",
    incorrect_answers: [
      "Boston Celtics",
      "Philadelphia 76ers",
      "Golden State Warriors",
    ],
  },
];

triviaData = triviaData.map((item) => {
  return {
    ...item,
    question: he.decode(item.question),
    difficulty: he.decode(item.difficulty),
    correct_answer: he.decode(item.correct_answer),
    incorrect_answers: item.incorrect_answers.map((incorrect) =>
      he.decode(incorrect)
    ),
  };
});
// Just for testing purposes
// triviaData = triviaData.slice(0, 2);

export default triviaData;
