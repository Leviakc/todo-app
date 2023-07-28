import { useTodos } from "../hooks/useTodo";

export const Footer = () => {
	const { pendingTodosCount, handleDeleteCompleted } = useTodos();
	const plurarlNoun = pendingTodosCount === 1 ? 'item' : 'items'

	return (
		<>
		<footer
			className="bg-very-light-gray dark:bg-very-dark-desaturated-blue w-[92vw] max-w-md lg:max-w-xl 2xl:max-w-2xl flex items-center gap-x-2 p-2.5 lg:p-3 justify-between dark:text-very-light-grayish-blue rounded-b-lg mb-10">
				<p className="text-dark-grayish-blue">
					{`${pendingTodosCount} ${plurarlNoun} left`}
				</p>
				<button type="button" onClick={()=>{handleDeleteCompleted()}} className="text-dark-grayish-blue hover:text-very-dark-grayish-blue dark:text-very-dark-grayish-blue hover:dark:text-light-grayish-blue">Delete completed</button>
		</footer>
			<p className="text-dark-grayish-blue">Drag and drop to reorder list</p>

		</>
	)
}
