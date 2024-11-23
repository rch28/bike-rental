import { z } from "zod";

export const RatingSchema = z.object({
  user: z.string(),
  bike_id: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});

export type RatingType = z.infer<typeof RatingSchema>;
export const defaultRatingValues: RatingType = {
  user: "",
  bike_id: "",
  rating: 5,
  comment: "",
};
