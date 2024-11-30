"use client";

import { useQuery } from "@tanstack/react-query";

import BikeServices from "./BikeServices";

const getBikeList = (bikeId: string) => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["bike", bikeId],
    queryFn: async () => await BikeServices.getSingleBike(bikeId),
    enabled: !!bikeId,
  });
  return {
    data,
    isFetching,
    refetch,
  };
};

export default getBikeList;
