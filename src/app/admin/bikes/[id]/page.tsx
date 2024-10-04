"use client";

import { Style } from "@/lib/Style";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BikeEdit = () => {
  const { id } = useParams();
  const router = useRouter();
  const [bike, setBike] = useState<Bike>({
    name: "",
    rating: 0,
    image: "",
    features: {
      start: "",
      engine: "",
      distance: "",
    },
    price: 0.0,
  });

  // Fetch bike details by ID
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/bike/retrieve/${id}/`
          );
          if (response.ok) {
            const result = await response.json();
            setBike(result);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [id]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in bike.features) {
      setBike({
        ...bike,
        features: { ...bike.features, [name]: value },
      });
    } else {
      setBike({
        ...bike,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/bike/update/${id}/`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(bike),
          }
        );
        const result = await response.json();
        console.log("result", result);
        if (response.ok) {
          // Redirect or show success message
          // router.push("/bikes");
        } else {
          console.log("Failed to update the bike");
        }
      } catch (error) {
        console.log("Error updating bike:", error);
      }
    });
    toast.promise(newPromise, {
      loading: "Updating bike...",
      success: "Bike updated successfully",
      error: "Failed to update bike",
    });
  };

  return (
    <div className="mt-4">
      <h1 className="m-6 text-3xl font-semibold text-gray-700">Edit Bike</h1>
      <form
        onSubmit={handleSubmit}
        className={` p-6 bg-gray-200 shadow-md rounded-md`}
      >
        <div className="flex  justify-between gap-4">
          <div className="mb-4 flex-1">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={bike.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-medium mb-2"
            >
              Rating
            </label>
            <input
              type="text"
              name="rating"
              id="rating"
              value={bike.rating}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="mb-4 flex-1">
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Image
            </label>
            <img src={bike.image} alt="" />
            {/* Add a file input or let the user provide an image URL */}
            {/* <input
            type="text"
            name="image"
            id="image"
            value={bike.image}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          </div>
          <div className="mb-4 flex-1">
            <label
              htmlFor="start"
              className="block text-gray-700 font-medium mb-2"
            >
              Start
            </label>
            <input
              type="text"
              name="start"
              id="start"
              value={bike.features.start}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="mb-4 flex-1">
            <label
              htmlFor="engine"
              className="block text-gray-700 font-medium mb-2"
            >
              Engine
            </label>
            <input
              type="text"
              name="engine"
              id="engine"
              value={bike.features.engine}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              htmlFor="distance"
              className="block text-gray-700 font-medium mb-2"
            >
              Distance
            </label>
            <input
              type="text"
              name="distance"
              id="distance"
              value={bike.features.distance}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-between gap4">
          <div className="mb-4 flex-1">
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              value={bike.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1"></div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BikeEdit;
