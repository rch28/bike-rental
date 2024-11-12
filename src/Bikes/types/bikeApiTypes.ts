// Define the features type
interface BikeFeatures {
  start: string;
  engine: string;
  distance: string;
}

// Define the individual bike type
export type Bike = {
  id: string;
  name: string;
  rating: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  description: string;
  image: string | null;
  features: BikeFeatures;
  date: string;
};

// Define the API response type
export type BikeListResponse = Bike[];
