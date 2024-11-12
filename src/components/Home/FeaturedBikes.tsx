"use client";
import { useQuery } from "@tanstack/react-query";
import { BikeComponent } from "../global/Bike";
import BikeServices from "@/Bikes/services/BikeServices";
import Loading from "../utils/Loading";
import { Bike } from "@/Bikes/types/bikeApiTypes";

export const FeaturedBikes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Featured-Bikes"],
    queryFn: async () => await BikeServices.getFeaturedBikes(),
    select: (data) => data,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="my-12">
      <header className="w-full text-center text-4xl md:text-5xl font-bold text-neutral-800">
        <span>Featured</span>
        <span className="text-primary ">Bikes</span>
      </header>

      {/* Mapping Features Bikes */}
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
