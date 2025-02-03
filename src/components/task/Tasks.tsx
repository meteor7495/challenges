import { Typography } from "@mui/material";
import TaskItem from "./TaskItem";
import { useTaskStore } from "../../store/toDoList";

const Tasks: React.FC = () => {
  const { tasks, removeTask, toggleComplete } = useTaskStore();

  return (
    <>
      <Typography>لیست وظایف</Typography>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={toggleComplete}
          onRemove={removeTask}
        />
      ))}
    </>
  );
};
export default Tasks;
