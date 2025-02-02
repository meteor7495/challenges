import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../features/tasksSlice";
import { Checkbox, Button, List, Container } from "@mantine/core";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <Container 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "80vh",
      }}
    >
      <List 
        spacing="sm" 
        center 
        style={{ 
          width: "100%", 
          maxWidth: "600px", 
          padding: "20px", 
          margin: "auto", 
          backgroundColor: "#f9f9f9", 
          borderRadius: "8px", 
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
      >
        {tasks.map((task) => (
          <List.Item
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 20px",
              color: task.completed ? "gray" : "inherit",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
              <Checkbox
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
                icon={() => null}
              />
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.title}
                <Button style={{color:"red" , marginRight:"20px"}} size="xs" onClick={() => dispatch(removeTask(task.id))}>
                حذف
              </Button>
              </span>
            </div>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
