import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../type";
import { useTodos } from "../hooks/useTodo";
import { InputTodo } from "./InputTodo";

export const CreateTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { handleNewTodo } = useTodos();

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: inputValue,
      completed: false,
    };

    handleNewTodo(newTodo);
    setInputValue("");
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      className="bg-very-light-gray dark:bg-very-dark-desaturated-blue w-[92vw] max-w-full flex mb-4 xl:mb-6 items-center gap-x-2 p-3 lg:p-3.5 rounded-lg justify-between"
      onSubmit={onFormSubmit}
    >
      <InputTodo onInputChange={onInputChange} inputValue={inputValue} />
      <button
        type="submit"
				title="Add"
        className="bg-dark-grayish-blue dark:bg-very-dark-grayish-blue text-very-light-grayish-blue text-sm p-1 lg:text-2xl rounded-lg"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
        </svg>
      </button>
    </form>
  );
};

// onKeyDown={handleKeyDown}
