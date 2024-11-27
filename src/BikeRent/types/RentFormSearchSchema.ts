import { z } from "zod";

export const RentFormSearchSchema = z.object({
  pickup_location: z.string().min(1, "Pickup location is required"),
  dropoff_location: z.string().min(1, "Dropoff location is required"),
  pickup_date: z.date().min(new Date(), "Pickup date must be in the future"),
  dropoff_date: z.date().min(new Date(), "Dropoff date must be in the future"),
  category: z.string(),
});

export type RentFormSearchSchemaType = z.infer<typeof RentFormSearchSchema>;

export const defaultRentFormSearch: RentFormSearchSchemaType = {
  pickup_location: "",
  dropoff_location: "",
  pickup_date: new Date(),
  dropoff_date: new Date(),
  category: "bike",
};
