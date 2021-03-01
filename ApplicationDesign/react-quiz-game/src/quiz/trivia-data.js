import he from "he";

// This will eventually come from a server

let triviaData = [
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "In baseball, how many fouls are an out?",
    correct_answer: "0",
    incorrect_answers: ["5", "3", "2"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the full name of the footballer &quot;Cristiano Ronaldo&quot;?",
    correct_answer: "Cristiano Ronaldo dos Santos Aveiro",
    incorrect_answers: [
      "Cristiano Ronaldo los Santos Diego",
      "Cristiano Armando Diego Ronaldo",
      "Cristiano Luis Armando Ronaldo",
    ],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question: "Which year was the third Super Bowl held?",
    correct_answer: "1969",
    incorrect_answers: ["1968", "1971", "1970"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most common type of pitch thrown by pitchers in baseball?",
    correct_answer: "Fastball",
    incorrect_answers: ["Slowball", "Screwball", "Palmball"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which professional wrestler fell from the rafters to his death during a live Pay-Per-View event in 1999?",
    correct_answer: "Owen Hart",
    incorrect_answers: ["Chris Benoit", "Lex Luger", "Al Snow"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Who won the 2017 Formula One World Drivers&#039; Championship?",
    correct_answer: "Lewis Hamilton",
    incorrect_answers: ["Sebastian Vettel", "Nico Rosberg", "Max Verstappen"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "What is Tiger Woods&#039; all-time best career golf-score?",
    correct_answer: "61",
    incorrect_answers: ["65", "63", "67"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question: "Which two teams played in Super Bowl XLII?",
    correct_answer: "The New York Giants &amp; The New England Patriots",
    incorrect_answers: [
      "The Green Bay Packers &amp; The Pittsburgh Steelers",
      "The Philadelphia Eagles &amp; The New England Patriots",
      "The Seattle Seahawks &amp; The Denver Broncos",
    ],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "What country hosted the 2014 Winter Olympics?",
    correct_answer: "Russia",
    incorrect_answers: ["Canada", "United States", "Germany"],
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
    correct_answer: he.decode(item.correct_answer),
    incorrect_answers: item.incorrect_answers.map((incorrect) =>
      he.decode(incorrect)
    ),
  };
});
// Just for testing purposes
triviaData = triviaData.slice(0, 2);

export default triviaData;
