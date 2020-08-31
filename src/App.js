import React from "react";
import CardList from "./CardList";
import { robots } from "./RoboDetails";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: robots,
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>ROBOCOPS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
