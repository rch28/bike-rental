import configureAxios from "@/services/axiosConfig";
import { Bike, BikeListResponse } from "../types/bikeApiTypes";
import { RatingType } from "../types/RatingSchema";
import { successResponse } from "@/Auth/types/common";
import { getCookies } from "@/services/getCookies";

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

  // get single Bike
  getSingleBike: (id: string): Promise<Bike> => {
    return requests.get(`/bike/retrieve/${id}/`);
  },

  // Post Rating
  postRating: async (data: RatingType): Promise<successResponse> => {
    return requests.post(`/bike/rating/`, data, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookies()}`,
    });
  },
  // get bike based on locations
  getBikeByLocation: (locationId: string): Promise<BikeListResponse> => {
    return requests.get(`/bike/location/${locationId}/`);
  },
};

export default BikeServices;
