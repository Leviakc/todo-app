import { useTodos } from "../hooks/useTodo";
import { Filters } from "./Filters";

export const Footer = () => {
	const { pendingTodosCount, handleDeleteCompleted } = useTodos();
	const plurarlNoun = pendingTodosCount === 1 ? 'item' : 'items'

	return (
		<>
		<footer>
				<div className="bg-very-light-gray dark:bg-very-dark-desaturated-blue w-[92vw] max-w-md lg:max-w-xl 2xl:max-w-2xl grid grid-cols-2 lg:grid-cols-3 place-content-center gap-x-2 p-2.5 lg:p-3 dark:text-very-light-grayish-blue rounded-b-lg mb-4 lg:mb-10">
				<p className="text-dark-grayish-blue">
					{`${pendingTodosCount} ${plurarlNoun} left`}
				</p>
					<div className="lg:block hidden">
					<Filters/>
					</div>
				<button type="button" onClick={()=>{handleDeleteCompleted()}} className="text-dark-grayish-blue hover:text-very-dark-grayish-blue dark:text-very-dark-grayish-blue hover:dark:text-light-grayish-blue justify-self-end">Delete completed</button>
				</div>

				<div className="bg-very-light-gray dark:bg-very-dark-desaturated-blue w-[92vw] max-w-md gap-x-2 p-2.5 dark:text-very-light-grayish-blue rounded-b-lg mb-10 lg:hidden flex justify-center">
					<Filters/>
				</div>
		</footer>


			<p className="text-dark-grayish-blue">Drag and drop to reorder list</p>

		</>
	)
}
