import { combineReducers } from "redux";
import todoReducer from "./reducers/person";

export default combineReducers({
  todos: todoReducer
});
