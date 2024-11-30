import { HeroImg } from "@/assets";
import BikeDetails from "@/Bikes/components/BikeDetails";
import BikeFeedBack from "@/Bikes/components/BikeFeedBack";
import Rating from "@/Bikes/components/Rating";
import BikeServices from "@/Bikes/services/BikeServices";
import Layout from "@/components/global/Layout";
import Loading from "@/components/utils/Loading";
import Navigate from "@/components/utils/Navigate";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type BikePageProps = {
  params: Promise<{
    bikeId: string;
  }>;
};

const BikePage = async ({ params }: BikePageProps) => {
  const { bikeId } = await params;

  if (!bikeId) {
    return (
      <div className="h-96 flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  if (bikeId === "rent") {
    redirect("/bike-on-rent");
  }
  return (
    <>
      <Layout>
        <div className="py-10">
          <Navigate />
          <header className="w-full text-center text-5xl font-bold text-neutral-800">
            <h1 className="text-primary">Bike Details</h1>
          </header>
        </div>
        <BikeDetails bikeId={bikeId} />

        {/* Feedback List */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Feedbacks */}
          <div>
            <BikeFeedBack bikeId={bikeId} />
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
