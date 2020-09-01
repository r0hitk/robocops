import React from "react";
import Card from "./Card";


//props are passed as a single object
const CardList = ({robots}) => {
    //here "props" could've been used instead of "robots"

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
}

export default CardList;
