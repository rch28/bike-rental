import { BikeListResponse } from "@/Bikes/types/bikeApiTypes";

export type successResponse = {
  otp_created_at?: string;
  success: string;
};

export type BikeSearchType = {
  success: string;
  data: BikeListResponse;
};
