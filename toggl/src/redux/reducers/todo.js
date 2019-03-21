import { ADD_TODO, TOGGLE_RESOLVED } from '../actions/todo';

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

    default:
      return state;
  }
}

export default reducer;
