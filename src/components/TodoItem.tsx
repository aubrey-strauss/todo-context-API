import type { Todo } from "../types";
import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo } = useTodos();
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
