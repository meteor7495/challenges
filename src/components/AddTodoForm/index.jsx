import { ActionIcon, TextInput } from "@mantine/core";
import classes from "./index.module.css";
import { IconArrowLeft } from "@tabler/icons-react/dist/esm/tabler-icons-react";
import { useForm } from "react-hook-form";
import useTodosStore from "../../store/todosStore";

export default function AddTodoForm() {
  const { addTodo } = useTodosStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { title } = data;
    addTodo({ id: Date.now(), title, isCompleted: false });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.add_todo_form}>
      <TextInput
        {...register("title", {
          required: {
            value: true,
            message: "عنوان تسک را وارد کنید.",
          },
          pattern: {
            value: /^[\u0600-\u06FF\s]+$/,
            message: "زبان کیبورد خود را فارسی کنید.",
          },
        })}
        placeholder="عنوان تسک جدید"
        classNames={{
          input: errors?.title?.message ? classes.invalid : classes.input,
        }}
        radius="xl"
        size="md"
        error={errors?.title?.message || ""}
        rightSectionWidth={42}
        rightSection={
          <ActionIcon
            type="submit"
            size={32}
            radius="xl"
            color={"blue"}
            variant="filled"
          >
            <IconArrowLeft size={18} stroke={1.5} />
          </ActionIcon>
        }
      />
    </form>
  );
}
