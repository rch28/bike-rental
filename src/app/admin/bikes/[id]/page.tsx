"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BikeEdit = () => {
  const { id } = useParams();
  const [bike, setBike] = useState({})
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
  return <div>BikeEdit </div>;
};

export default BikeEdit;
