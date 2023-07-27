import { useTodos } from "../hooks/useTodo";

export const Footer = () => {
	const { pendingTodosCount } = useTodos();
	const plurarlNoun = pendingTodosCount === 1 ? 'item' : 'items'

	return (
		<footer
			className="bg-very-light-gray dark:bg-very-dark-desaturated-blue w-[92vw] max-w-md flex items-center gap-x-2 p-2.5 justify-between border-light-grayish-blue border-solid border-t dark:text-very-light-grayish-blue rounded-b-lg">
			<p>
			{`${pendingTodosCount} ${plurarlNoun} left`}
			</p>
		</footer>
	)
}
