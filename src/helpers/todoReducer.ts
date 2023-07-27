import { ActionOptions, Todo } from "../type";
import { ACTION_TYPES } from "../consts";

export const todoReducer = (
  initialState: Todo[],
  action: ActionOptions,
): Todo[] => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return [...initialState, action.payload];
    case ACTION_TYPES.REMOVE:
      return initialState.filter((todo) => todo.id !== action.payload.id);
    case ACTION_TYPES.TOGGLE: {
      const { id, completed } = action.payload;
      return initialState.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo,
      );
    }
    default:
      return initialState;
  }
};
