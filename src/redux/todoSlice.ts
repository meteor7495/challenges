import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "types/types";

interface TodoState {
  todolist: Todo[];
}

const getLocalStorage = JSON.parse(
  localStorage.getItem("todos") || "[]"
) as Todo[];

const initialState: TodoState = {
  todolist: getLocalStorage,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todolist.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todolist = state.todolist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const updateTodolist = state.todolist.find(
        (item) => item.id === action.payload
      );
      if (updateTodolist) updateTodolist.checked = !updateTodolist.checked;
      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },
    editTodo: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const { id, title } = action.payload;
      const todo = state.todolist.find((item) => item.id === id);
      if (todo) {
        todo.title = title;
        localStorage.setItem("todos", JSON.stringify(state.todolist));
      }
    },
  },
});

// Export the actions and reducer
export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
