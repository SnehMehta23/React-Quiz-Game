import triviaItems from "./trivia-items.js";
import shuffle from "./shuffle.js";
const scoreElement = document.querySelector("#score");
const questionNumberElement = document.querySelector("#question-number");
const triviaContainer = document.querySelector("#trivia-container");
const mainContainer = document.querySelector(".main-container");
const triviaItemTemplate = document.querySelector("#trivia-item-template");
let score = 0;
let triviaItemIndex = 0;

// Keep our score variable in sync with the UI.
function updateScore(newScore) {
  score = newScore;
  scoreElement.textContent = score;

  const scoreContainerElement = scoreElement.parentElement;
  const keyframes = [
    { transform: "scale(1)" },
    { transform: "scale(1.2)" },
    { transform: "scale(1)" },
  ];
  const options = {
    duration: 500,
    iterations: 2,
    easing: "ease-in-out",
  };
  scoreContainerElement.animate(keyframes, options);
}

// Keep our index in sync with the UI.
function updateQuestionNumber() {
  const questionNum = triviaItemIndex + 1;
  const totalNumQuestions = triviaItems.length;
  questionNumberElement.textContent = `${questionNum}/${totalNumQuestions}`;
}

// Clone our template and fill it in with a trivia nothing
function displayTriviaItem() {
  const triviaItem = triviaItems[triviaItemIndex];
  //can rename a property name - "renaming when creating variables" looks like this -> ex: correct_answer: correctAnswer

  //Object restructuring with renaming properties
  const {
    question,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
  } = triviaItem;

  //Create shuffled answers:
  const allAnswers = shuffle([correctAnswer, ...incorrectAnswers]);

  const triviaItemElement = triviaItemTemplate.content.cloneNode(true);
  const questionElement = triviaItemElement.querySelector(
    ".trivia-item__question"
  );
  questionElement.innerHTML = question;

  const buttonElements = triviaItemElement.querySelectorAll(
    ".trivia-item__button"
  );
  // query selector all brings you a sort of list of all the elements
  buttonElements.forEach((button, index) => {
    button.innerHTML = allAnswers[index];
    button.addEventListener("click", onAnswerClicked);
  });

  triviaContainer.appendChild(triviaItemElement);

  const triviaDiv = triviaContainer.querySelector(".trivia-item");
  const keyframes = [{ opacity: 0 }, { opacity: 1 }];
  const options = {
    duration: 500,
    easing: "ease-out",
  };
  triviaDiv.animate(keyframes, options);
}

// Check if the answer picked was correct or incorrect.
function onAnswerClicked(event) {
  const target = event.target;
  const selectedAnswer = target.innerHTML;
  const triviaItem = triviaItems[triviaItemIndex];
  const correctAnswer = triviaItem.correct_answer;

  const buttonElements = triviaContainer.querySelectorAll(
    ".trivia-item__button"
  );

  buttonElements.forEach((button) => {
    button.disabled = true;
    button.classList.add("trivia-item__button--disabled");
  });

  if (selectedAnswer === correctAnswer) {
    console.log("Correct!");
    target.classList.add("trivia-item__button--correct");
    updateScore(score + 1);
  } else {
    console.log("Incorrect!");
    target.classList.add("trivia-item__button--incorrect");
  }

  const triviaDiv = triviaContainer.querySelector(".trivia-item");
  const keyframes = [{ opacity: 1 }, { opacity: 0 }];
  const options = {
    duration: 500,
    delay: 500,
    easing: "ease-in",
  };
  const animation = triviaDiv.animate(keyframes, options);

  animation.addEventListener("finish", () => {
    clearTrivia();
    triviaItemIndex += 1;

    if (triviaItemIndex === triviaItems.length) {
      // alert(`Game over! Your final score is ${score}.`);
      const gameOverDivContainer = mainContainer.querySelector(".stats");
      gameOverDivContainer.insertAdjacentHTML(
        "beforebegin",
        `<p class = "game-over__text">Game Over! <br> Final Score: ${score}.`
      );

      const gameOverDiv = mainContainer.querySelector(".game-over__text");
      const gameOverKeyFrames = [{ opacity: 0 }, { opacity: 1 }];
      const gameOverOptions = {
        duration: 1000,
        easing: "ease-in",
      };  
      const gameOverAnimation = gameOverDiv.animate(gameOverKeyFrames, gameOverOptions);
    } else {
      displayTriviaItem();
      updateQuestionNumber();
    }
  });
}

function fadeInAnimation() {
  //TODO maybe
}

// Clearing trivia items from the age.
function clearTrivia() {
  for (const child of triviaContainer.children) {
    triviaContainer.removeChild(child);
  }
}

//anytime you want to change the score u call this
updateQuestionNumber();
displayTriviaItem();

// === Testing ===
// console.log(scoreElement, questionNumberElement, triviaContainer, triviaItemTemplate);
// scoreElement.textContent = 10;
// questionNumberElement.textContent = "2/15";
// triviaContainer.insertAdjacentHTML("beforeend", "<p>Testing!</p>");

// // what this ".content.cloneNode(true)" means is that we are getting access to the div that is in the template, and then we are asking for that div to be cloned and (true) means to do a deep clone of all the children elements as well
// const testTriviaItem = triviaItemTemplate.content.cloneNode(true);

// const questionElement = testTriviaItem.querySelector(".trivia-item__question");
// questionElement.innerHTML = "What&#039;s the first National Park designated in the United States?";

// const buttonElements = testTriviaItem.querySelectorAll(".trivia-item__button");
// // query selector all brings you a sort of list of all the elements
// buttonElements[0].innerHTML = "Yellowstone";
// buttonElements[1].innerHTML = "Sequoia";
// buttonElements[2].innerHTML = "Yosemite";
// buttonElements[3].innerHTML = "Rocky Mountain";

// triviaContainer.appendChild(testTriviaItem);

// Structure approach: think about the application as a couple pieces of state that we will maintain as variables in this file. And a couple of functions that will need to run at specific times in the life cycle of the game
