import { LocationListResponse } from "@/types/locationType";
import configureAxios from "./axiosConfig";
import { getCookies } from "./getCookies";

const requests = configureAxios();
const LocationService = {
  // get location list
  getLocationList: async (): Promise<LocationListResponse[]> => {
    return requests.get("common/location-list/");
  },
  // Fetch location data by id
  getLocationById: async (id: string) => {
    return requests.get(`common/location-retrieve/${id}/`);
  },
};

export default LocationService;
