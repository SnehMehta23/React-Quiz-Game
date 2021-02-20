import Confetti from "react-confetti";
import { useState } from "react";

function ConfettiDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [numParticles, setNumParticles] = useState(200);

  const toggleConfetti = () => setIsRunning(!isRunning);

  const onParticleChange = (event) => {
    const newNumParticles = parseInt(event.target.value, 10);
    setNumParticles(newNumParticles);
  };

  const buttonText = isRunning
    ? "Turn Confetti Party Off"
    : "Turn Confetti Party On";

  return (
    <div>
      <div>
        <label htmlFor="numParticles">Number of Particles:</label>
        <input
          type="range"
          id="numParticles"
          min="1"
          max="3000"
          step="1"
          value={numParticles}
          onChange={onParticleChange}
        />
      </div>
      <div>
        <button onClick={toggleConfetti}>{buttonText}</button>
      </div>
      <Confetti numberOfPieces={numParticles} gravity={0.2} run={isRunning} />
    </div>
  );
}

export default ConfettiDemo;
