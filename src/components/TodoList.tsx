import { useRef } from "react";
import { useTodos } from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { filteredTodos } = useTodos();
  const dragItemRef = useRef<number | null>(null);
  const dragOverItemRef = useRef<number | null>(null);

  return (
    <ul className="dark:bg-very-dark-desaturated-blue bg-very-light-gray w-[92vw] max-w-md rounded-t-lg overflow-y-scroll max-h-[17rem] lg:max-h-[40vh] lg:max-w-xl 2xl:max-w-2xl">
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          dragItemRef={dragItemRef}
          dragOverItemRef={dragOverItemRef}
        />
      ))}
    </ul>
  );
};
