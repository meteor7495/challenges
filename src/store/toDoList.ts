import { create } from 'zustand';

interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
}

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  loadTasksFromStorage: () => void; 
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => {
    const updatedTasks = [...state.tasks, task];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
    return { tasks: updatedTasks };
  }),
  removeTask: (id) => set((state) => {
    const updatedTasks = state.tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
    return { tasks: updatedTasks };
  }),
  toggleComplete: (id) => set((state) => {
    const updatedTasks = state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
    return { tasks: updatedTasks };
  }),
  loadTasksFromStorage: () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      set({ tasks: JSON.parse(savedTasks) }); 
    }
  },
}));
