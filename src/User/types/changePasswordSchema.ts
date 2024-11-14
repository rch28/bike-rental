import { z } from "zod";

export const changePasswordSchema = z
  .object({
    old_password: z.string().min(1, "Old Password is required."),
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
    message: "Passwords do not match",
  });

export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;

export const defaultChangePasswordValues: ChangePasswordSchemaType = {
  old_password: "",
  new_password: "",
  confirm_password: "",
};
