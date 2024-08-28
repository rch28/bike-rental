"use client";
import useDarkMode from "@/lib/UseDarkMode";
import { Moon, Sun } from "lucide-react";
import React from "react";

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full relative  dark:shadow-sm  shadow-md  flex justify-center items-center shadow-gray-500  dark:hover:bg-neutral-900 cursor-pointer "
    >
      {theme === "dark" ? (
        <Sun
          size={16}
          className=" text-white hover:animate-spin hover:text-yellow-200"
        />
      ) : (
        <Moon size={16} className=" text-black hover:animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;
