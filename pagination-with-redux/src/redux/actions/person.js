export const ADD_TODO = "ADD_TODO";

let idCounter = 0;

export function addTodo(title, estimate) {
  idCounter += 1;

  return {
    type: ADD_TODO,
    id: idCounter,
    done: false,
    timeSpent: 0,
    title,
    estimate
  };
}
