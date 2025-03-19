import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleComplete, removeTodo } from "../store/todoSlice";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos) as {
    id: string;
    title: string;
    completed: boolean;
  }[];
  const dispatch = useDispatch();

  return (
    <List
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid #c9d9f2",
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
          />
          <ListItemText
            primary={todo.title}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          />
          <IconButton
            color="error"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            <Delete />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
