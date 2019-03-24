import {
  ADD_TODO,
  TOGGLE_RESOLVED,
  TOGGLE_REMOVED,
  TOGGLE_CLEAR,
  TOGGLE_TIME_SPENT,
} from '../actions/todo';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          estimate: action.estimate,
          done: action.done,
          timeSpent: action.timeSpent,
        },
      ];

    case TOGGLE_RESOLVED:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
      break;

    case TOGGLE_REMOVED:
      return state.filter(todo => todo.id !== action.id);
      break;

    case TOGGLE_CLEAR:
      return (state = initialState);
      break;

    case TOGGLE_TIME_SPENT:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, timeSpent: action.timeSpent } : todo
      );
      break;
    default:
      return state;
  }
}

export default reducer;
