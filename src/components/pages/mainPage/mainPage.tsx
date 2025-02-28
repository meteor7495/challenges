import React, { useEffect } from "react";
import style from "./_mainPage.module.scss";
import { Input } from "../../input/Input";
import Button from "../../button/button";
import TaskCard from "../../taskCard/taskCard";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTodo } from "../../../context/TaskContext";

export type TaskFormData = {
  task: string;
};

const MainPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormData>();

  const { todos, addTodo, removeTodo, toggleTodo } = useTodo();

  const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    addTodo(data.task);
    reset();
  };

  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.title}>اضافه کردن وظایف جدید</div>
        <form className={style.addTask} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="عنوان وظیفه"
            placeholder="فقط از از حروف فارسی استفاده کنید"
            {...register("task", {
              required: "این فیلد الزامی است",
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/,
                message: "فقط از حروف فارسی استفاده کنید",
              },
            })}
            error={errors.task}
          />
          <Button type="submit">تایید وظیفه</Button>
        </form>

        <div className={style.tasks}>
          {todos.map((todo, index) => (
            <TaskCard
              key={todo.id}
              no={index + 1}
              title={todo.title}
              status={todo.completed ? "complete" : "uncomplete"}
              onRemove={() => removeTodo(todo.id)}
              onToggleStatus={() => toggleTodo(todo.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
