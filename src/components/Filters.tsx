import { useTodos } from "../hooks/useTodo";

export const Filters = () => {
  const { setActiveFilter, activeFilter } = useTodos();
  return (
    <>
      <div className="flex gap-x-4 justify-self-end">
        <button
          onClick={() => setActiveFilter("all")}
          className={`hover:text-bright-blue ${
            activeFilter === "all" ? "text-bright-blue" : "text-white "
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("active")}
          className={`hover:text-bright-blue ${
            activeFilter === "active" ? "text-bright-blue" : "text-white "
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveFilter("completed")}
          className={`hover:text-bright-blue ${
            activeFilter === "completed" ? "text-bright-blue" : "text-white "
          }`}
        >
          completed
        </button>
      </div>
    </>
  );
};
