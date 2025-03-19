import { z } from "zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { TextField, Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../validation/validationSchema";

type FormData = z.infer<typeof schema>;

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    dispatch(addTodo(data.title));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <TextField
        {...register("title")}
        label="Add Tasks"
        variant="outlined"
        error={!!errors.title}
        helperText={errors.title?.message}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
