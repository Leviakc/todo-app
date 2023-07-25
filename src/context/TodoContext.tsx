import { createContext } from "react";
import { Todo, TodoId } from "../type";

type TodoContextType = {
todos: Todo[]
handleNewTodo: (todo: Todo) => void
handleDeleteTodo: ({ id }: TodoId) => void
handleToggleTodo: ({ id }: TodoId) => void
todosCount: number
pendingTodosCount: number
}

export const TodoContext = createContext<TodoContextType | null>(null);
