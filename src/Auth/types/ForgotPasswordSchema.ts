import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

export const defaultForgotPasswordValues: ForgotPasswordSchemaType = {
  email: "",
};
