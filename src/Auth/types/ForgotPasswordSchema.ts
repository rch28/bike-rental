import { z } from "zod";

export const ForgotPasswordSchema = z
  .object({
    email: z.string().email(),
    new_password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
        "Password must be 8-24 characters, with one uppercase, one lowercase, one number, and one special character (!@#$%)."
      ),
    confirm_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match.",
  });

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

export const defaultForgotPasswordValues: ForgotPasswordSchemaType = {
  email: "",
  new_password: "",
  confirm_password: "",
};
