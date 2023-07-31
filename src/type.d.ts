import { ACTION_TYPES } from "./consts";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface Todos {
  Todos: Todo[];
}

// export type TodoId = Pick<Todo, "id">;
// export type TodoCompleted = Pick<Todo, "completed">;
export type TodoId = Todo.id;
export type TodoCompleted = Todo.completed;

export type ActionOptions =
  | { type: ACTION_TYPES.ADD; payload: Todo }
  | { type: ACTION_TYPES.REMOVE; payload: Todo.id }
  | { type: ACTION_TYPES.TOGGLE; payload: { id: string; completed: boolean } }
  | { type: ACTION_TYPES.RE_ORDER_TODOS; payload: Todo[] }
  | { type: ACTION_TYPES.REMOVE_COMPLETED; payload?: undefined };
// TODO: investigate this issue
// | { type: ACTION_TYPES.REMOVE_COMPLETED; payload?: undefined };

export type FilterValue = "all" | "active" | "completed";
