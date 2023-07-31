import { useTodos } from "../hooks/useTodo";

export const Filters = () => {
  const { setActiveFilter, activeFilter } = useTodos();
  return (
    <>
      <div className="flex justify-self-end justify-between gap-x-6">
        <button
          onClick={() => setActiveFilter("all")}
          className={`hover:text-very-dark-grayish-blue hover:dark:text-light-grayish-blue ${
            activeFilter === "all" ? "text-bright-blue" : "text-dark-grayish-blue"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("active")}
          className={`hover:text-very-dark-grayish-blue hover:dark:text-light-grayish-blue ${
            activeFilter === "active" ? "text-bright-blue" : "text-dark-grayish-blue"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveFilter("completed")}
          className={`hover:text-very-dark-grayish-blue hover:dark:text-light-grayish-blue ${
            activeFilter === "completed" ? "text-bright-blue" : "text-dark-grayish-blue"
          }`}
        >
          completed
        </button>
      </div>
    </>
  );
};
