import { Checkbox, Button, Grid, Paper, Typography } from '@mui/material';
import { useStore } from '../store';
import styled from 'styled-components';

const TaskItem = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) => (props.completed ? '#e0f7fa' : '#ffffff')};
`;

const TaskList = () => {
  const { tasks, toggleTaskCompletion, removeTask } = useStore((state) => state);

  return (
    <Grid container spacing={2}>
      {tasks.map((task) => (
        <Grid item xs={12} key={task.id}>
          <TaskItem completed={task.completed}>
            <Checkbox checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
            <Typography variant="body1" style={{ textDecoration: task.completed ? 'line-through' : 'none', flexGrow: 1 }}>
              {task.title}
            </Typography>
            <Button variant="outlined" color="secondary" onClick={() => removeTask(task.id)}>
              حذف
            </Button>
          </TaskItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
