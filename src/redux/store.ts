import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // مسیر مناسب به reducer شما

export const store = configureStore({
  reducer: {
    todolist: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; 