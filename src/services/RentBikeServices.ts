import { RentFormSearchSchemaType } from "@/BikeRent/types/RentFormSearchSchema";
import configureAxios from "./axiosConfig";

const request = configureAxios();
const RentBikeServices = {
  // Function to search  a bike on locations
  searchBikeOnLocation: async (data: RentFormSearchSchemaType) => {
    return request.post("rent/bike-search/", data);
  },
};

export default RentBikeServices;
