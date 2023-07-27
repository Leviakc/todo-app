import { useTodos } from "../hooks/useTodo"
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
	const { todos } = useTodos()

	return (
		<ul
			className="dark:bg-very-dark-desaturated-blue bg-very-light-gray w-[92vw] max-w-md rounded-t-lg overflow-scroll max-h-[16.8rem]">
			{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
		</ul>
	)
}
