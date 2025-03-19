import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const loadFromLocalStorage = (): Todo[] => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState: Todo[] = loadFromLocalStorage();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = { id: Date.now().toString(), title: action.payload, completed: false };
      state.push(newTodo);
      saveToLocalStorage(state);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveToLocalStorage(state);
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const updatedState = state.filter((t) => t.id !== action.payload);
      saveToLocalStorage(updatedState);
      return updatedState;
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
