"use client";

import { Bike as BikeComponent } from "@/components/global/Bike";
import { useEffect, useState } from "react";

const AdminBikesPage = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/bike/lists/`
        );
        const data = await response.json();
        setBikes(data?.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBikes();
  }, []);
  console.log(bikes);
  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 place-items-center md:grid-cols-3 xl:grid-cols-4 gap-4">
        {bikes?.map((bike, index) => (
          <BikeComponent key={index} bike={bike} admin={true} />
        ))}
      </div>
    </div>
  );
};

export default AdminBikesPage;
