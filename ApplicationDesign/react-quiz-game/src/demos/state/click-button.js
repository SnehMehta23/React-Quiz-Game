import { useState } from "react";

function ClickButton() {
  // Array Destrcuturing demo:
  //   const animals = ["cat", "dog", "dragon"];
  //   const [animal1, animal2, animal3] = animals;
  //   console.log(animal1);
  //   console.log(animal2);

  // useState returns back an array that looks like: [currentValue, setterFunction]

  // the (0) in useState is the initial value
  // the numClicks is the current value
  // the setNumClicks is the setter

  // the (0) can be anything boolean, etc
  const [numClicks, setNumClicks] = useState(0);

  const onButtonClick = () => {
    setNumClicks(numClicks + 1);
  };

  const clicksEmoji = "👍".repeat(numClicks);
  //   let text = "";
  //   if (numClicks === 0) text = "You haven't clicked yet. Click me!";
  //   else text = `You've clicked: ${clicksEmoji}`;

  // Can also do the above in 1 one line of code using the ternary conditional operator.
  const text =
    numClicks === 0
      ? "You haven't clicked yet. Click me!"
      : `You've clicked: ${clicksEmoji}`;

  // Setting style from JS is useful for dynamic properties
  const buttonStyle = {
    width: "10rem",
    minHeight: "10rem",
    transform: `rotate(${numClicks * 25}deg)`,
    transition: "all 0.2s",
  };

  return (
    <button style={buttonStyle} onClick={onButtonClick}>
      {text}
    </button>
  );
}

export default ClickButton;
