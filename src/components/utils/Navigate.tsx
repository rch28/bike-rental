"use client";

import { useRouter } from "next/navigation";
import { LuUndoDot } from "react-icons/lu";

const Navigate = ({ path }: { path?: string }) => {
  const router = useRouter();
  const handleClick = () => {
    if (path) {
      router.push(path);
    } else {
      // navigate to -1
      router.back();
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 bg-primary my-2 rounded-md hover:scale-105"
      >
        <LuUndoDot size={20} color="white" />
      </button>
    </>
  );
};

export default Navigate;
