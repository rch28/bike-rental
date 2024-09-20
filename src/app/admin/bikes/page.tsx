"use client"

import { useEffect, useState } from "react";

const AdminBikesPage = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(()=>{
        const fetchBikes = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bike/lists/`);
            const data = await response.json();
            setBikes(data);
        };
        fetchBikes()
    },[])
  return (
    <div>AdminBikesPage</div>
  )
}

export default AdminBikesPage