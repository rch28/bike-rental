import { z } from "zod";

export const RentFormSearchSchema = z.object({
  pickup_location: z.string(),
  dropoff_location: z.string(),
  pickup_date: z.string(),
  dropoff_date: z.string(),
  category: z.string(),
});

export type RentFormSearchSchemaType = z.infer<typeof RentFormSearchSchema>;

export const defaultRentFormSearch: RentFormSearchSchemaType = {
  pickup_location: "",
  dropoff_location: "",
  pickup_date: "",
  dropoff_date: "",
  category: "bike",
};

