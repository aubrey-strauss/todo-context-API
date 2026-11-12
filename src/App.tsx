import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useTodos } from "./context/TodoContext";
import FilterButtons from "./components/FilterButtons";

// App = the page's outer frame
function App() {
  const { clearCompleted } = useTodos();
  return (
    <div className="app">
      <h1>Todo App</h1>
      <p>[theme button goes here]</p>
      <TodoInput /> {/* text box + Add button */}
      <FilterButtons />
      <TodoList /> {/* shows all the todos */}
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}

export default App; // so main.tsx can put App on the page
