import shuffle from "./shuffle.js";

// === Basic Arrays & Loops ===

// arrays can be mixed type in js aswell
// const playerScores = [12, 13, 11, 9, 13];

// // i = index, arrays are zero based of course
// for (let i = 0; i < playerScores.length; i++) {
//     console.log(`Score ${i} is ${playerScores[i]}`);
// }

// // another way to write this loop

// for (const score of playerScores) {
//     console.log(score);
//     // Don't have access to the index by default
// }

// // also a functional approach

// function printScore(score, index, array) {
//     console.log(`Score ${index} is ${score}`);
//     // Can't exit the forEach early with a "break" statement
// }
// playerScores.forEach(printScore);

// === Questions Array ===

// const questions = [
//     { text : "Can an octopus can fit through any hole larger than its beak?", answer: "Yes"},
//     { text : "Is the National Animal of Scotland the Unicorn?", answer: "Yes"},
//     { text : "Bleach never expires", answer: "No"},
// ];

// questions.forEach((question, index) => {
//     // console.log(index);
//     // console.log(question.text);
//     // console.log(question.answer);
//     // const text = question.text;
//     // const answer = question.answer;
//     // Object Destructuring;
//     const {text, answer} = question;
//     const playerAnswer = prompt(text);
//     // === to compare with strict equality. == is BAD
//     if(playerAnswer === answer) {
//         alert("Correct");
//     } else {
//         alert("Wrong!");
//     }
// });

// === Trivia Game In Prompts ===

const triviaItems = [
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "medium",
    question: "Who was the Roman god of fire?",
    correct_answer: "Vulcan",
    incorrect_answers: ["Apollo", "Jupiter", "Mercury"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following Mesopotamian mythological figures was NOT a deity?",
    correct_answer: "Enkidu",
    incorrect_answers: ["Enki", "Enlil", "Enkimdu"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "hard",
    question: "In Greek Mythology, who was the daughter of King Minos?",
    correct_answer: "Ariadne",
    incorrect_answers: ["Athena", "Ariel", "Alana"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
    correct_answer: "Orpheus",
    incorrect_answers: ["Hercules", "Perseus", "Daedalus"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "medium",
    question: "A minotaur is half human half what?",
    correct_answer: "Bull",
    incorrect_answers: ["Cow", "Horse", "Eagle"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of these mythological creatures is said to be half-man and half-horse?",
    correct_answer: "Centaur",
    incorrect_answers: ["Minotaur", "Pegasus", "Gorgon"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "medium",
    question:
      "In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?",
    correct_answer: "Spider",
    incorrect_answers: ["Wild dog", "Monkey", "Crocodile"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "easy",
    question:
      "The Nike apparel and footwear brand takes it&#039;s name from the Greek goddess of what?",
    correct_answer: "Victory",
    incorrect_answers: ["Courage", "Strength", "Honor"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "medium",
    question:
      "According to Japanese folklore, what is the favorite food of the Kappa.",
    correct_answer: "Cucumbers",
    incorrect_answers: ["Kabocha", "Nasu", "Soba"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "medium",
    question: "What is the name of the first human being in Norse mythology?",
    correct_answer: "Ask",
    incorrect_answers: ["Asmund", "Ake", "Asger"],
  },
];

let score = 0;

triviaItems.forEach((triviaItem, index) => {
  const {
    question,
    correct_answer,
    incorrect_answers,
    category,
    difficulty,
  } = triviaItem;
  const allAnswers = shuffle([correct_answer, ...incorrect_answers]);
  // console.log(question);
  // console.log(correct_answer);
  // console.log(allAnswers);
  let questionText = `==============
Question Category: ${category}
Question Difficulty: ${difficulty}
Question Number: ${index + 1}
Score: ${score}
==============
${question}
${allAnswers.join(" | ")}
`;

  let startTime = performance.now();
  const playerAnswer = prompt(questionText);
  let elapsedTime = performance.now() - startTime;
  if (playerAnswer === correct_answer) {
    alert(
      `Correct! Your elapsed time was: ${Math.round(
        elapsedTime * 0.001
      )} seconds!`
    );
    score += 1;
  } else {
    alert(
      `Wrong! Your elapsed time was: ${Math.round(
        elapsedTime * 0.001
      )} seconds!`
    );
  }
});
alert(`Results: Score: ${score} out of 10`);
