import { useThemeToggle } from "../hooks/useThemeToggle";
import { CreateTodo } from "./CreateTodo";

export const Header = () => {
  const { theme, toggleTheme } = useThemeToggle();

const imgSrc = theme === "dark" ? "../../images/icon-sun.svg" : "../../images/icon-moon.svg";

const currentTheme = <img src={imgSrc} className="object-contain" />;

  return (
    <header className="flex flex-col justify-start w-[92vw] max-w-md">
      <div className="flex max-w-md  justify-between mb-8">
        <h1 className="text-2xl sm:text-4xl uppercase tracking-[1.1rem] text-white font-bold">
          Todo
        </h1>
        <button onClick={toggleTheme}>{currentTheme}</button>
      </div>
      <CreateTodo />
    </header>
  );
};
