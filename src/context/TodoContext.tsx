import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Todo, TodoContextType } from "../types";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  return <>{children}</>;
}
