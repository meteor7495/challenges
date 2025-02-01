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
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
    >
      <TextInput placeholder="عنوان تسک" {...register("title")} error={errors.title?.message} />
      <Button type="submit">افزودن</Button>
    </form>
  );
};

export default TaskForm;
