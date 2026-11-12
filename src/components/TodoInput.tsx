import { useState } from "react";
import { useTodos } from "../context/TodoContext";

// Input box: where people will type a new todo
export default function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  // Why: starts the function that runs when Add is clicked. e is the click event.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs doing?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
