import { CHANGE_SEARCH_FIELD, ROBOT_REQUEST_FAILED, ROBOT_REQUEST_PENDING, ROBOT_REQUEST_SUCCESS } from "./constants";

const initialStateSearch = {
  searchField: "",
};

//a reducer which takes an action and changes the state in the redux store based on the action
export const searchRobots = (state = initialStateSearch, action = {}) => {
  
    switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });

    default:
      return state;
  }
};


const initialStateRobots = {
    isLoading: false,
    robots: [],
    error: ""
};

export const getRobots = (state = initialStateRobots, action = {}) => {

    switch (action.type) {
    case ROBOT_REQUEST_PENDING:
      return Object.assign({}, state, { isLoading: true });
    case ROBOT_REQUEST_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isLoading: false });
    case ROBOT_REQUEST_FAILED:
      return Object.assign({}, state, { isLoading: false, error: action.payload });
      
    default:
      return state;
  }
};
