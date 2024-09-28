"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BikeEdit = () => {
  const { id } = useParams();
  const [bike, setBike] = useState<Bike>()
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bike/retrieve/${id}/`)
            console.log(response);
            if(response.ok){
                const result = await response.json()
                setBike(result)
            }

        } catch (error) {
            console.log(error);
        }
      };
      fetchData()
    }
  }, [id]);
  console.log(bike);
  return <div>
   <form action="" className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
    <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input type="text" name="name" id="name" value={bike?.name} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">Rating</label>
        <input type="text" name="rating" id="rating" value={bike?.rating} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image</label>
        <img src={bike?.image} alt="" />
    </div>
    <div className="mb-4">
        <label htmlFor="start" className="block text-gray-700 font-medium mb-2">Start</label>
        <input type="text" name="start" id="start" value={bike?.features?.start} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    <div className="mb-4">
        <label htmlFor="engine" className="block text-gray-700 font-medium mb-2">Engine</label>
        <input type="text" name="engine" id="engine" value={bike?.features?.engine} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    <div className="mb-4">
        <label htmlFor="distance" className="block text-gray-700 font-medium mb-2">Distance</label>
        <input type="text" name="distance" id="distance" value={bike?.features?.distance} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Price</label>
        <input type="text" name="price" id="price" value={bike?.price} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
</form>

     </div>;
};

export default BikeEdit;
