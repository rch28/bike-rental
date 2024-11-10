import { z } from "zod";

export const LoginVerifySchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  otp: z
    .string()
    .length(6, "OTP must be 6 digits.")
    .regex(/^\d{6}$/, "Please enter a valid OTP."),
});

export type LoginVerifySchemaType = z.infer<typeof LoginVerifySchema>;

export const defaultLoginVerifyValues: LoginVerifySchemaType = {
  email: "",
  otp: "",
};
