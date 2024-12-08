import { z } from "zod";

export const KhaltiSchema = z.object({
  product_id: z.string(),
  total_amount: z.number(),
  amount_paid: z.number(),
});

export type KhaltiSchemaType = z.infer<typeof KhaltiSchema>;

export const defaultKhaltiValue: KhaltiSchemaType = {
  product_id: "",
  total_amount: 0,
  amount_paid: 0,
};
