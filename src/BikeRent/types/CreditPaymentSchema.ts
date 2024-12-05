import { z } from "zod";

export const CreditPaymentSchema = z.object({
  card_number: z.string().min(16, "Card number must be 16 digits"),
  name_on_card: z.string().min(1, "Name on card is required"),
  expiry_date: z.string().min(5, "Expiry date is required"),
  cvv: z.string().min(3, "CVV must be 3 digits"),
});

export type CreditPaymentType = z.infer<typeof CreditPaymentSchema>;

export const defaultCreditPayment: CreditPaymentType = {
  card_number: "",
  name_on_card: "",
  expiry_date: "",
  cvv: "",
};
