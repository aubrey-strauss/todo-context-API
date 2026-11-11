// TodoContext = the shared box: holds the todo list + functions so any component can use them without passing props
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Todo, TodoContextType } from "../types";

// Make the empty shared box; starts undefined until the Provider fills it
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider = wraps the app, owns the todo list, and hands it out to everything inside
export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]); // the todo list, starts empty

  // Add: build a new todo and put it at the end of a NEW list (React only updates on new lists)
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(), // current time = easy unique id
      text: text,
      completed: false, // new todos start not done
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // Toggle: find the matching todo and flip done/not done
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Delete: keep every todo except the one with this id
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Edit: find the matching todo and swap in the new text
  const editTodo = (id: number, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  // Clear completed: keep only the todos that aren't done
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  // Put the list + all 5 functions into the box so the whole app can reach them
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// useTodos = my shortcut key to open the box; errors clearly if used outside the Provider
export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used inside TodoProvider");
  }
  return context;
}
