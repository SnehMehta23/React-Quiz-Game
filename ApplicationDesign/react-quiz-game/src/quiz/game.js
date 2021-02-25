import { useState } from "react";
import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import triviaData from "./trivia-data";
/**
 * The Game is responsible for orchestrating the flow of the quiz game.
 */
function Game() {
  // Could store as seperate useStates but there will be time where we want to reset all three pieces of state, and can be more efficient to set it up as properties of a shared object
  const [gameState, setGameState] = useState({
    score: 0,
    triviaIndex: 0,
    isGameOver: false,
  });

  const { score, triviaIndex, isGameOver } = gameState;
  const questionNumber = triviaIndex + 1;
  const numQuestions = triviaData.length;

  const restartGame = () => {
    setGameState({
      score: 0,
      isGameOver: false,
      triviaIndex: 0,
    });
  };

  const loadNextQuestion = () => {
    if (triviaIndex >= triviaData.length - 1) {
      setGameState({ ...gameState, isGameOver: true });
    } else {
      // Using the spread operator to copy the gameState and override the triviaINdex
      setGameState({ ...gameState, triviaIndex: triviaIndex + 1 });
    }
  };

  const onAnswerSelected = (wasPlayerCorrect) => {
    if (wasPlayerCorrect) {
      setGameState({
        ...gameState,
        score: score + 1,
      });
    }
  };

  let pageContent;
  if (isGameOver) {
    pageContent = (
      <EndScreen score={score} bestScore={0} onRetryClick={restartGame} />
    );
  } else {
    const triviaQuestion = triviaData[triviaIndex];
    const { correct_answer, incorrect_answers, question } = triviaQuestion;
    pageContent = (
      <TriviaItem
        key={triviaIndex}
        question={question}
        correctAnswer={correct_answer}
        incorrectAnswers={incorrect_answers}
        onNextClick={loadNextQuestion}
        onAnswerSelected={onAnswerSelected}
      />
    );
  }

  return (
    // React <> fragments allow us to create a parent element without adding any extra markup(HTML)
    // A series of react components cannot be added in a group without a parent element

    // can put JSX into a variable and put that onto the page, the same as any other variable
    <>
      <Stats
        score={score}
        questionNumber={questionNumber}
        totalQuestions={numQuestions}
      />
      {pageContent}
    </>
  );
}

export default Game;
