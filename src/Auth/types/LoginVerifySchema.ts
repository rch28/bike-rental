import { z } from "zod";

export const LoginVerifySchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  otp: z.number().int().min(100000, "Please enter a valid OTP."),
});

export type LoginVerifySchemaType = z.infer<typeof LoginVerifySchema>;

export const defaultLoginVerifyValues: LoginVerifySchemaType = {
  email: "",
  otp: 0,
};
