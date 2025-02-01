import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../features/tasksSlice";
import { Checkbox, Button, List, Container } from "@mantine/core";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <Container style={{ textAlign: "center", maxWidth: "600px" }}>
      <List spacing="sm" center style={{ width: "100%", paddingRight: "0px" }}>
        {tasks.map((task, index) => (
          <List.Item
            key={task.id}
            style={{
              display: "flex",
              flexDirection: "row",
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
              </span>
            </div>

            <div style={{ marginLeft: "auto" , marginTop:10}}>
              <Button color="red" size="xs" onClick={() => dispatch(removeTask(task.id))}>
                حذف
              </Button>
            </div>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
