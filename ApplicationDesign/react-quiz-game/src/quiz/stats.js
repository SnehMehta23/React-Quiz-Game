import { AnimatePresence, motion } from "framer-motion";
import "./stats.css";

//TODO Animate the score and question number on each click (AnimatePresence?)

function Stat({ label, value }) {
  return (
    <li className="stats__stat-container">
      <div className="stats__stat-label">{label}:</div>
      <motion.div
        className="stats__stat-value"
        initial={{ scale: 0, originX: 0.5, originY: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      >
        {value}
      </motion.div>
    </li>
  );
}

/**
 * The Stats component renders the score and current question number
 * @param {object} props
 * @param {number} props.score
 * @param {number} props.questionNumber
 * @param {number} props.totalQuestions
 */

// props are one of the main ways we can communicate across our code
function Stats({ score, questionNumber, totalQuestions }) {
  return (
    <ul className="stats">
      <Stat label="Score" value={score} />
      <Stat label="Question" value={`${questionNumber} / ${totalQuestions}`} />
    </ul>
  );
}

export default Stats;
