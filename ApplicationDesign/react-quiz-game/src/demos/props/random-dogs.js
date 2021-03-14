import React from "react";
import "./random-dogs.css";

function RandomDogs({ data }) {
  const dataDogs = data;
  let contents;
  if (dataDogs == "") {
    contents = "Hello, nothing to render";
  } else if (dataDogs !== "") {
    contents = dataDogs.map((arr) => {
      //MIKE don't look at the horrendous css, or lack of css for images.
      //TODO: change the styling on the images make a small grid or something
      return <img className="dog-images" src={arr} alt="" />;
    });
  }
  return <div>{contents}</div>;
}

export default RandomDogs;
