import { Box, SxProps, Typography } from "@mui/material";
import TaskItem from "./TaskItem";
import { useTaskStore } from "../../store/toDoList";

const Tasks: React.FC<{ sx?: SxProps }> = ({sx}) => {
  const { tasks, removeTask, toggleComplete } = useTaskStore();

  return (
    <Box sx={{...sx}}>
      <Typography>لیست وظایف</Typography>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={toggleComplete}
          onRemove={removeTask}
        />
      ))}
    </Box>
  );
};
export default Tasks;
