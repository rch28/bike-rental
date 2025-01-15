import React from "react";
import { FaBiking } from "react-icons/fa";
import { FaRoute } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import Layout from "./Layout";

export const Process = () => {
  const processInfo = [
    {
      id: 1,
      title: "Pick Destination",
      description:
        "Just select your pickup location where you want to travel..",
      icon: <FaRoute />,
    },
    {
      id: 2,
      title: "Choose Perfect  Bike",
      description: "Select your required bike for your journey.",
      icon: <FaBiking />,
    },
    {
      id: 3,
      title: "Online Payment",
      description: "Conform your booking by making online payment.",
      icon: <SiCashapp />,
    },
    {
      id: 4,
      title: "Enjoy Your Bike Ride",
      description:
        "Enjoy your ride. We provide the best service to make your ride memorable.",
      icon: <RiMotorbikeFill />,
    },
  ];
  return (
    <div className="mt-12 py-12 bg-white">
      <Layout>
        <header className="w-full text-center  font-bold text-neutral-800">
          <span className="uppercase text-gray-600 ">Process</span>
          <h1 className=" text-4xl md:text-5xl ">
            How it <span className="text-primary  ">Works</span>
          </h1>
        </header>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4 my-12">
            {processInfo.map((process) => (
              <div
                key={process.id}
                className="p-4 bg-pink-50 rounded-xl shadow-sm shadow-neutral-400 group"
              >
                <div className=" w-32 h-32 p-1 rounded-full flex justify-center items-center bg-white border-2 border-primary relative mx-auto ">
                  <span className="absolute top-0 -left-3 bg-primary w-8 h-8 grid place-items-center rounded-lg text-white font-semibold">
                    0{process.id}
                  </span>
                  <div className="relative overflow-hidden h-full w-full border grid place-items-center  bg-primary rounded-full text-6xl text-white before:absolute before:w-0 before:h-0 before:bg-black before:transition-all before:ease-linear before:duration-700 group-hover:before:w-60 group-hover:before:h-60 before:rounded-full ">
                    <span className="relative z-10"> {process.icon}</span>
                  </div>
                </div>
                <h1 className="text-2xl text-center font-bold text-neutral-800 my-4">
                  {process.title}
                </h1>
                <p className="text-sm text-center text-neutral-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};
