import { LocationListResponse } from "@/types/locationType";
import configureAxios from "./axiosConfig";

const request = configureAxios();
const LocationService = {
  // get location list
  getLocationList: async (): Promise<LocationListResponse[]> => {
    return request.get("common/location-list/");
  },
};

export default LocationService;
