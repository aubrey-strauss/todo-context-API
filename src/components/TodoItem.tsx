import { useState } from "react";
import type { Todo } from "../types";
import { useTodos } from "../context/TodoContext";

// One todo row: checkbox, words (or edit box), Edit/Save, Delete
export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos(); // the 3 functions this row uses
  const [isEditing, setIsEditing] = useState(false); // am I in edit mode?
  const [draft, setDraft] = useState(todo.text); // what's typed in the edit box

  // Save the new words and leave edit mode
  const save = () => {
    if (draft.trim() === "") return; // don't allow saving blank words
    editTodo(todo.id, draft);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)} // flip done/not done
      />

      {/* Fork in the road: edit box OR normal words */}
      {isEditing ? (
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") save(); // Enter = save
            if (e.key === "Escape") {
              setDraft(todo.text); // Escape = put old words back
              setIsEditing(false);
            }
          }}
          autoFocus // cursor goes in the box right away
        />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      )}

      {/* Fork in the road: Save button OR Edit button */}
      {isEditing ? (
        <button onClick={save}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
