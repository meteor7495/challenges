import React, { useEffect } from "react";
import CustomForm from "../form/CustomForm";
import { useTaskStore } from "../../store/toDoList";
import { Box} from "@mui/material";
import { Task } from "../../types";
import Tasks from "./Tasks";
import { fields, taskSchema } from "../form/constant";

const AddTaskForm: React.FC = () => {
  const {addTask,loadTasksFromStorage } = useTaskStore();

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
    < >
      <CustomForm
        fields={fields}
        onSubmit={handleSubmit}
        validationSchema={taskSchema}
        txtButton="افزودن"
        widthButton="10%"
      />
      <Box sx={{mt:2}}>
        <Tasks/>
      </Box>
    </>
  );
};

export default AddTaskForm;
