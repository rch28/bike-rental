"use client";
import Image from "next/image";
import React from "react";
import { HeroImg } from "@/assets";
import getBikeList from "../services/getBikeList";
import Loading from "@/components/utils/Loading";

const BikeDetails = ({ bikeId }: { bikeId: string }) => {
  const { data, isFetching } = getBikeList(bikeId);
  if (isFetching)
    return (
      <p className="h-96 flex justify-center items-center">
        <Loading />
      </p>
    );
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      {/* image section */}
      <div className="w-full  h-full">
        {data?.image ? (
          <Image
            src={data?.image}
            width={400}
            height={300}
            alt="bike"
            priority
            className="w-full object-cover rounded-md drop-shadow-xl"
          />
        ) : (
          <div className="w-full  shadow-sm shadow-gray-500  bg-blue-200 rounded-md">
            <Image
              src={HeroImg}
              width={400}
              height={300}
              alt="bike"
              priority
              className="w-full h-full object-cover rounded-md opacity-50"
            />
          </div>
        )}
      </div>

      {/* bike details */}
      <div>
        <h1 className="text-4xl font-bold text-neutral-700 mb-4">
          {data?.name}
        </h1>

        {/* <p className="text-lg text-neutral-600 mb-4">
      <strong>Type:</strong> {data?.type || "N/A"}
    </p> */}
        <p className="text-lg text-neutral-600 mb-4">
          <strong>Brand:</strong> {data?.brand || "N/A"}
        </p>
        <p className="text-lg text-neutral-600 mb-4">
          <strong>Engine Capacity:</strong> {data?.engine || "N/A"} CC
        </p>
        <p className="text-lg text-neutral-600 mb-4">
          <strong>Description:</strong>{" "}
          {data?.description || "No description available."}
        </p>
        {/* <p className="text-lg text-neutral-600 mb-4">
      <strong>Fuel Type:</strong> {data?.fuelType || "N/A"}
    </p> */}
        <h2 className="text-xl font-semibold text-primary mb-2">
          Price: ${data?.price || "N/A"} Per Day
        </h2>
        <h2 className="text-xl font-semibold text-primary mb-2 flex justify-between items-center">
          <span> Rating: {data?.average_rating}/5</span>
          <span>
            {" "}
            {data?.ratings_count ? `${data?.ratings_count} vote ` : ""}{" "}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default BikeDetails;
