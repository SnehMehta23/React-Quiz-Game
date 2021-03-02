import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import triviaData from "./trivia-data";
import { FadeTransition, FadeWrapper } from "./fade-transition";
import useSound from "use-sound";
import correctSfx from "./../sounds/game-sound-correct.wav";
import incorrectSfx from "./../sounds/game-sound-wrong.wav";

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
      // Using the spread operator to copy the gameState and override the triviaIndex
      setGameState({ ...gameState, triviaIndex: triviaIndex + 1 });
    }
  };

  const [correct] = useSound(correctSfx);
  const [incorrect] = useSound(incorrectSfx);

  const onAnswerSelected = (wasPlayerCorrect) => {
    if (wasPlayerCorrect) {
      const questionDifficulty =
        difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
      correct();
      if (questionDifficulty === "Easy") {
        setGameState({
          ...gameState,
          score: score + 1,
        });
      } else if (questionDifficulty === "Medium") {
        setGameState({
          ...gameState,
          score: score + 2,
        });
      } else {
        setGameState({
          ...gameState,
          score: score + 3,
        });
      }
    } else {
      incorrect();
    }
  };
  const triviaQuestion = triviaData[triviaIndex];
  const {
    correct_answer,
    incorrect_answers,
    question,
    difficulty,
  } = triviaQuestion;

  let pageContent;
  let pageKey;
  if (isGameOver) {
    pageKey = "EndScreen";
    pageContent = (
      <EndScreen score={score} bestScore={0} onRetryClick={restartGame} />
    );
  } else {
    pageKey = triviaIndex;
    pageContent = (
      <TriviaItem
        key={triviaIndex}
        difficulty={difficulty}
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
        difficulty={difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      />
      <FadeWrapper>
        <FadeTransition key={pageKey}>{pageContent}</FadeTransition>
      </FadeWrapper>
    </>
  );
}

export default Game;
