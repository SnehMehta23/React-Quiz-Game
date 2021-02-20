import Confetti from "react-confetti";
import { useState } from "react";

function ConfettiDemo() {
  const [isRunning, setIsRunning] = useState(false);
  return (
    <div>
      <Confetti numberOfPieces={2000} gravity={0.2} run={isRunning} />
    </div>
  );
}

export default ConfettiDemo;
