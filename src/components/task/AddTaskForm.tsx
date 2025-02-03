import React, { useEffect } from "react";
import CustomForm from "../form/CustomForm";
import { useTaskStore } from "../../store/toDoList";
import { Box } from "@mui/material";
import { Task } from "../../types";
import Tasks from "./Tasks";
import { fields, taskSchema } from "../form/constant";

const AddTaskForm: React.FC = () => {
  const { addTask, loadTasksFromStorage } = useTaskStore();

  useEffect(() => {
    loadTasksFromStorage();
  }, [loadTasksFromStorage]);

  const handleSubmit = (data: any) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      priority: data.priority,
      completed: false,
    };
    addTask(newTask);
  };

  return (
    <Box
      sx={{
        width: "100dvw",
        height: "100dvh",
        paddingTop: "20px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          boxShadow: "0 2px 6px rgba(0,0,0,.3)",
          padding: "16px",
          borderRadius: "16px",
          height: "100%",
        }}
      >
        <CustomForm
          fields={fields}
          onSubmit={handleSubmit}
          validationSchema={taskSchema}
          txtButton="افزودن"
          widthButton="10%"
        />

          <Tasks sx={{ mt: 2 }}  />
      </Box>
    </Box>
  );
};

export default AddTaskForm;
