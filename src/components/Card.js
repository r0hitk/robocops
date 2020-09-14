import React from "react";
import "tachyons";

function Card({ name, type, id }) {

  return (
    // text-center, margin, padding
    //display-inlineblock, borderwidth, border-radius
    <div className={"tc dib grow bg-light-blue bw2 br3 ma2 pa3 shadow-5"}>
    <img src={`https://robohash.org/robo${id}`} alt = {"roboPic"}/>
      <div>
        <h2>{name}</h2>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default Card;
