import configureAxios from "@/services/axiosConfig";
import { BikeListResponse } from "../types/bikeApiTypes";

const requests = configureAxios();

const BikeServices = {
  // Get Bike list
  getBikeList: (
    offset: number = 0,
    limit: number = 10
  ): Promise<BikeListResponse> => {
    return requests.get(`/bike/lists/?offset=${offset}&limit=${limit}`);
  },
};

export default BikeServices;
