import { RentFormSearchSchemaType } from "@/BikeRent/types/RentFormSearchSchema";
import configureAxios from "./axiosConfig";
import { BikeRentFormSchemaType } from "@/BikeRent/types/BikeRentFormSchema";
import { getCookies } from "./getCookies";

const request = configureAxios();
const RentBikeServices = {
  // Function to search  a bike on locations
  searchBikeOnLocation: async (data: RentFormSearchSchemaType) => {
    return request.post("rent/bike-search/", data);
  },

  // Function to rent a bike
  rentBike: async (data: BikeRentFormSchemaType) => {
    return request.post("rent/bike/", data, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookies()}`,
    });
  },

  // get rent detail
  getSingleRent: async (id: string) => {
    return request.get(`rent/bike/${id}/`, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookies()}`,
    });
  },

  // initiate Khalti Payment
  initiateKhaltiPayment: async (data: any) => {
    return request.post("payment/initiate/", data, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookies()}`,
    });
  },
};

export default RentBikeServices;
