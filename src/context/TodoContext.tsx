import { createContext } from "react";
import { FilterValue, Todo,  TodoId } from "../type";

type TodoContextType = {
todos: Todo[]
handleNewTodo: (todo: Todo) => void
handleDeleteTodo: ({ id }: TodoId) => void
handleToggleTodo: (id: string, completed: boolean) => void;
handleReOrder: (todos: Todo[]) => void
handleDeleteCompleted: () => void
activeFilter: FilterValue
todosCount: number
pendingTodosCount: number
filteredTodos: Todo[]
setActiveFilter: React.Dispatch<React.SetStateAction<FilterValue>>
}

export const TodoContext = createContext<TodoContextType | null>(null);
