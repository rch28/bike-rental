import { LocationListResponse } from "@/types/locationType";

// Define the user type for rating
interface User {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

// Define the rating type
export type Rating = {
  id: string;
  user: User;
  bike_id: string;
  rating: string;
  comment: string | null;
  date: string;
};

// Define the individual bike type with ratings
export type Bike = {
  id: string;
  name: string;
  average_rating: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  isFeatured: boolean;
  isAvailable: boolean;
  description: string;
  image: string | null;
  start: string;
  engine: string;
  distance: string;
  date: string;
  ratings_count: number;
  ratings: Rating[];
  locations: LocationListResponse[];
  status: "AVAILABLE" | "MAINTENANCE" | "RESERVED" | "IN_USE";
};

// Define the API response type
export type BikeListResponse = Bike[];
