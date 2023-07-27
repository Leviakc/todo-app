import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative grid justify-items-center dark:bg-very-dark-blue bg-light-grayish-blue z-0">
        <div className="absolute bg-mobile-light dark:bg-mobile-dark top-0 w-screen h-[30vh] bg-cover bg-no-repeat sm:h-1/3 sm:bg-theme-light sm:dark:bg-theme-dark"></div>
        <div className="mt-10 w-[92vw] flex flex-col  items-center z-10">
          <Header />
          <TodoList />
					<Footer/>
        </div>
      </div>
    </>
  );
};
// bg-desktop-light dark:bg-very-dark-blue dark:bg-theme-dark dark:bg-[length:100vw_40%] bg-[length:100vw_40%]
