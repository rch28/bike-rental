import Link from "next/link";
import React from "react";
import { MdDateRange } from "react-icons/md";
import { Button } from "../utils/Button";
import { FaArrowRight } from "react-icons/fa6";

export const Blog = ({
  title,
  description,
  date,
  image,
}: {
  title: string;
  description: string;
  date: string;
  image: string;
}) => {
  return (
    <div className="bg-pink-100 rounded-md shadow-xl p-4 m-4 group  ">
      <div className=" overflow-hidden rounded-md">
        <img
          src={image}
          alt="blog"
          className="w-full h-40 sm:h-48 object-cover rounded-md group-hover:scale-110 transition-all ease-linear duration-300"
        />
      </div>
      <p className="flex gap-2 items-center py-4">
        <MdDateRange className="text-primary pb-0.5 text-xl" />
        <span className="font-medium">{date}</span>
      </p>
      <div className="w-full">
        <Link
          href={`/blog/${title}`}
          className="text-lg md:text-xl font-bold  hover:text-primary cursor-pointer w-full block "
        >
          {title}
        </Link>
      </div>

      {/* Button */}
      <Button
        title="Read More"
        path={`/blog/${title}`}
        icon={<FaArrowRight />}
        className="text-white my-6  lg:py-3 w-40"
      />
    </div>
  );
};
