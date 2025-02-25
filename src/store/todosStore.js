import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useTodosStore = create()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: Date.now(), title: todo.title, isCompleted: false },
          ],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        })),
    }),
    {
      name: "todos",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTodosStore;
