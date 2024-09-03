"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { Menu } from "lucide-react";

import Layout from "./Layout";
import { Style } from "@/lib/Style";
import { Navlinks } from "@/lib/Navlink";
import Logo from "./Logo";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY }: { scrollY: MotionValue<number> } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (typeof latest === "number" && typeof previous === "number") {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky top-0 left-0 z-50  bg-gradient-to-r from-blue-200 to-pink-100  py-2   `}
    >
      <div className=" flex  justify-between items-center relative  ">
       
        <Logo />
        <div className="flex items-center justify-between ">
          {/* NavItems */}
          <ul
            className={`flex gap-4 justify-center items-center border-gray-100 dark:border-gray-700   md:flex-row  ${
              navToggle
                ? " flex-col absolute  dark:bg-black bg-slate-200 md:bg-transparent w-full border top-14 left-0 rounded-md py-5 "
                : "hidden md:flex "
            } md:relative md:border-none md:top-0  `}
          >
            {Navlinks.map((item, index) => {
              let isActive = pathname === item.url;
              return (
                <Link
                  href={item.url}
                  key={index}
                  className={`cursor-pointer ${
                    isActive
                      ? " md:text-orange-500 dark:md:text-orange-500 dark:md:bg-transparent md:bg-transparent  font-bold  bg-green-500 dark:bg-green-700  rounded-md text-white border-none "
                      : `hover:text-orange-400  font-semibold text-black/80 `
                  } border-b border-gray-700  w-11/12 text-left pl-4 md:pl-0 py-1  md:border-none  dark:text-white/80 font-bold  transition-colors duration-300 ease-linear   text-xl `}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {/* <div className="mx-4">
              <CartBox />
            </div>
           */}
          {/* <ProfileAvatar /> */}

          <Menu
            className="text-2xl dark:text-white/80 text-black  transition ease-linear duration-500 md:hidden"
            onClick={() => setNavToggle(!navToggle)}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
