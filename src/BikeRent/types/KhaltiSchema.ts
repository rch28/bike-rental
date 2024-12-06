import { z } from "zod";

export const KhaltiSchema = z.object({
  rent_id: z.string(),
  total_amount: z.number(),
  paid_amount: z.number(),
});

export type KhaltiSchemaType = z.infer<typeof KhaltiSchema>;

export const defaultKhaltiValue: KhaltiSchemaType = {
  rent_id: "",
  total_amount: 0,
  paid_amount: 0,
};
