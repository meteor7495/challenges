import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../features/tasksSlice";
import { Button, List, Container } from "@mantine/core";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <Container style={{ textAlign: "center", maxWidth: "500px" }}>
      <List spacing="sm" center>
        {tasks.map((task, index) => (
          <List.Item
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "row",
              alignItems: "center",
              width: "100%",
              padding: "10px 0", 
              color: task.completed ? "gray" : "inherit",
            }}
          >
            <div
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "right",
                gap: "10px",
                // flex: 1,
              }}
            >
              <span style={{ fontWeight: "bold" }}>{index + 1}.</span>
              <span>{task.title}</span>
            </div>

            <div style={{ display: "flex", gap: "10px",alignItems: "right"}}>
              <Button onClick={() => dispatch(toggleTask(task.id))}>انجام شد</Button>
              <Button color="red" size="xs" onClick={() => dispatch(removeTask(task.id))}>حذف</Button>
            </div>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
