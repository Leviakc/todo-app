import { createContext } from "react";
import { Todo,  TodoId } from "../type";

type TodoContextType = {
todos: Todo[]
handleNewTodo: (todo: Todo) => void
handleDeleteTodo: ({ id }: TodoId) => void
// handleToggleTodo: ({ id}: TodoId) => void
handleToggleTodo: (id: string, completed: boolean) => void;
handleReOrder: (todos: Todo[]) => void
handleDeleteCompleted: () => void
todosCount: number
pendingTodosCount: number
}

export const TodoContext = createContext<TodoContextType | null>(null);
