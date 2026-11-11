import TodoInput from "./components/TodoInput"; // bring in my input box component

// App = the page's outer frame; each placeholder gets swapped for a real component as I build it
function App() {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <p>[theme button goes here]</p>
      <TodoInput /> {/* text box + Add button */}
      <p>[filter buttons go here]</p>
      <p>[todo list goes here]</p>
      <p>[clear completed button goes here]</p>
    </div>
  );
}

export default App; // so main.tsx can put App on the page
