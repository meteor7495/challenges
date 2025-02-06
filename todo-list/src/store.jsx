import { create } from 'zustand';

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const useStore = create((set) => ({
  tasks: loadTasksFromLocalStorage(),
  addTask: (task) => set((state) => {
    const newTasks = [...state.tasks, task];
    saveTasksToLocalStorage(newTasks);
    return { tasks: newTasks };
  }),
  removeTask: (id) => set((state) => {
    const newTasks = state.tasks.filter(task => task.id !== id);
    saveTasksToLocalStorage(newTasks);
    return { tasks: newTasks };
  }),
  toggleTaskCompletion: (id) => set((state) => {
    const newTasks = state.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasksToLocalStorage(newTasks);
    return { tasks: newTasks };
  })
}));

export { useStore };
