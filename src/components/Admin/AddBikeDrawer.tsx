"use client";
import { useStore } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { LuXCircle } from "react-icons/lu";
import { Button } from "../utils/Button";

const AddBikeDrawer = () => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const { toggleAddBikeDrawer, setToggleAddBikeDrawer } = useStore();

  const [formValue, setFormValue] = useState({
    name: "",
    rating: "",
    brand: "",
    model: "",
    year: "",
    color: "",
    price: "",
    image: "",
    start: "SELF_START_ONLY",
    engine: "",
    distance: "",
    description: "",
  });

  const handleClickOutside = (e: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      setToggleAddBikeDrawer(false);
    }
  };

  useEffect(() => {
    if (toggleAddBikeDrawer) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submited", formValue);
  };
  return (
    <AnimatePresence>
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
          <form className="p-4 pt-0 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2  w-full gap-4">
              <div>
                <label htmlFor="name" className="hidden">
                  Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
                  id="name"
                  value={formValue.name}
                  onChange={(e) =>
                    setFormValue({ ...formValue, name: e.target.value })
                  }
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
                  autoComplete="off"
                  name="rating"
                  value={formValue.rating}
                  onChange={(e) =>
                    setFormValue({ ...formValue, rating: e.target.value })
                  }
                  id="rating"
                  placeholder="Rating"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
            </div>
            <div className="grid grid-cols-2  w-full gap-4">
              <div>
                <label htmlFor="brand" className="hidden">
                  Brand
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="brand"
                  value={formValue.brand}
                  onChange={(e) =>
                    setFormValue({ ...formValue, brand: e.target.value })
                  }
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
                  autoComplete="off"
                  name="model"
                  value={formValue.model}
                  onChange={(e) =>
                    setFormValue({ ...formValue, model: e.target.value })
                  }
                  id="model"
                  placeholder="Model"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-2  w-full gap-4">
              <div>
                <label htmlFor="year" className="hidden">
                  Year
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="year"
                  value={formValue.year}
                  onChange={(e) =>
                    setFormValue({ ...formValue, year: e.target.value })
                  }
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
                  autoComplete="off"
                  name="color"
                  value={formValue.color}
                  onChange={(e) =>
                    setFormValue({ ...formValue, color: e.target.value })
                  }
                  id="color"
                  placeholder="Color"
                  className="w-full border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
                />
              </div>
            </div>
            <div className="grid grid-cols-2  w-full gap-4">
              <div>
                <label htmlFor="price" className="hidden">
                  Price
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="price"
                  value={formValue.price}
                  onChange={(e) =>
                    setFormValue({ ...formValue, price: e.target.value })
                  }
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
                  autoComplete="off"
                  name="image"
                  value={formValue.image}
                  onChange={(e) =>
                    setFormValue({ ...formValue, image: e.target.value })
                  }
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
            <div className="grid  gap-4 grid-cols-2">
              <select
                name="start"
                id="start"
                value={formValue.start}
                className=" border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700 w-full"
                onChange={(e) =>setFormValue({ ...formValue, start: e.target.value })}
              >
                <option value="SELF_START_ONLY">Self Start Only</option>
                <option value="KICK_AND_SELF_START">Kick & Self Start</option>
                <option value="KICK_START_ONLY">Kick Start Only</option>
              </select>
              
              <input
                type="text"
                autoComplete="off"
                name="engine"
                value={formValue.engine}
                onChange={(e) =>
                  setFormValue({ ...formValue, engine: e.target.value })
                }
                id="engine"
                placeholder="Engine"
                className=" border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
              />
              <input
                type="text"
                autoComplete="off"
                name="distance"
                value={formValue.distance}
                onChange={(e) =>
                  setFormValue({ ...formValue, distance: e.target.value })
                }
                id="distance"
                placeholder="Distance per day"
                className=" border  border-neutral-500 rounded-md px-4 py-2 focus:outline-none text-neutral-700"
              />
            </div>
            <div>
              <label htmlFor="description" className="hidden">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formValue.description}
                onChange={(e) =>
                  setFormValue({ ...formValue, description: e.target.value })
                }
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
