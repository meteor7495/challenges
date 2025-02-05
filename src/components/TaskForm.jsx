import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput, Button, Stack } from "@mantine/core";
import { taskSchema } from "../validation/taskSchema";
import { useTaskStore } from "../store";

const TaskForm = () => {
  const { addTask } = useTaskStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data) => {
    addTask({ title: data.title });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          label="موضوع"
          {...register("title")}
          error={errors.title?.message}
        />
        <Button type="submit">اضافه کردن موضوع جدید</Button>
      </Stack>
    </form>
  );
};

export default TaskForm;
