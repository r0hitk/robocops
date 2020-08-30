import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {

  return (
    <div>
      {robots.map((robo, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            type={robots[i].type}
          />
        );
      })}
    </div>
  );
};

export default CardList;
