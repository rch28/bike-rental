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
};

export default BikeServices;
