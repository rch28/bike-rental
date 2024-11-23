import { z } from "zod";

export const bikeSchema = z.object({
  name: z.string(),
  average_rating: z.number().optional(),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  color: z.string(),
  start: z.string(),
  engine: z.string(),
  distance: z.string(),

  price: z.number(),
  description: z.string().optional(),
  image: z.string().optional(),
  date: z.string().optional(),
});

export type bikeType = z.infer<typeof bikeSchema>;
export const defaultBikeValues: bikeType = {
  name: "",
  brand: "",
  model: "",
  year: 0,
  color: "",
  start: "",
  engine: "",
  distance: "",

  price: 0,
  description: "",
  image: "",
  date: "",
};
