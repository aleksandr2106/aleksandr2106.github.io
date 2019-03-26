import { ADD_TODO } from "../actions/person";

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
          timeSpent: action.timeSpent
        }
      ];

    default:
      return state;
  }
}

export default reducer;
