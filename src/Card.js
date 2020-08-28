import React from "react";

function Card(props) {
  const { name, type, id } = props;

  return (
    <div className={"bg-dark-blue"}>
    <img src={`https://robohash.org/robo${id}`} alt = {"roboPic"}/>
      <div>
        <h2>{name}</h2>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default Card;
