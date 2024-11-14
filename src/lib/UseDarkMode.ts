"use client";
import { useEffect, useState } from "react";
const useDarkMode = (): [string, () => void] => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    // const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    // console.log("initialTheme", initialTheme);
    // setTheme(initialTheme);
    document.documentElement.classList.add(savedTheme || "light");
    return () => {
      document.documentElement.classList.remove("light", "dark");
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return [theme, toggleTheme];
};

export default useDarkMode;
