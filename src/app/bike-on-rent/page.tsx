import BikeList from "@/Bikes/components/BikeList";
import SearchBikes from "@/Bikes/components/SearchBikes";
import Layout from "@/components/global/Layout";
import React from "react";

const BikeOnRentPage = () => {
  return (
    <div className="py-16">
      <Layout>
        <div>
          <header className="w-full text-center text-5xl font-bold text-neutral-800">
            <h1 className="text-primary">Bike On Rent</h1>
          </header>
          <SearchBikes />
          <BikeList />
        </div>
      </Layout>
    </div>
  );
};

export default BikeOnRentPage;
