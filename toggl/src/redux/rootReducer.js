import { combineReducers } from 'redux';
import todoReducer from './reducers/todo';

export default combineReducers({
  todos: todoReducer,
  superUser: false,
});
