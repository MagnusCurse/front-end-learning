import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducer = combineReducer({
  counter: counterReducer,
  logged: loggedReducer,
});

export default allReducer;
