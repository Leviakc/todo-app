import { useEffect, useReducer, useState } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "../helpers/todoReducer";
import { FilterValue, Todo, TodoCompleted, TodoId, Todos } from "../type";

interface TodoProviderProps {
  children: React.ReactNode;
}

const init = () => {
  const initialState = localStorage.getItem("todos");
  return initialState ? JSON.parse(initialState) : [];
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    // Here, update the filteredTodos based on the activeFilter and todos
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    } else if (activeFilter === "active") {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    }
  }, [activeFilter, todos]);

  const handleNewTodo = (todo: Todo) => {
    dispatch({ type: "ADD", payload: { todo } });
  };

  const handleDeleteTodo = (id: TodoId) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  const handleToggleTodo = (id: TodoId, completed: TodoCompleted) => {
    dispatch({
      type: "TOGGLE",
      payload: { id, completed },
    });
  };

  const handleReOrder = (todos: Todos) => {
    dispatch({
      type: "REORDER_TODOS",
      payload: { todos },
    });
  };

  const handleDeleteCompleted = () => {
    dispatch({
      type: "REMOVE_COMPLETED",
    });
  };

  const pendingTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <TodoContext.Provider
      value={{
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleDeleteCompleted,
        handleReOrder,
        pendingTodosCount,
        todos,
        activeFilter,
        setActiveFilter,
        filteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
