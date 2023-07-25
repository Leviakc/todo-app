import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined || context === null)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
};
