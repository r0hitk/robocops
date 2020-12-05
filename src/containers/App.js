import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { connect } from "react-redux";
import { setSearchBox, requestRobots } from "../actions";


//since only one reducer, so directly state.searchField is used
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.getRobots.robots,
    isLoading: state.getRobots.isLoading,
    error: state.getRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchBox(event.target.value)),
    onRobotRequest: () => dispatch(requestRobots())
  };
};

class App extends React.Component {

  componentDidMount() {
    this.props.onRobotRequest();
  }

  render() {
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
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
