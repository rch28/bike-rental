"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import BikeServices from "../services/BikeServices";
import Loading from "@/components/utils/Loading";
import { BikeComponent } from "@/components/global/Bike";
import { Bike, BikeListResponse } from "../types/bikeApiTypes";
import { useBikeStore } from "@/store/bikeStore";

const BikeList = () => {
  const { searchQuery, bikes, setBikes, isLoading, setIsLoading } =
    useBikeStore((state) => ({
      searchQuery: state.searchQuery,
      bikes: state.bikes,
      setBikes: state.setBikes,
      isLoading: state.isLoading,
      setIsLoading: state.setIsLoading,
    }));

  const { data, isLoading: bikeLoading } = useQuery<BikeListResponse>({
    queryFn: async () => await BikeServices.getBikeList(),
    queryKey: ["get-bike-list"],
    select: (res) => res,
  });

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      const timer = setTimeout(async () => {
        const response = await BikeServices.searchBikes(searchQuery);
        setIsLoading(false);
        setBikes(response);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      if (data) {
        setBikes(data);
        setIsLoading(bikeLoading);
      }
    }
  }, [searchQuery, data]);
  return (
    <div>
      {isLoading ? (
        <div className="h-32 flex justify-center items-center">
          <Loading className="text-7xl text-gray-600 !important" />
        </div>
      ) : (
        <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 py-12 gap-4">
          {bikes?.length > 0 ? (
            bikes?.map((bike: Bike) => (
              <div key={bike.id}>
                <BikeComponent bike={bike} />
              </div>
            ))
          ) : (
            <div className="text-2xl text-gray-500">No Bikes Found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BikeList;
