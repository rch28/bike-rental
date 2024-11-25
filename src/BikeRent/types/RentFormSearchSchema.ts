import { z } from "zod";

export const RentFormSearchSchema = z.object({
  pickup_location: z.string(),
  dropoff_location: z.string(),
  pickup_date: z.date(),
  dropoff_date: z.date(),
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
