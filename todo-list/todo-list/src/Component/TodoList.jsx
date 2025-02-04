
/* This component renders the list of todos, using Material UI components for styling and interaction.  It consumes the
`TodoContext`. */

import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const { todos, toggleComplete, removeTodo } = useContext(TodoContext);

    return (
        <List>
            {todos.map((todo) => (
                <ListItem key={todo.id}
                          sx={{
                              width: '28rem',
                              color:'black',
                              backgroundColor: todo.completed? 'lightgray' : 'white',
                              borderRadius:'0.5rem',
                              marginTop:'2rem',
                              textDecoration: todo.completed ? 'line-through' : 'none',
                              opacity: todo.completed ? 0.9 : 1,
                              display: 'flex',
                              alignItems: 'center',
                          }}
                          >
                    <Checkbox
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                    />
                    <ListItemText primary={todo.title} />
                    <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(todo.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default TodoList;