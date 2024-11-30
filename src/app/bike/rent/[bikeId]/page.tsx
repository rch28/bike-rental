import { HeroImg } from "@/assets";
import BikeRentalFormProvider from "@/BikeRent/components/BikeRentalFormProvider";
import BikeServices from "@/Bikes/services/BikeServices";
import Layout from "@/components/global/Layout";
import Loading from "@/components/utils/Loading";
import Navigate from "@/components/utils/Navigate";
import Image from "next/image";
import React from "react";

type BikePageProps = {
  params: Promise<{
    bikeId: string;
  }>;
};
const RentBikePage = async ({ params }: BikePageProps) => {
  const { bikeId } = await params;
  if (!bikeId) {
    return (
      <div className="h-96 flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  const bikeData = await BikeServices.getSingleBike(bikeId);
  console.log(bikeData);

  return (
    <>
      <Layout>
        <div className="py-10">
          <Navigate />
          <header className="w-full text-center text-5xl font-bold text-neutral-800">
            <h1 className="text-primary">Rent Bike</h1>
          </header>
          <div className="flex justify-center items-center gap-4 mt-10">
            {/* bike Details  */}
            <div className="flex-1">
              <div className="">
                <div className="w-full  h-full">
                  {bikeData?.image ? (
                    <Image
                      src={bikeData?.image}
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
                <div className="w-full bg-white shadow-md shadow-gray-200 rounded-md mt-6 p-4 space-y-2">
                  <h2 className="text-3xl font-bold bg-primary text-white px-4 py-1 rounded-md">
                    {bikeData?.name}
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    <p className="bg-orange-300 px-4 py-1 rounded-lg font-semibold">
                      {bikeData?.brand}
                    </p>
                    <p className="bg-orange-300 px-4 py-1 rounded-lg font-semibold">
                      {bikeData?.engine}
                    </p>
                    <p className="bg-orange-300 px-4 py-1 rounded-lg font-semibold">
                      {bikeData?.distance}
                    </p>
                    <p className="bg-orange-300 px-4 py-1 rounded-lg font-semibold">
                      {bikeData?.start}
                    </p>
                  </div>
                  <p>{bikeData?.description}</p>
                  <p>
                    <strong>Is Available:</strong>{" "}
                    {bikeData?.isAvailable ? "Yes" : "No"}
                  </p>
                  {/* Available Locations */}
                  {bikeData?.isAvailable && (
                    <div>
                      <strong>Available Locations</strong>
                      <div className="flex flex-wrap gap-4">
                        {bikeData?.locations.map((location) => (
                          <div
                            key={location.id}
                            className="bg-orange-300 px-4 py-1 rounded-lg font-semibold"
                          >
                            <p className="">{location.city}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-semibold text-primary">
                      रु {bikeData?.price}
                    </span>
                    <span className="text-xs text-gray-500 font-semibold">
                      /day
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg text-gray-600 font-semibold">
                      {bikeData?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <BikeRentalFormProvider />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RentBikePage;
