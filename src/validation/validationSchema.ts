import { z } from "zod";

//validation for add task
export const schema = z.object({
  title: z
    .string()
    .min(3, "Enter at least 3 characters")
    .max(50, "Maximum 50 characters allowed")
    .regex(/^[\u0600-\u06FF\s]+$/, "Only Persian letters are allowed"),
});
