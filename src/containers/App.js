import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { connect } from "react-redux";
import { setSearchBox } from "../actions";


//since only one reucer, so directly state.searchField is used
const mapStateToProps = (state) => {
  return { searchField: state.searchField };
};

const mapDispatchToProps = (dispatch) => {
  return { onSearchChange: (event) => dispatch(setSearchBox(event.target.value)) };
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") //fetch is a part of window object
      .then((response) => response.json())
      .then((json) => this.setState({ robots: json }));
  }


  render() {

    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>ROBOCOPS</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
