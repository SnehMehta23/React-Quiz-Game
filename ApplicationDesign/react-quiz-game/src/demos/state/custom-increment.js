import { useState } from "react";

function CustomIncrement() {
  const [amount, setAmount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(1);
  const onAddButtonClick = () => {
    setAmount(amount + incrementCount);
    console.log(amount);
  };

  // let onResetButtonClick = () => {

  // }

  // onClick={onResetButtonClick} goes inside the reset button

  const onIncrementChange = (event) => {
    const newIncrement = parseInt(event.target.value);
    setIncrementCount(newIncrement);
  };

  const buttonStyle = {
    marginLeft: "0.5rem",
  };

  return (
    <div>
      <p>The current value is: {amount}.</p>
      <p>The current increment is: {incrementCount}.</p>
      <button value={incrementCount} onClick={onAddButtonClick}>
        Add {incrementCount}
      </button>
      <button style={buttonStyle}>Reset</button>
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
