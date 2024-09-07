import React from "react";
import { Blog } from "../global/Blog";

export const  OurBlog =()=> {
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
  return (
    <div className=" my-16 py-12">
      <header className="w-full text-center  font-bold text-neutral-800">
        <span className="uppercase text-primary ">Our Blog</span>
        <h1 className="text-5xl ">
          Latest News & <span className="text-primary  ">Blog</span>
        </h1>
      </header>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 ">
        {blogInfo.map((blog) => (
          <Blog
          key={blog.id}
          title={blog.title}
          description={blog.description}
          date={blog.date}
          image={blog.image}
        />

        ))}
      </div>
    </div>
  );
}
