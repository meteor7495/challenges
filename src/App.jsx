import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTaskStore } from "./store";
import { useEffect } from "react";

export default function App() {
  const { tasks } = useTaskStore();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <MantineProvider>
      <h1 className="title">Todo-List</h1>
      <TaskForm />
      <TaskList />
    </MantineProvider>
  );
}
