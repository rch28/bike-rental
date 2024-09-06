import { Hobby11 } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaArrowRight, FaRegCircleCheck } from "react-icons/fa6";
import { Button } from "../utils/Button";

export const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className=" relative flex flex-col lg:flex-row  items-center justify-between gap-6 my-24 lg:mt-40"
    >
      <div className="flex-1 lg:flex-[0.7] xl:flex-1 flex items-center">
        {/* image  */}
        <div className="p-2 lg:mt-4 border-4  rounded-xl border-primary  w-11/12 sm:w-4/5 lg:w-full xl:w-4/5 mx-auto">
          <Image
            src={Hobby11}
            alt="about-us"
            priority
            className=" lg:h-96   object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Aboutus */}
      <div className="flex-1">
        <div className=" w-11/12 sm:w-4/5 lg:w-full mx-auto">
          <span className=" text-primary text-base md:text-2xl uppercase tracking-[8px] font-semibold">
            About Us
          </span>
          <h1 className=" text-3xl sm:text-4xl leading-[44px] md:leading-[48px] lg:leading-[64px]  lg:text-5xl font-bold text-neutral-800 mb-4 ">
            We Provide Quality <span className="text-primary">Bike Rental</span>{" "}
            Services
          </h1>
          <p className="text-gray-600 font-medium leading-8">
            <span className="font-bold "> With My Bikes </span> offer self-ride
            two wheelers and four wheelers on rent in Lucknow. If you are
            looking for bike or car on rent just My Bikes is the best option to
            make your trip memorable.
          </p>

          {/* list  */}
          <ul className="my-6 text-gray-600 font-medium">
            <li className="flex gap-4 items-center my-1">
              <FaRegCircleCheck className="text-primary" />{" "}
              <span>All Bikes in top notch conditions</span>
            </li>
            <li className="flex gap-4 items-center my-1">
              <FaRegCircleCheck className="text-primary" />{" "}
              <span>Timely pick up and drop off</span>
            </li>
            <li className="flex gap-4 items-center my-1">
              <FaRegCircleCheck className="text-primary" />{" "}
              <span>Trusted & transparent process</span>
            </li>
          </ul>

          {/* url to about */}
          <Button path="/about" title="Discover More"  icon={<FaArrowRight/>} className="mt-4 text-white w-56"/>
        </div>
      </div>
    </div>
  );
};
