import { z } from "zod";

export const BikeRentFormSchema = z.object({
  pickup_location: z.string().min(1, "Pickup location is required"),
  dropoff_location: z.string().min(1, "Dropoff location is required"),
  pickup_date: z.date().min(new Date(), "Pickup date must be in the future"),
  dropoff_date: z.date().min(new Date(), "Dropoff date must be in the future"),
  category: z.string(),
});

export type BikeRentFormSchemaType = z.infer<typeof BikeRentFormSchema>;

export const defaultBikeRentValue: BikeRentFormSchemaType = {
  pickup_location: "",
  dropoff_location: "",
  pickup_date: new Date(),
  dropoff_date: new Date(),
  category: "bike",
};
