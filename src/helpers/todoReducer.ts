import { ActionOptions, Todos } from "../type";

export const todoReducer = (
  initialState: Todos,
  action: ActionOptions,
): Todos => {
  if (action.type === "ADD") {
    const { todo } = action.payload;
    return [...initialState, todo];
  }

  if (action.type === "REMOVE") {
    const { id } = action.payload;
    return initialState.filter((todo) => todo.id !== id);
  }

  if (action.type === "TOGGLE") {
    const { id, completed } = action.payload;
    return initialState.map((todo) => {
      return todo.id === id ? { ...todo, completed } : todo;
    });
  }

  if (action.type === "REORDER_TODOS") {
    const { todos } = action.payload;
    return todos;
  }

  if (action.type === "REMOVE_COMPLETED") {
    return initialState.filter((todo) => !todo.completed);
  }

  return initialState;
};
