import { useEffect, useState } from "react";
import { useTodos } from "../hooks/useTodo";
import { Todo } from "../type";

interface TodoItemProps {
  todo: Todo;
  index: number;
  dragItemRef: React.MutableRefObject<number | null>;
  dragOverItemRef: React.MutableRefObject<number | null>;
}

export const TodoItem = ({
  todo,
  index,
  dragItemRef,
  dragOverItemRef,
}: TodoItemProps) => {
  const { handleDeleteTodo, handleToggleTodo, todos, handleReOrder } =
    useTodos();
  const { id, completed } = todo;
  const [isDragging, setIsDragging] = useState(false);

  const handleSort = () => {
    const newTodos = [...todos];

    if (dragItemRef.current === null) return;
    const [draggedItem] = newTodos.splice(dragItemRef.current, 1);

    if (dragOverItemRef.current === null) return;
    newTodos.splice(dragOverItemRef.current, 0, draggedItem);

    dragItemRef.current = null;
    dragOverItemRef.current = null;
    handleReOrder(newTodos);
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", ""); // Required for dragging in Firefox
    setIsDragging(true);
    dragItemRef.current = index;
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    if (dragItemRef.current === null || dragItemRef.current === index) return;
    dragOverItemRef.current = index;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    handleSort();
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);


  return (
    <li
      className={`bg-very-light-gray dark:bg-very-dark-desaturated-blue w-[92vw] max-w-full flex items-center gap-x-2 p-2.5 lg:p-3.5 justify-between border-light-grayish-blue border-solid border-b cursor-grab [&>button]:sm:opacity-0 [&>button]:hover:opacity-100 [&>button]:opacity-100 ${ isDragging ? "border-dark-grayish-blue" : "border-light-grayish-blue" }`}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
      draggable
    >
      <input
        className={`dark:bg-very-dark-desaturated-blue bg-very-light-gray w-[20px]  lg:w-[26px] h-auto aspect-square rounded-full cursor-pointer appearance-none border-dark-grayish-blue dark:border-very-light-grayish-blue-alpha  ${
          completed
            ? "bg-center border-0 bg-checked bg-no-repeat bg-contain"
            : "border-[1px]"
        } `}
        type="checkbox"
        onChange={(e) => handleToggleTodo(id, e.target.checked)}
      />
      <span
        className={`${
          completed
            ? "text-dark-grayish-blue line-through"
            : "text-very-dark-grayish-blue dark:text-very-light-grayish-blue"
        }`}
      >
        {todo.title}
      </span>
      <button className="" onClick={() => handleDeleteTodo({ id })}>
        <img
          src="../../images/icon-cross.svg"
          alt="delete list"
          className="stroke-blue-200"
        />
      </button>
    </li>
  );
};
