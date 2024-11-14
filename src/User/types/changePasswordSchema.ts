import { z } from "zod";

export const changePasswordSchema = z
  .object({
    old_password: z.string().min(8),
    new_password: z.string().min(8),
    confirm_password: z.string().min(8),
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
