import { z } from "zod";

export const FPVerifySchema = z.object({
  email: z.string().email(),
});

export type FPVerifySchemaType = z.infer<typeof FPVerifySchema>;

export const defaultFPVerifyValues: FPVerifySchemaType = {
  email: "",
};
