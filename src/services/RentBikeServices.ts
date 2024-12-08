import { RentFormSearchSchemaType } from "@/BikeRent/types/RentFormSearchSchema";
import configureAxios from "./axiosConfig";
import { BikeRentFormSchemaType } from "@/BikeRent/types/BikeRentFormSchema";
import { getCookies } from "./getCookies";
import { PaymentSchemaType } from "@/BikeRent/types/PaymentSchema";

interface VerifyPaymentParams {
  oid: string;
  amt: string;
  refId: string;
  rentalId?: string;
}

interface VerifyPaymentResponse {
  success: boolean;
  message: string;
  data?: any;
}
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

  // update payment for payment at pickup
  updateRentBike: async (id: string, data: any) => {
    return request.patch(`rent/bike/update/${id}/`, data, {
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
  initiateKhaltiPayment: async (data: PaymentSchemaType) => {
    return request.post("payment/initiate/", data, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookies()}`,
    });
  },

  // initiate Esewa Payment
  initiateEsewaPayment: async (data: PaymentSchemaType) => {
    return request.post("payment/esewa/initiate/", data, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookies()}`,
    });
  },

  // Verify Esewa Payment
  verifyEsewaPayment: async (
    data: VerifyPaymentParams
  ): Promise<VerifyPaymentResponse> => {
    return request.post("payment/esewa/verify/", data, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookies()}`,
    });
  },
};

export default RentBikeServices;
