import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      robots: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") //fetch is a part of window object
      .then((response) => response.json())
      .then((json) => this.setState({ robots: json }));
      console.log('componentDidMount');
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
    console.log('render');
    return (
      <div className="tc">
        <h1>ROBOCOPS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
