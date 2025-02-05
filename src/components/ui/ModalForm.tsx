import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Modal, Input } from "@mantine/core";
import { useModal } from "@contexts/ModalContext";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "@redux/todoSlice";
import { TodoSchema, todoSchema } from "@validation/todoSchema";

interface TodoFormData {
  title: string;
}

export default function ModalForm() {
  const { isOpen, mode, currentTodo, closeModal } = useModal();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: { title: "" },
  });

  useEffect(() => {
    if (mode === "edit" && currentTodo) {
      setValue("title", currentTodo.title);
    } else {
      reset();
    }
  }, [mode, currentTodo]);

  const onSubmit: SubmitHandler<TodoFormData> = (data:TodoSchema) => {
    if (mode === "add") {
      dispatch(addTodo({ id: Date.now(), title: data.title, checked: false }));
    } else if (currentTodo) {
      dispatch(editTodo({ id: currentTodo.id, title: data.title }));
    }
    reset();
    closeModal();
  };
  return (
    <Modal
      opened={isOpen}
      onClose={closeModal}
      title={mode === "add" ? "Add To-Do" : "Edit To-Do"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          {...register("title")}
          placeholder="لطفاً عنوان تودو را وارد کنید"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <Button type="submit" variant="filled">
          {mode === "add" ? "Add To-Do" : "Edit To-Do"}
        </Button>
      </form>
    </Modal>
  );
}
