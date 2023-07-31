import { ChangeEvent } from "react";

interface InputTodoProps {
  inputValue: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputTodo = ({ inputValue, onInputChange }: InputTodoProps )=> {
  return (
    <>
      <div className="flex [&>*]:dark:bg-very-dark-desaturated-blue [&>*]:bg-very-light-gray w-full gap-x-3">
        <span className="inline-block w-[26px] lg:w-[28px] h-auto rounded-full border-[1px] border-dark-grayish-blue dark:border-very-light-grayish-blue-alpha self-center aspect-square"></span>
        <input
          className="w-full dark:text-very-light-grayish-blue text-very-dark-grayish-blue focus:outline-none"
          type="text"
          value={inputValue}
          placeholder="Create a new todo"
          onChange={onInputChange}
        />
        <label
          htmlFor="input-todo-text"
          className="absolute top-0 -left-[99999px]"
        >
          Create a new todo
        </label>
      </div>
    </>
  );
};
