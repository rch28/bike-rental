"use client";
import useDarkMode from "@/lib/UseDarkMode";
import { Moon, Sun } from "lucide-react";
import React from "react";

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-full relative  dark:shadow-sm text-xl shadow-md   flex justify-center items-center shadow-gray-500 cursor-pointer gap-1 border border-gray-600 "
    >
      {theme === "dark" ? (
        <Sun
          size={15}
          className=" text-white hover:animate-spin hover:text-yellow-200"
        />
      ) : (
        <Moon size={15} className=" text-black hover:animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;
