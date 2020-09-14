import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
    searchField : ""
};


//a rducer which takes an action and changes the state in the redux store based on the action
export const searchRobots = (state=initialState, action={}) =>{

    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField : action.payload});

        default:
            return state;
    }

}