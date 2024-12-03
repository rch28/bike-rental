"use client";

import { useQuery } from "@tanstack/react-query";
import BikeServices from "./BikeServices";

const useBikeList = (bikeId: string) => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["bike", bikeId],
    queryFn: async () => await BikeServices.getSingleBike(bikeId),
    enabled: !!bikeId, // Ensure query only runs if bikeId is provided
  });

  return {
    data,
    isFetching,
    refetch,
  };
};

export default useBikeList;
