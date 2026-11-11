// Types = the shapes my data must follow, so every file agrees on what a todo looks like

export type Todo = {
  id: number; // unique number so I can find this todo later
  text: string; // what the todo says
  completed: boolean; // done (true) or not done (false)
};

export type Filter = "all" | "active" | "completed"; // the only 3 filter choices allowed

export type Theme = "light" | "dark"; // the only 2 theme choices allowed

// Everything the shared todo box must hold: the list + the 5 functions that change it
export type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  clearCompleted: () => void;
};
