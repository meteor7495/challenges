import { z } from "zod";

export const todoSchema = z.object({
  task: z.string().min(2, "بیشتر از 2 کاراکتر").max(50, "کمتر ار 50 کاراکتر"),
});
