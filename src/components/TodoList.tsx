import { useTodos } from "../hooks/useTodo"
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
	const { todos } = useTodos()

	return (
		<ul
			className="relative max-h-h-5 overflow-y-auto overflow-x-hidden
      rounded-t-lg dark:bg-dm-VDDesatBlue scrollbar"
		>
			{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
		</ul>
	)
}
