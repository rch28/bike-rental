import { Booking, Money, QualityService } from "@/assets";
import { Style } from "@/lib/Style";
import Image from "next/image";
import React from "react";

export const ServicesInfo = () => {
  return (
    <div className="my-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 ">
        <div
          className={`flex flex-col items-center p-4  rounded-xl shadow-md shadow-gray-500 ${Style.bgPrimary} hover:-translate-y-5  transition-all duration-500 ease-in group`}
        >
          <Image
            src={QualityService}
            alt="Quality-service"
            width={100}
            height={100}
            className=" group-hover:scale-105"
          />
          <h1 className="text-2xl font-bold text-center py-2">
            Quality Srvice
          </h1>
          <p className="text-neutral-500 font-semibold text-justify px-4">
            All our bikes are recently dispatched from the showroom which is
            well mainined and serviced.
          </p>
        </div>
        <div
          className={`flex flex-col items-center p-4  rounded-xl shadow-md shadow-gray-500  bg-pink-100  hover:-translate-y-5  transition-all duration-500 ease-in group`}
        >
          <Image
            src={Booking}
            alt="booking"
            width={100}
            height={100}
            className="group-hover:scale-105 transition-all ease-linear "
          />

          <h1 className="text-2xl font-bold text-center py-2">
            Online Booking
          </h1>
          <p className="text-neutral-500 font-semibold text-justify px-4">
            You can book your dream bike without any hassle by using our web
            platform or mobile application.
          </p>
        </div>
        <div
          className={`flex flex-col items-center p-4  rounded-xl shadow-md shadow-gray-500 bg-gradient-to-r from-pink-100  to-blue-200  hover:-translate-y-5  transition-all duration-500 ease-in group`}
        >
          <Image
            src={Money}
            alt="Money"
            width={100}
            height={100}
            className="group-hover:scale-105 transition-all ease-linear "
          />

          <h1 className="text-2xl font-bold text-center py-2">
            Affortable Pricing
          </h1>
          <p className="text-neutral-500 font-semibold text-justify px-4">
            We offer you bike at very affordable price which is usually less
            than public transport..
          </p>
        </div>
      </div>
    </div>
  );
};
