import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") //fetch is a part of window object
      .then((response) => response.json())
      .then((json) => this.setState({ robots: json }));
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
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
