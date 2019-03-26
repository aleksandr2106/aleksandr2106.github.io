import { ADD_PERSON } from "../actions/person";

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          surname: action.surname,
          desc: action.desc
        }
      ];

    default:
      return state;
  }
}

export default reducer;
