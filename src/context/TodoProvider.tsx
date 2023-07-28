import { useEffect, useReducer, useState } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "../helpers/todoReducer";
import { ACTION_TYPES } from "../consts";
import { FilterValue, Todo, TodoId } from "../type";

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
    const action = {
      type: ACTION_TYPES.ADD,
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id: TodoId) => {
    const action = {
      type: ACTION_TYPES.REMOVE,
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id: string, completed: boolean) => {
    dispatch({
      type: ACTION_TYPES.TOGGLE,
      payload: { id, completed },
    });
  };

  const handleReOrder = (todos: Todo[]) => {
    dispatch({
      type: ACTION_TYPES.RE_ORDER_TODOS,
      payload: todos,
    });
  };

  const handleDeleteCompleted = () => {
    dispatch({
      type: ACTION_TYPES.REMOVE_COMPLETED,
    });
  };

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <TodoContext.Provider
      value={{
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleDeleteCompleted,
        handleReOrder,
        todosCount,
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
