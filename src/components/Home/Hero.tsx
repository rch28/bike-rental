import React from "react";
import Image from "next/image";
import { HeroImg } from "@/assets";
import { Button } from "../utils/Button";
import { FaArrowRight } from "react-icons/fa";
export const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden  relative ">
      <Image
        src={HeroImg}
        alt=""
        height={400}
        width={920}
        className="w-full object-cover  h-full  "
      />

      <div className="w-full md:w-3/4 lg:w-3/5 h-full  absolute top-0 left-0 bg-black bg-opacity-50 backdrop-blur-[1px]">
        <div className="mt-40 mx-3 md:mx-12 text-white">
            <h3 className="uppercase px-4 md:px-8 py-2 bg-primary inline-block rounded-full text-white md:text-xl font-bold ">Book Now and Get 20% off!</h3>
            <h1 className=" text-4xl lg:text-5xl xl:text-7xl font-bold mt-8">Bike rental in your <span className="text-primary">Desired </span> Destination </h1>

            <p className="mt-8 text-lg font-semibold">Rent a bike with most flexible daily, weekly &amp; monthly bike rental plans at most affordable Price. Free Helmet &amp; Easy Booking. Select the bike which you want to book and checkout.</p>
        </div>
        <div className="mx-3 md:mx-12 mt-4 flex gap-5 items-center">
            <Button path="/bikes" title="Book On Call" className="text-white" icon={<FaArrowRight className="z-20" />} />

            <Button path="/bikes" title="Book On Call" className="bg-white text-primary"  icon={<FaArrowRight className="" />} />
        </div>
      </div>
    </div>
  );
};
