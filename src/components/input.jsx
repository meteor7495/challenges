import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTodoContext } from "../context/todoContext";
import { todoSchema } from "../validation/zodval";

const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data) => {
    addTodo(data.task);
    reset();
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4}
      mt={4}
    >
      <Box>
        <TextField
          {...register("task")}
          type="text"
          placeholder="ایجاد تسک"
          error={!!errors.task}
        />
        {errors.task && (
          <Typography color="red" component={"p"} variant="subtitle1">
            {errors.task.message}
          </Typography>
        )}
      </Box>
      <Button type="submit" variant="contained">
        افزودن تسک
      </Button>
    </Box>
  );
};

export default TodoForm;
