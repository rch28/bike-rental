import configureAxios from "@/services/axiosConfig";
import { BikeListResponse } from "../types/bikeApiTypes";

const requests = configureAxios();

const BikeServices = {
  // Get Bike list
  getBikeList: (): Promise<BikeListResponse> => {
    return requests.get(`/bike/lists/`);
  },
  getFeaturedBikes: (): Promise<BikeListResponse> => {
    return requests.get(`/bike/featured/`);
  },

  // Search Bikes
  searchBikes: (query: string): Promise<BikeListResponse> => {
    return requests.get(`/bike/search/?search=${query}`);
  },
};

export default BikeServices;
