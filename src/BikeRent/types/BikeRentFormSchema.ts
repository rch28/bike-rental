import { bikeSchema } from "@/Bikes/types/bikeSchema";
import { z } from "zod";

export const PaymentStatusSchema = z.enum([
  "pending",
  "paid",
  "failed",
  "refunded",
]);

// Rental status schema
export const RentalStatusSchema = z.enum([
  "active",
  "completed",
  "cancelled",
  "overdue",
]);
export const BikeRentFormSchema = z
  .object({
    bike: z.string(),
    pickup_location: z.string().min(1, "Pickup location is required"),
    dropoff_location: z.string().min(1, "Dropoff location is required"),
    pickup_date: z.date().min(new Date(), "Pickup date must be in the future"),
    dropoff_date: z
      .date()
      .min(new Date(), "Dropoff date must be in the future"),
  })
  .refine((data) => data.dropoff_date > data.pickup_date, {
    path: ["dropoff_date"],
    message: "Dropoff date must be greater than pickup date",
  });

export const RentalResponseSchema = z.object({
  id: z.string(),
  user: z.number(), // User ID
  bike: bikeSchema,
  pickup_location: z.string(),
  dropoff_location: z.string(),
  pickup_date: z.date(),
  dropoff_date: z.date(),
  actual_dropoff_date: z.date().nullable(),
  payment_status: PaymentStatusSchema,
  rental_status: RentalStatusSchema,
  total_amount: z.number(),
  created_at: z.date(),
  updated_at: z.date(),
  payment_date: z.date().nullable(),
});

// Cancel rental request schema
export const CancelRentalSchema = z.object({
  rental_id: z.number(),
  reason: z.string().optional(),
});

// Update rental status schema
export const UpdateRentalStatusSchema = z.object({
  rental_id: z.number(),
  status: RentalStatusSchema,
});

// User rental history query schema
export const RentalHistoryQuerySchema = z.object({
  status: RentalStatusSchema.optional(),
  start_date: z.date().optional(),
  end_date: z.date().optional(),
  page: z.number().int().positive().optional(),
  limit: z.number().int().positive().max(100).optional(),
});

export type BikeRentFormSchemaType = z.infer<typeof BikeRentFormSchema>;
export type PaymentStatus = z.infer<typeof PaymentStatusSchema>;
export type RentalStatus = z.infer<typeof RentalStatusSchema>;
export type RentalResponse = z.infer<typeof RentalResponseSchema>;
export type CancelRental = z.infer<typeof CancelRentalSchema>;
export type UpdateRentalStatus = z.infer<typeof UpdateRentalStatusSchema>;
export type RentalHistoryQuery = z.infer<typeof RentalHistoryQuerySchema>;

export const defaultBikeRentValue: BikeRentFormSchemaType = {
  bike: "",
  pickup_location: "",
  dropoff_location: "",
  pickup_date: new Date(),
  dropoff_date: new Date(),
};
