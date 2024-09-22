"use client";
import { useStore } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { LuXCircle } from "react-icons/lu";
import { Button } from "../utils/Button";

const AddBikeDrawer = () => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const { toggleAddBikeDrawer, setToggleAddBikeDrawer } = useStore();

  const handleClickOutside = (e: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      setToggleAddBikeDrawer(false);
    }
  };

  useEffect(() => {
    if(toggleAddBikeDrawer){
      document.body.classList.add('overflow-hidden')
    }else{
      document.body.classList.remove('overflow-hidden')
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove('overflow-hidden')

    };
  }, []);

  const handleSubmit = ( e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("form submited");
  }
  return (
    <AnimatePresence >
      {toggleAddBikeDrawer && (
        <motion.div
          key="add-bike-drawer"
          ref={drawerRef}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed right-0 top-0 w-full md:w-1/2 xl:w-2/5 rounded-s-lg flex flex-col gap-4 bg-white text-black  shadow-lg h-full overflow-auto "
        >
          <div className="flex justify-between items-center p-4 mt-3">
            <h1 className="text-2xl font-bold ">Add New Bike</h1>
            <LuXCircle
              size={32}
              onClick={() => setToggleAddBikeDrawer(false)}
              className="cursor-pointer hover:text-primary transition-all duration-300 ease-linear"
            />
          </div>
          <form className="p-4 pt-0 space-y-4" onSubmit={handleSubmit} >
            <div className="flex  w-full justify-between gap-4">
              <div>
                <label htmlFor="name" className="hidden">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
              <div>
                <label htmlFor="rating" className="hidden">
                  Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  id="rating"
                  placeholder="Rating"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
            </div>
            <div className="flex  w-full justify-between gap-4">
              <div>
                <label htmlFor="brand" className="hidden">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Brand"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
              <div>
                <label htmlFor="model" className="hidden">
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
            </div>

            <div className="flex  w-full justify-between gap-4">
              <div>
                <label htmlFor="year" className="hidden">
                  Year
                </label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  placeholder="Year"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
              <div>
                <label htmlFor="color" className="hidden">
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  placeholder="Color"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
            </div>
            <div className="flex  w-full justify-between gap-4">
              <div>
                <label htmlFor="price" className="hidden">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
              <div>
                <label htmlFor="image" className="hidden">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  placeholder="Image"
                    className="  w-full appearance-none  focus:outline-none focus:ring-0  peer file:mr-4 file:py-2 file:px-4 
            file:rounded-full file:border-0
            file:text-sm file:font-semibold rounded-md
            file:bg-orange-100 file:text-primary"
                />
              </div>
            </div>
            {/* features */}
            <div className="flex gap-4 justify-between flex-wrap">
              <input
                type="text"
                name="start"
                id="start"
                placeholder="Start Type"
                className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
              />
              <input
                type="text"
                name="engine"
                id="engine"
                placeholder="Engine"
                className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
              />
              <input
                type="text"
                name="distance"
                id="distance"
                placeholder="Distance per day"
                className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
              />
            </div>
            <div>
              <label htmlFor="description" className="hidden">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
              />
            </div>
            <div className="flex justify-end">
              <Button title="Add" className="text-white" />
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddBikeDrawer;
