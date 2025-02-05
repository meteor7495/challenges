import { create } from "zustand";

const initialId = parseInt(localStorage.getItem("taskIdCounter")) || 1;

export const useTaskStore = create((set, get) => ({
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  taskIdCounter: initialId,

  addTask: (task) => {
    const currentId = get().taskIdCounter;
    const newTask = { id: currentId, ...task, completed: false };

    set((state) => ({
      tasks: [...state.tasks, newTask],
      taskIdCounter: currentId + 1,
    }));

    localStorage.setItem("taskIdCounter", currentId + 1);
  },

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));
