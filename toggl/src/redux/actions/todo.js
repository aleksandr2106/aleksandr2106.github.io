export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_RESOLVED = 'TOGGLE_RESOLVED';

let idCounter = 0;

export function addTodo(title, estimate) {
  idCounter += 1;

  return {
    type: ADD_TODO,
    id: idCounter,
    done: false,
    timeSpent: 0,
    title,
    estimate,
  };
}

export function toggleResolved(id) {
  return {
    type: TOGGLE_RESOLVED,
    id,
  };
}
