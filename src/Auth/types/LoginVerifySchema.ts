import { z } from "zod";

export const VerifyOtpSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  otp: z.number(),
});

export type VerifyOtpSchemaType = z.infer<typeof VerifyOtpSchema>;

export const defaultOtpVerifyValues: VerifyOtpSchemaType = {
  email: "",
  otp: 0,
};
