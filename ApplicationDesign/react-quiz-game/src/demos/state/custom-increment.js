import { useState } from "react";

function CustomIncrement() {
  const [amount, setAmount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(1);
  const onAddButtonClick = () => {
    setAmount(amount + incrementCount);
  };

  const onResetButtonClick = () => {
    setIncrementCount(1);
    setAmount(0);
  };

  const onIncrementChange = (event) => {
    const newIncrement = parseInt(event.target.value);
    setIncrementCount(newIncrement);
  };

  const buttonStyle = {
    marginLeft: "0.5rem",
  };

  let text = "";
  if (incrementCount < 0) text = "Subtract";
  else text = "Add";

  return (
    <div>
      <p>The current value is: {amount}.</p>
      <p>The current increment is: {incrementCount}.</p>
      <button value={incrementCount} onClick={onAddButtonClick}>
        {text}
        {incrementCount}
      </button>
      <button style={buttonStyle} onClick={onResetButtonClick}>
        Reset
      </button>
      <br />
      <label htmlFor="increment">Increment: </label>
      <input
        id="increment"
        type="range"
        min="-100"
        max="100"
        step="1"
        value={incrementCount}
        onChange={onIncrementChange}
      />
    </div>
  );
}

export default CustomIncrement;
