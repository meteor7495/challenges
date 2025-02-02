import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: loadFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
      saveToLocalStorage(state);
    },
    removeTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;