import { Navlinks } from "@/lib/Navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { FaX } from "react-icons/fa6";
import { Button } from "../utils/Button";

interface MobileNavigationProps {
  navbarWidth: string;
  closeNavbar: () => void;
  showNavBar: boolean;
}

const MobileNavigation = ({
  showNavBar,
  closeNavbar,
  navbarWidth,
}: MobileNavigationProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (showNavBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.removeEventListener("mousedown", closeNavbar);
    };
  }, [showNavBar]);
  return (
    <div
      className={`bg-black/30 backdrop-blur-[2px] h-[100vh] w-[100vw] fixed top-0 left-0 z-[9999] flex justify-end overflow-hidden lg:hidden ${
        showNavBar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeNavbar}
    >
      <div
        className={`h-full bg-white w-1/2 ${navbarWidth} duration-300 relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeNavbar} className="absolute left-4 top-4">
          <FaX className="text-primary-black w-6 h-6 hover:text-primary-button" />
        </button>

        <ul className="flex flex-col gap-8 pt-20">
          {Navlinks.map((route, index) => (
            <div key={index} className="px-6 ">
              <li
                className={`font-medium font-lexend text-base text-center py-4 ${
                  pathname === route.url ? "text-red-600" : "text-black"
                } hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-white  rounded-md`}
                onClick={closeNavbar}
              >
                <Link href={route.url}>{route.name}</Link>
              </li>
            </div>
          ))}
          <div className="px-6">
            <Button
              title="Login"
              path="/auth/login"
              className="py-1.5  lg:py-[10px] md:hidden rounded-md lg:rounded-xl text-white "
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
