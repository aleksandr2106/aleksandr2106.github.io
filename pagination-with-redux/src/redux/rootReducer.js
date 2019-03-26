import { combineReducers } from "redux";
import personReducer from "./reducers/person";

export default combineReducers({
  persons: personReducer
});
