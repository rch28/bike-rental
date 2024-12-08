import { z } from "zod";

export const PaymentSchema = z.object({
  product_id: z.string(),
  total_amount: z.number(),
  amount_paid: z.number(),
});

export type PaymentSchemaType = z.infer<typeof PaymentSchema>;

export const defaultPaymentValue: PaymentSchemaType = {
  product_id: "",
  total_amount: 0,
  amount_paid: 0,
};
