"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../utils/Button";
import AddBikeDrawer from "./AddBikeDrawer";
import { useStore } from "@/store/store";

const BikeTab = () => {
  const pathname = usePathname();
  const { toggleAddBikeDrawer, setToggleAddBikeDrawer } = useStore();
  const handleClick = () => {
    setToggleAddBikeDrawer(true);
  };
  return (
    <nav className="flex justify-between items-center mr-6 ">
      <h1 className="text-3xl font-semibold px-2 ">Our Bike list</h1>
      <Button
        title="Add New Bike"
        onClick={handleClick}
        className="text-white"
      />
      {toggleAddBikeDrawer && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-end">
          <AddBikeDrawer />
        </div>
      )}
    </nav>
  );
};

export default BikeTab;
