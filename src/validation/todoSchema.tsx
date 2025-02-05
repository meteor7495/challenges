import { z } from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(1, "حداقل 1 حرف وارد کنید")
    .max(50, "حداکثر ۵۰ حرف مجاز است")
    .regex(/^[\u0600-\u06FF\s]+$/, "لطفاً فقط حروف فارسی وارد کنید"),
});
export type TodoSchema = z.infer<typeof todoSchema>;