import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(1, "عنوان نمیتواند خالی باشد.")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است."),
});
