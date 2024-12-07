import { z } from "zod";

export const KhaltiSchema = z.object({
  rental: z.string(),
  total_amount: z.number(),
  amount_paid: z.number(),
});

export type KhaltiSchemaType = z.infer<typeof KhaltiSchema>;

export const defaultKhaltiValue: KhaltiSchemaType = {
  rental: "",
  total_amount: 0,
  amount_paid: 0,
};
