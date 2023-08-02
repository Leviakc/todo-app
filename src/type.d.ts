export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type Todos = Todo[];

// export type TodoId = Pick<Todo, "id">;
// export type TodoCompleted = Pick<Todo, "completed">;
export type TodoId = Todo["id"];
export type TodoCompleted = Todo["completed"];

export type ActionOptions =
  | { type: "ADD"; payload: { todo: Todo } }
  | { type: "REMOVE"; payload: { id: TodoId } }
  | { type: "TOGGLE"; payload: { id: TodoId; completed: TodoCompleted } }
  | { type: "REORDER_TODOS"; payload: { todos: Todos } }
  | { type: "REMOVE_COMPLETED" };

export type FilterValue = "all" | "active" | "completed";
