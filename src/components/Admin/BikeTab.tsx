"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../utils/Button";

const BikeTab = () => {
  const pathname = usePathname();

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
      <Button  title="Add New Bike" className="text-white" />
    </nav>
  );
};

export default BikeTab;
