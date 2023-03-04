import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { devtools, persist } from 'zustand/middleware';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  addTodo: (title: string) => void;
  toggleTodo: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  sortTodos: (todos: Todo[]) => void;
};

export const useTodos = create<TodoStore>()(
  devtools(
    persist(
      (set, get) => ({
        todos: [
          { id: '1', title: 'Learn JS', completed: true },
          { id: '2', title: 'Learn React', completed: false },
        ],
        loading: false,
        error: null,
        addTodo: title =>
          set({
            todos: [...get().todos, { id: nanoid(), title, completed: false }],
          }),
        toggleTodo: todoId =>
          set({
            todos: get().todos.map(todo =>
              todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
            ),
          }),
        deleteTodo: todoId =>
          set({
            todos: get().todos.filter(todo => todo.id !== todoId),
          }),
        sortTodos: todos => set({ todos }),
      }),
      { name: 'todos' },
    ),
  ),
);
