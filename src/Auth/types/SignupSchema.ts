import { z } from "zod";

export const SignupSchema = z
  .object({
    first_name: z.string().min(1, "First Name is required."),
    last_name: z.string().min(1, "Last Name is required."),
    email: z.string().email(),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
        "Password must be 8-24 characters, with one uppercase, one lowercase, one number, and one special character (!@#$%)."
      ),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match.",
  });

export type SignupSchemaType = z.infer<typeof SignupSchema>;

export const defaultSignupValues: SignupSchemaType = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};
