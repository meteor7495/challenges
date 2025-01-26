'use client'

import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Task} from "../type";
import {useTaskStore} from "../stores/useTodoStore";
import {Button, Group, Stack, Textarea, TextInput} from "@mantine/core";

const TaskSchema = z.object({
    title: z
        .string()
        .nonempty("عنوان نمی‌تواند خالی باشد")
        .regex(/^[\u0600-\u06FF\s]+$/, "فقط از حروف فارسی استفاده کنید"),
    description: z.string().optional(),
});

type TaskFormValues = z.infer<typeof TaskSchema>;

export function TaskForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<TaskFormValues>({
        resolver: zodResolver(TaskSchema),
    });

    const {addTask} = useTaskStore();

    const onSubmit: SubmitHandler<TaskFormValues> = (data) => {
        const newTask: Task = {
            id: Date.now().toString(),
            title: data.title,
            description: data.description || "",
            completed: false,
        };
        addTask(newTask);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap="md">
                <TextInput
                    label="عنوان"
                    placeholder="عنوان"
                    {...register("title")}
                    error={errors.title?.message}
                />
                <Textarea
                    label="توضیحات"
                    placeholder="توضیحات (اختیاری)"
                    {...register("description")}
                    error={errors.description?.message}
                />
                <Group>
                    <Button type="submit">
                        اضافه کردن
                    </Button>
                </Group>
            </Stack>
        </form>
    );
}
