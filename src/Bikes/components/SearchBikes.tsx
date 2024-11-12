"use client";

import { useBikeStore } from "@/store/bikeStore";
import { LuSearch } from "react-icons/lu";

const SearchBikes = () => {
  const { searchQuery, setSearchQuery } = useBikeStore((state) => ({
    searchQuery: state.searchQuery,
    setSearchQuery: state.setSearchQuery,
  }));
  return (
    <div className=" mt-12 relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Yout Favourite Bikes"
        className="w-full py-2 px-6 border bg-white/50 border-gray-400 rounded-md outline-none focus-within:border-primary/75"
      />
      <LuSearch size={28} className="absolute right-4 top-2  text-gray-500 " />
    </div>
  );
};

export default SearchBikes;
