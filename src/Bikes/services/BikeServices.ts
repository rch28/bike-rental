import configureAxios from "@/services/axiosConfig";
import { BikeListResponse } from "../types/bikeApiTypes";

const requests = configureAxios();

const BikeServices = {
  // Get Bike list
  getBikeList: (): Promise<BikeListResponse> => {
    return requests.get("/bike/lists/");
  },
};

export default BikeServices;
