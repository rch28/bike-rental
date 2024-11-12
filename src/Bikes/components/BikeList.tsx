"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import BikeServices from "../services/BikeServices";
import Loading from "@/components/utils/Loading";
import { BikeComponent } from "@/components/global/Bike";
import { Bike, BikeListResponse } from "../types/bikeApiTypes";
import usePaginationHook from "@/hooks/usePaginationHook";

const BikeList = () => {
  const { offset, limit, setNext, setPrevious } = usePaginationHook();
  const { data, isLoading } = useQuery<BikeListResponse>({
    queryFn: async () => await BikeServices.getBikeList(offset, limit),
    queryKey: ["get-bike-list", offset, limit],
    select: (res) => res,
  });
  console.log("data", data);
  return (
    <div>
      {isLoading ? (
        <div className="h-32 flex justify-center items-center">
          <Loading className="text-7xl text-gray-600 !important" />
        </div>
      ) : (
        <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 py-12 gap-4">
          {data?.results?.map((bike: Bike) => (
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
