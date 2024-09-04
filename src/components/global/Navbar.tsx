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
import { MdMenu } from "react-icons/md";
import { Navlinks } from "@/lib/Navlink";
import Logo from "./Logo";
import ContactNumber from "./ContactNumber";

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
      className={`sticky top-0 left-0 z-50  bg-gradient-to-r from-blue-200 to-pink-100   `}
    >
      <div className=" flex  justify-between  relative items-center h-24 ">
        <div className="realtive w-80">
          <Logo />
        </div>
        <div className="flex items-center  w-full  justify-end mr-16   ">
          {/* NavItems */}
          <ul
            className={ ` hidden md:flex gap-4 justify-center items-center border-gray-100 dark:border-gray-700   md:flex-row    `}
          >
            {Navlinks.map((item, index) => {
              let isActive = pathname === item.url;
              return (
                <Link
                  href={item.url}
                  key={index}
                  className={`cursor-pointer ${
                    isActive
                      ? " text-primary dark:md:text-primary  font-bold "
                      : `hover:text-primary  font-semibold text-black/80 `
                  }   dark:text-white/80 font-bold  transition-colors duration-300 ease-linear  text-lg `}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center ">
            {/* Contact Number */}
            <ContactNumber />
            <button className=" px-4 py-3  bg-orange-600 flex justify-center items-center rounded-lg text-white font-bold">
              Explore Bikes
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MdMenu
            className="text-2xl dark:text-white/80 text-black  transition ease-linear duration-500 md:hidden"
            onClick={() => setNavToggle(!navToggle)}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
