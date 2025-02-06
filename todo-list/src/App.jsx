import  { useState, useEffect } from 'react';
import { Container, Button, TextField, List, ListItem, Checkbox, Paper, Typography, Snackbar, Alert, IconButton } from '@mui/material';
import { nanoid } from 'nanoid';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(tasksFromLocalStorage);
  }, []);

  const validatePersianText = (text) => {
    const persianRegex = /^[\u0600-\u06FF\s]+$/;
    if (!text.trim()) {
      setErrorMessage('عنوان وظیفه نمی‌تواند خالی باشد');
      return false;
    }
    if (!persianRegex.test(text)) {
      setErrorMessage('عنوان وظیفه فقط باید شامل حروف فارسی باشد');
      return false;
    }
    return true;
  };

  const onSubmit = (data) => {
    if (validatePersianText(data.taskTitle)) {
      const newTask = { id: nanoid(), title: data.taskTitle, completed: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      reset(); 
      setErrorMessage('');
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '30px', borderRadius: '15px', backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: 'bold', color: '#1976d2' }}>
          لیست وظایف
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="عنوان وظیفه"
            {...register('taskTitle', { required: true })}
            placeholder="وظیفه خود را وارد کنید"
            fullWidth
            variant="outlined"
            required
            error={!!errorMessage}
            helperText={errorMessage}
            InputProps={{
              style: { direction: 'rtl', textAlign: 'right' },
            }}
            InputLabelProps={{
              style: { direction: 'rtl', textAlign: 'right' },
            }}
            style={{ marginBottom: '20px' }}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginBottom: '20px', padding: '12px 0', fontSize: '16px', borderRadius: '8px' }}
          >
            اضافه کردن وظیفه
          </Button>
        </form>

        <List>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px',
                backgroundColor: task.completed ? '#e1f5fe' : '#ffffff',
                padding: '10px 15px',
                borderRadius: '8px',
              }}
            >
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                color="primary"
              />
              <Typography
                variant="body1"
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  flexGrow: 1,
                  color: task.completed ? '#bdbdbd' : '#333',
                  fontWeight: '500',
                  marginLeft: '10px',
                }}
              >
                {task.title}
              </Typography>
              <IconButton edge="end" color="error" onClick={() => removeTask(task.id)} style={{ padding: '10px' }}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
