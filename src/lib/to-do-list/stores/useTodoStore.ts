import { create } from "zustand";
import { persist } from "zustand/middleware";
import {TaskStore} from "../type";

export const useTaskStore = create<TaskStore>()(
    persist(
        (set) => ({
            tasks: [],
            addTask: (task) => {
                set((state) => ({
                    tasks: [...state.tasks, task],
                }));
            },
            removeTask: (id) => {
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id),
                }));
            },
            toggleComplete: (id) => {
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, completed: !task.completed } : task
                    ),
                }));
            },
        }),
        {
            name: "task-storage", // نام کلیدی که در localStorage ذخیره می‌شود
        }
    )
);
