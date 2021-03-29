import React from "react";
import { useState } from "react";
import "./random-dogs.css";
import LoadingSpinner from "../../common/loading-spinner";
import ErrorMessage from "../../common/error-message";
import useGetRandomDogs from "../../quiz/hooks/use-get-random-dogs";

function RandomDogs({}) {
  const [numDogs, setNumDogs] = useState(5);
  const [isLoading, errorMessage, dogData] = useGetRandomDogs(numDogs);
  const changeAmountDogs = (e) => {
    setNumDogs(e.target.value);
  };
  const dataDogs = dogData;
  let contents;
  if (dataDogs == "") {
    contents = <LoadingSpinner />;
  } else if (dataDogs !== "") {
    contents = dataDogs.map((arr) => {
      //MIKE don't look at the horrendous css, or lack of css for images.
      //TODO: change the styling on the images make a small grid or something
      return <img className="dog-images" src={arr} alt="" />;
    });
  }
  return (
    <div>
      <input
        value={numDogs}
        type="range"
        min="1"
        max="10"
        step="1"
        onChange={changeAmountDogs}
      />
      {contents}
    </div>
  );
}

export default RandomDogs;
