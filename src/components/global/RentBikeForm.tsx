"use client";

import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight, FaMotorcycle } from "react-icons/fa6";
import { Button } from "../utils/Button";
import { useState } from "react";

export const RentBikeForm = () => {
  const [formData, setFormData] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    dropOffDate: "",
    bike: "bike",
  });

  console.log(formData);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="relative h-auto  lg:min-h-[450px] md:min-h-[500px] xs:min-h-[600px] min-h-[730px] xl:min-h-[330px]">
      <div className="px-6 py-4 h-full bg-white rounded-xl shadow-sm shadow-neutral-400 absolute -top-6 md:-top-12 lg:-top-8 xl:-top-14 w-full">
        <h1 className="py-4 text-3xl  md:text-4xl font-bold">
          {" "}
          Let&apos;s Find Your Perfect Bike
        </h1>

        {/* Form */}
        <form
          className="mt-2 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4"
          onSubmit={handleSubmit}
        >
          {/* Pick Up location */}
          <div className="relative">
            <label
              htmlFor="pickUpLocation"
              className="font-medium text-neutral-800"
            >
              Pick Up Location
            </label>
            <select
              name="pickUpLocation"
              id="pickUpLocation"
              value={formData.pickUpLocation}
              onChange={handleChange}
              className="block w-full  mt-2 px-4 py-3 text-gray-400 bg-white border border-gray-400   focus:border-primary rounded-xl cursor-pointer focus:outline-none text-lg  appearance-none "
            >
              <option value="1" className="w-fit py-2 px-4 text-black">
                Select Pick Up Location
              </option>
              <option value="2" className="w-fit py-2 px-4 text-black">
                Chitwan
              </option>
              <option value="3" className="w-fit py-2 px-4 text-black">
                Pokhara
              </option>
              <option value="4" className="w-fit py-2 px-4 text-black">
                Butwol
              </option>
              <option value="5" className="w-fit py-2 px-4 text-black">
                Kathmandu
              </option>
              <option value="5" className="w-fit py-2 px-4 text-black">
                Biratnagar
              </option>
            </select>
            <CiLocationOn className="absolute right-5 top-12 text-xl text-gray-600" />
          </div>

          {/* Drop Off location */}
          <div className="relative">
            <label
              htmlFor="dropOffLocation"
              className="font-medium text-neutral-800"
            >
              Drop off Location
            </label>
            <select
              name="dropOffLocation"
              id="dropOffLocation"
              value={formData.dropOffLocation}
              onChange={handleChange}
              className="block w-full  mt-2 px-4 py-3 text-gray-400 bg-white border border-gray-400   focus:border-primary rounded-xl cursor-pointer focus:outline-none text-lg  appearance-none "
            >
              <option value="1" className="w-fit py-2 px-4 text-black">
                Select Drop Off Location
              </option>
              <option value="2" className="w-fit py-2 px-4 text-black">
                Chitwan
              </option>
              <option value="3" className="w-fit py-2 px-4 text-black">
                Pokhara
              </option>
              <option value="4" className="w-fit py-2 px-4 text-black">
                Butwol
              </option>
              <option value="5" className="w-fit py-2 px-4 text-black">
                Kathmandu
              </option>
              <option value="5" className="w-fit py-2 px-4 text-black">
                Biratnagar
              </option>
            </select>
            <CiLocationOn className="absolute right-5 top-12 text-xl text-gray-600" />
          </div>

          {/* pick up date */}
          <div className="relative">
            <label
              htmlFor="pickUpDate"
              className="font-medium text-neutral-800"
            >
              Pick Up Date
            </label>
            <input
              type="datetime-local"
              name="pickUpDate"
              id="pickUpDate"
              value={formData.pickUpDate}
              onChange={handleChange}
              placeholder="MM/DD/YYYY"
              className="block w-full  mt-2 px-4 py-3 text-gray-400 bg-white border border-gray-400   focus:border-primary rounded-xl cursor-pointer focus:outline-none text-lg  appearance-none "
            />
          </div>
          {/* Dropoff Date */}
          <div className="ralative">
            <label
              htmlFor="dropOffDate"
              className="font-medium text-neutral-800"
            >
              Drop off Date
            </label>
            <input
              type="datetime-local"
              name="dropOffDate"
              id="dropOffDate"
              value={formData.dropOffDate}
              onChange={handleChange}
              placeholder="MM/DD/YYYY"
              className="block w-full  mt-2 px-4 py-3 text-gray-400 bg-white border border-gray-400   focus:border-primary rounded-xl cursor-pointer focus:outline-none text-lg  appearance-none "
            />
          </div>

          {/* Bike */}
          <div className="relative">
            <label htmlFor="bike" className="font-medium text-neutral-800">
              Bike
            </label>
            <input
              type="text"
              name="bike"
              readOnly
              placeholder="Bike"
              id="bike"
              className="block w-full  mt-2 px-4 py-3 text-gray-400 bg-white border border-gray-400   focus:border-primary rounded-xl cursor-pointer focus:outline-none text-lg  appearance-none "
            />

            <FaMotorcycle className="absolute right-5 top-12 text-xl text-gray-600" />
          </div>
          <div className="relative">
            <label
              htmlFor="bike"
              className="font-medium hidden md:inline-block text-neutral-800  invisible"
            >
              Bike
            </label>
            <Button
              path="/search"
              title="Find Your Bike"
              className=" text-white mt-2 py-3 text-lg"
              icon={<FaArrowRight className="" />}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
