import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string(),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const defaultLoginValues: LoginSchemaType = {
  email: "",
  password: "",
};
