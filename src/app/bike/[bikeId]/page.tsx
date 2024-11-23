import { HeroImg } from "@/assets";
import BikeFeedBack from "@/Bikes/components/BikeFeedBack";
import Rating from "@/Bikes/components/Rating";
import BikeServices from "@/Bikes/services/BikeServices";
import Layout from "@/components/global/Layout";
import Image from "next/image";
import React from "react";

type BikePageProps = {
  params: Promise<{
    bikeId: string;
  }>;
};

const BikePage = async ({ params }: BikePageProps) => {
  const { bikeId } = await params;
  const result = await BikeServices.getSingleBike(bikeId);
  return (
    <>
      <Layout>
        <div className="py-16">
          <header className="w-full text-center text-5xl font-bold text-neutral-800">
            <h1 className="text-primary">Bike Details</h1>
          </header>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* image section */}
          <div className="w-full  h-full">
            {result?.image ? (
              <Image
                src={result?.image}
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
              {result?.name}
            </h1>

            {/* <p className="text-lg text-neutral-600 mb-4">
              <strong>Type:</strong> {result?.type || "N/A"}
            </p> */}
            <p className="text-lg text-neutral-600 mb-4">
              <strong>Brand:</strong> {result?.brand || "N/A"}
            </p>
            <p className="text-lg text-neutral-600 mb-4">
              <strong>Engine Capacity:</strong> {result?.engine || "N/A"} CC
            </p>
            <p className="text-lg text-neutral-600 mb-4">
              <strong>Description:</strong>{" "}
              {result?.description || "No description available."}
            </p>
            {/* <p className="text-lg text-neutral-600 mb-4">
              <strong>Fuel Type:</strong> {result?.fuelType || "N/A"}
            </p> */}
            <h2 className="text-xl font-semibold text-primary mb-2">
              Price: ${result?.price || "N/A"} Per Day
            </h2>
            <h2 className="text-xl font-semibold text-primary mb-2">
              Rating: {result?.average_rating || "No ratings yet"}
            </h2>
          </div>
        </div>

        {/* Feedback List */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Feedbacks */}
          <div>
            <BikeFeedBack />
          </div>
          {/* Rating */}
          <div>
            <Rating bikeId={bikeId} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BikePage;
