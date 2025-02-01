import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(3, "حداقل ۳ کاراکتر وارد کنید").regex(/^[؀-ۿ\s]+$/, "فقط حروف فارسی مجاز است"),
});
