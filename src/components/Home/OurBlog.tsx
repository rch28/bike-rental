"use client";
import React, { useEffect, useState } from "react";
import { Blog } from "../global/Blog";
import { useQuery } from "@tanstack/react-query";
import BlogService from "@/services/BlogService";
import Loading from "../utils/Loading";
import { BlogType } from "@/types/Blog";
import extractDateTime from "@/functions/ExtractDateTime";
import { usePathname } from "next/navigation";

export const OurBlog = () => {
  const [limit, setLimit] = useState(3);
  const pathname = usePathname();
  console.log("pathname", pathname);
  const blogInfo = [
    {
      id: 1,
      title: "There are many variations of the passages available suffered",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "12th March 2021",
      image:
        "https://c1.wallpaperflare.com/preview/386/67/744/royal-enfield-bullet-bike-motorcycle.jpg",
    },
    {
      id: 2,
      title: "There are many variations of the passages available suffered",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "12th March 2021",
      image:
        "https://c4.wallpaperflare.com/wallpaper/357/224/869/black-train-between-forest-wallpaper-preview.jpg",
    },
    {
      id: 3,
      title: "There are many variations of the passages available suffered",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "12th March 2021",
      image:
        "https://c1.wallpaperflare.com/preview/387/795/831/mountain-biking-alps-austria-innsbruck.jpg",
    },
  ];
  useEffect(() => {
    if (pathname === "/blog") {
      setLimit(10);
      console.log(10);
    } else if (pathname === "/") {
      setLimit(3);
      console.log(3);
    }
  }, [pathname, limit]);

  const { data: Blogs, isLoading } = useQuery({
    queryFn: async () => BlogService.getBlogs({ offset: 0, limit: limit }),
    queryKey: ["blogs", limit],
    select: (data) => data.results,
    refetchOnWindowFocus: false,
  });
  return (
    <div className=" my-16 py-12">
      <header className="w-full text-center  font-bold text-neutral-800">
        <span className="uppercase text-primary ">Our Blog</span>
        <h1 className="text-4xl  md:text-5xl ">
          Latest News & <span className="text-primary  ">Blog</span>
        </h1>
      </header>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 ">
        {isLoading ? (
          <Loading />
        ) : (
          Blogs?.map((blog: BlogType) => (
            <Blog
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              date={extractDateTime(blog.created_at)}
              image={blog.image || ""}
            />
          ))
        )}
      </div>
    </div>
  );
};
