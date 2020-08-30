import React from "react";
import CardList from "./CardList";
import {robots} from "./RoboDetails";

const App = () => {

  return (
    <div className="tc">
      <h1>ROBOCOPS</h1>
      <CardList robots={robots} />
    </div>
  );
};

export default App;
