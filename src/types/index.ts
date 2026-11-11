export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Filter = "all" | "active" | "completed";

export type Theme = "light" | "dark";

export type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  clearCompleted: () => void;
};
