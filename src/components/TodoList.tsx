import { useTodos } from "../context/TodoContext";

export default function TodoList() {
  const { todos } = useTodos();
  if (todos.length === 0) return <p>No Todos yet!</p>;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
