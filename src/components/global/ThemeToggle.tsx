"use client";
import useDarkMode from "@/lib/UseDarkMode";
import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full relative  dark:shadow-sm  shadow-md  flex justify-center items-center shadow-gray-500  dark:hover:bg-neutral-900 cursor-pointer "
    >
      {theme === "dark" ? (
        <LuSun
          size={16}
          className=" text-white hover:animate-spin hover:text-yellow-200"
        />
      ) : (
        <LuMoon size={16} className=" text-black hover:animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;
