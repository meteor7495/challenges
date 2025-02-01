import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../features/tasksSlice";
import { Checkbox, Button, List, Container } from "@mantine/core";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <Container style={{ textAlign: "center", maxWidth: "600px" }}>
      <List spacing="sm" center style={{ width: "100%" }}>
        {tasks.map((task, index) => (
          <List.Item
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px 0",
              color: task.completed ? "gray" : "inherit",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flex: 1,
              }}
            >
              <span style={{ fontWeight: "bold" }}>{index + 1}.</span>
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.title}
              </span>
              <Checkbox 
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
                icon={() => null} // راه‌حل صحیح برای حذف آیکن
              />
            </div>

            <Button color="red" size="xs" onClick={() => dispatch(removeTask(task.id))}>
              حذف
            </Button>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
