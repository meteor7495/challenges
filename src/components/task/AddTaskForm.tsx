import React, { useEffect } from "react";
import CustomForm from "../form/CustomForm";
import * as Yup from 'yup';
import { useTaskStore } from "../../store/toDoList";
import { Box} from "@mui/material";
import { titleInPersian } from "../../constants";
import { Task } from "../../types";
import Tasks from "./Tasks";

const fields =[
  { name: "title", label: "عنوان تسک", type: "text", col:8},
  { name: "description", label: "توضیحات", type: "textarea", col:8 },
]
const taskSchema = Yup.object({
  title: Yup.string()
    .matches(titleInPersian, "عنوان باید فقط شامل حروف فارسی باشد")
    .min(1, "عنوان وظیفه الزامی است")
    .required("عنوان وظیفه الزامی است"),
  description: Yup.string().optional(),
});

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
    <Box >
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
    </Box>
  );
};

export default AddTaskForm;
