export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_RESOLVED = 'TOGGLE_RESOLVED';
export const TOGGLE_REMOVED = 'TOGGLE_REMOVED';
export const TOGGLE_CLEAR = 'TOGGLE_CLEAR';
export const TOGGLE_TIME_SPENT = 'TOGGLE_TIME_SPENT';

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

export function toggleRemoved(id) {
  return {
    type: TOGGLE_REMOVED,
    id,
  };
}

export function toggleClear() {
  return {
    type: TOGGLE_CLEAR,
  };
}

export function toggleTimeSpent(id, timeSpent) {
  return {
    type: TOGGLE_TIME_SPENT,
    id,
    timeSpent,
  };
}
