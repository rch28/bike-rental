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
  console.log(toggleAddBikeDrawer);
  const handleClick = () => {
    setToggleAddBikeDrawer(true);
  };
  return (
    <nav className="flex justify-between items-center mr-6 mb-4">
      <ul className="flex items-center gap-4 rounded-lg bg-blue-200 py-2 px-4">
        <li
          className={
            pathname === "/admin/bikes" ? "bg-white px-4 py-1 rounded-lg" : ""
          }
        >
          <Link href="/admin/bikes">Bikes</Link>
        </li>
        <li
          className={
            pathname === "/admin/featured-bikes"
              ? "bg-white px-4 py-1 rounded-lg"
              : ""
          }
        >
          <Link href="/admin/featured-bikes">Featured Bikes</Link>
        </li>
      </ul>
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
