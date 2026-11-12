import type { ReactNode } from "react";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <TodoProvider>
      <FilterProvider>{children}</FilterProvider>
    </TodoProvider>
  );
}
