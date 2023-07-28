import { ActionOptions, Todo } from "../type";
import { ACTION_TYPES } from "../consts";

export const todoReducer = (
  initialState: Todo[],
  action: ActionOptions,
): Todo[] => {
  switch (action.type) {
    // TODO: verify the error: Property 'payload' does not exist...
    // WARNING: verify the error: Property 'payload' does not exist...
    case ACTION_TYPES.ADD:
      return [...initialState, action.payload];
    case ACTION_TYPES.REMOVE:
      return initialState.filter((todo) => todo.id !== action.payload.id);
    case ACTION_TYPES.REMOVE_COMPLETED:
      return initialState.filter((todo) => !todo.completed);
    case ACTION_TYPES.TOGGLE: {
      const { id, completed } = action.payload;
      return initialState.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo,
      );
    }
    case ACTION_TYPES.RE_ORDER_TODOS:
      return action.payload;
    default:
      return initialState;
  }
};
