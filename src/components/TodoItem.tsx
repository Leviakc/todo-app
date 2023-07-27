import { useTodos } from "../hooks/useTodo";
import { Todo } from "../type";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { handleDeleteTodo, handleToggleTodo } = useTodos();
  const { id, completed } = todo;
  return (
    <li
      className={ `bg-very-light-gray dark:bg-very-dark-desaturated-blue w-[92vw] max-w-md flex items-center gap-x-2 p-2.5 justify-between border-light-grayish-blue border-solid border-b last:border-0 dark:text-very-light-grayish-blue cursor-grab` }
    >
      <input
        className={`dark:bg-very-dark-desaturated-blue bg-very-light-gray w-[20px] h-auto aspect-square rounded-lg border-[1px] cursor-pointer appearance-none border-dark-grayish-blue dark:border-very-light-grayish-blue-alpha checked:bg-checked checked:bg-no-repeat checked:bg-contain checked:bg-center checked:border-0`}
        type="checkbox"
				onChange={(e)=>handleToggleTodo(id, e.target.checked)}
      />
      <span className={ `text-very-dark-grayish-blue dark:text-very-light-grayish-blue  ${completed ? 'text-gray-400 line-through' : ''}` }
      >
        {todo.title}
      </span>
      <button className="destroy" onClick={() => handleDeleteTodo({ id })}>
        <img src="../../images/icon-cross.svg" alt="" />
      </button>
    </li>
  );
};
