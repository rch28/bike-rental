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
import { Button } from "../utils/Button";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState("translate-x-full");
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

  const closeNavbar = () => {
    setNavbarWidth("translate-x-full");
    setTimeout(() => {
      setShowNavbar(false);
    }, 300);
  };
  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky top-0 left-0 z-50  bg-gradient-to-r from-blue-200 to-pink-100   `}
    >
      <div className=" flex  justify-between  relative items-center h-14 md:h-20 lg:h-24 transition-all ease-linear duration-100 ">
        <div className="realtive md:w-80">
          <Logo />
        </div>
        <div className="flex items-center  w-full  justify-end    ">
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

            {/* Explore Bikes */}
            <Button title="Explore Bikes" path="/bike-on-rent" className="text-white" />
          </div>
          <div className=" mx-4">
            <Button title="Login" path="/login"  className="py-1.5  lg:py-[10px] hidden md:flex rounded-md lg:rounded-xl text-white "/>
          </div>
        </div>

        {/* Mobile navigation */}
            <MobileNavigation  showNavBar={showNavbar} navbarWidth={navbarWidth} closeNavbar={closeNavbar}  />

        <div className="flex items-center gap-2  mr-6">
          <MdMenu
            className="text-3xl dark:text-white/80 text-black  transition ease-linear duration-500 md:hidden"
            onClick={() => {
              setShowNavbar(!showNavbar)
              setNavbarWidth("translate-x-0");
            }}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
