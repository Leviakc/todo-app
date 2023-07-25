import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodo";

export const App = () => {
  const { pendingTodosCount } = useTodos();
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-theme-light dark:bg-theme-dark bg-contain bg-no-repeat grid justify-items-center items-center">
        <div className="">
          <Header />
          <TodoList />
          <footer className="">{pendingTodosCount}</footer>
        </div>
      </div>
    </>
  );
};
// bg-[url('./public/images/bg-desktop-light.jpg')] bg-no-repeat bg-cover dark:bg-[url('./public/images/bg-desktop-dark.jpg')]
