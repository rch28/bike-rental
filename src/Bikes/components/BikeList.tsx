"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import BikeServices from "../services/BikeServices";
import Loading from "@/components/utils/Loading";
import { BikeComponent } from "@/components/global/Bike";
import { Bike, BikeListResponse } from "../types/bikeApiTypes";

const BikeList = () => {
  const { data, isLoading } = useQuery<BikeListResponse>({
    queryFn: async () => await BikeServices.getBikeList(),
    queryKey: ["get-bike-list"],
    select: (res) => res,
  });
  return (
    <div>
      {isLoading ? (
        <div className="h-32 flex justify-center items-center">
          <Loading className="text-7xl text-gray-600 !important" />
        </div>
      ) : (
        <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 py-12 gap-4">
          {data?.map((bike: Bike) => (
            <div key={bike.id}>
              <BikeComponent bike={bike} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BikeList;
