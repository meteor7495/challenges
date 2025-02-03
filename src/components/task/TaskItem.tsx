import React from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { Task } from "../../types";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleComplete,
  onRemove,
}) => {
  return (
    <Box key={task.id} sx={{display:'flex', alignItems:'center',mt:2}}>
      <Typography
        style={{ textDecoration: task.completed ? "line-through" : "",marginLeft:10 }}
      >
        {task.title}
      </Typography>
      {task.description && <Typography>{task.description}</Typography>}
      <Checkbox
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <Button onClick={() => onRemove(task.id)}>حذف</Button>
    </Box>
  );
};

export default TaskItem;
