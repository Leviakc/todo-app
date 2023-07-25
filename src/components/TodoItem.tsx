import { useTodos } from "../hooks/useTodo";
import { Todo } from "../type";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { handleDeleteTodo, handleToggleTodo } = useTodos();
  const { id } = todo;
  return (
        <li className="flex flex-row justify-center items-center w-full px-4 py-4 bg-white dark:bg-dm-VDDesatBlue text-slate-400 dark:text-slate-200 border-b-2 dark:border-dm-VDDesatBlue">
      <button className="destroy" onClick={() => handleToggleTodo({ id })}>
        <img src="../../images/icon-check.svg" alt="" />
      </button>
      {todo.title}
      <button className="destroy" onClick={() => handleDeleteTodo({ id })}>
        <img src="../../images/icon-cross.svg" alt="" />
      </button>
    </li>
  );
};
