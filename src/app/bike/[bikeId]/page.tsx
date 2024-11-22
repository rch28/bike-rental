import BikeServices from "@/Bikes/services/BikeServices";
import Layout from "@/components/global/Layout";
import Image from "next/image";
import React from "react";

type BikePageProps = {
  params: {
    bikeId: string;
  };
};

const BikePage = async ({ params }: BikePageProps) => {
  const { bikeId } = params;
  const result = await BikeServices.getSingleBike(bikeId);
  return (
    <>
      <Layout>
        <div className="py-16">
          <header className="w-full text-center text-5xl font-bold text-neutral-800">
            <h1 className="text-primary">Bike Details</h1>
          </header>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {/* image section */}
          <div className="w-full  h-full">
            {/* {result?.image ? (
              <Image
                src={result?.image}
                width={400}
                height={300}
                alt="bike"
                className="w-full object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-full bg-red-500">empty</div>
            )} */}
            <div className="w-full rounded-md bg-red-500 h-60 ">empty</div>
          </div>

          {/* bike details */}
          <div>
            <h1>{result?.name}</h1>
            <p>{result?.description}</p>
            <h2>Price: {result?.price}</h2>
            <h2>Rating: {result?.rating}</h2>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BikePage;
