import { ACTION_TYPES } from "./consts";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, "id">;
export type TodoCompleted = Pick<Todo, "completed">;

export type ActionOptions =
  | { type: ACTION_TYPES.ADD; payload: Todo }
  | { type: ACTION_TYPES.REMOVE; payload: Todo.id }
  | { type: ACTION_TYPES.TOGGLE; payload: { id: string; completed: boolean } };
