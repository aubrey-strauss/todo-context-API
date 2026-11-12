import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { useFilter } from "../context/FilterContext";

export default function TodoList() {
  const { todos } = useTodos();
  const { filter } = useFilter(); // get which button is picked. Now this component uses two boxes
  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
  if (todos.length === 0) return <p>No Todos yet!</p>;
  return (
    <ul>
      {visibleTodos.map(
        (
          todo, //show only the filtered list instead of all of them
        ) => (
          <TodoItem key={todo.id} todo={todo} />
        ),
      )}
    </ul>
  );
}
