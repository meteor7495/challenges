import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextInput } from "@mantine/core";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../utils/validators";
import { v4 as uuidv4 } from "uuid";

const TaskForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(taskSchema) });

  const onSubmit = (data) => {
    dispatch(addTask({ id: uuidv4(), title: data.title, completed: false }));
    reset();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        style={{ display: "flex", width: "50%",gap:"30px", alignItems: "center" }}
      >
        <TextInput
          placeholder="عنوان تسک"
          {...register("title")}
          error={errors.title?.message}
          w="100%"
          styles={{
            input: {
              width: "100%",
              backgroundColor: "#f5f5f5", 
              borderRadius: "8px",
              padding: "12px", 
              fontSize: "14px",
              border: "2px solid #ccc",
            },
          }}
        />

        <Button style={{padding: "12px", borderRadius:"10px"}} type="submit">افزودن</Button>
      </form>
    </div>
  );
};

export default TaskForm;
