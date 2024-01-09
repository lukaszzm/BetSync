import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;
