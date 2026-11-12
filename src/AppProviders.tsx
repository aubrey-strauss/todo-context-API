import type { ReactNode } from "react";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <TodoProvider>
      <FilterProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FilterProvider>
    </TodoProvider>
  );
}
