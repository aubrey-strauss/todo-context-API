import type { ReactNode } from "react";
import { TodoProvider } from "./context/TodoContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return <TodoProvider>{children}</TodoProvider>;
}
