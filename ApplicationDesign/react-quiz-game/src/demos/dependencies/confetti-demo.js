import Confetti from "react-confetti";
import { useState } from "react";
import { useWindowSize } from "react-use";

function ConfettiDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [numParticles, setNumParticles] = useState(100);
  const [gravity, setGravity] = useState(0.1);
  const [wind, setWind] = useState(0);
  const [resetWind] = useState(0);
  const [resetGravity] = useState(0.1);
  const [resetNumParticles] = useState(100);

  const confettiWidth = window.innerWidth / 2;
  const confettiHeight = window.innerHeight / 2;

  console.log(confettiWidth);
  console.log(confettiHeight);

  const toggleConfetti = () => setIsRunning(!isRunning);

  const onResetButtonClick = () => {
    setWind(resetWind);
    setGravity(resetGravity);
    setNumParticles(resetNumParticles);
  };

  const onParticleChange = (event) => {
    const newNumParticles = parseInt(event.target.value, 10);
    setNumParticles(newNumParticles);
  };

  const onGravityChange = (event) => {
    const newGravity = parseFloat(event.target.value);
    setGravity(newGravity);
  };

  const onWindChange = (event) => {
    const newWindSpeed = parseFloat(event.target.value);
    setWind(newWindSpeed);
  };

  const buttonStyle = {
    marginTop: "0.5rem",
  };

  const buttonText = isRunning
    ? "Turn Confetti Party Off"
    : "Turn Confetti Party On";

  return (
    <div>
      <div>
        <label htmlFor="numParticles"># of Particles:</label>
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
        <label htmlFor="gravity">Gravity:</label>
        <input
          type="range"
          id="gravity"
          min="0"
          max="1"
          step="0.1"
          value={gravity}
          onChange={onGravityChange}
        />
      </div>
      <div>
        <label htmlFor="wind">Wind:</label>
        <input
          type="range"
          id="wind"
          min="-1"
          max="1"
          step="0.1"
          value={wind}
          onChange={onWindChange}
        />
      </div>
      <div>
        <button onClick={toggleConfetti}>{buttonText}</button>
      </div>
      <div>
        <button style={buttonStyle} onClick={onResetButtonClick}>
          Reset
        </button>
      </div>
      <Confetti
        numberOfPieces={numParticles}
        gravity={gravity}
        wind={wind}
        run={isRunning}
        colors={["#26a9cc", "#f48760", "#bc7efd"]}
        confettiSource={{ x: confettiWidth, y: confettiHeight }}
      />
    </div>
  );
}

export default ConfettiDemo;
