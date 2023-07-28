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

  const handleSort = () => {
    const newTodos = structuredClone(todos);

    if (dragItemRef.current === null) return;
    const [draggedItem] = newTodos.splice(dragItemRef.current, 1);

    if (dragOverItemRef.current === null) return;
    newTodos.splice(dragOverItemRef.current, 0, draggedItem);
    dragItemRef.current = null;
    dragOverItemRef.current = null;
    handleReOrder(newTodos);
  };

  return (
    <li
      className={`bg-very-light-gray dark:bg-very-dark-desaturated-blue w-[92vw] max-w-full flex items-center gap-x-2 p-2.5 lg:p-3.5 justify-between border-light-grayish-blue border-solid border-b cursor-grab`}
      key={id}
      onDragStart={() => (dragItemRef.current = index)}
      onDragEnter={() => (dragOverItemRef.current = index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
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
        <img src="../../images/icon-cross.svg" alt="" />
      </button>
    </li>
  );
};
