"use client";

import { Style } from "@/lib/Style";
import Logo from "../global/Logo";
import ProfileAvatar from "../global/ProfileAvatar";
import { IoMenu } from "react-icons/io5";
import { useStore } from "@/store/store";
import Link from "next/link";
import { TbArrowBack } from "react-icons/tb";
const AdminNavbar = () => {
  const translateSideBar = useStore((state) => state.translateSiderbar);
  const setTranslateSiderbar = useStore((state) => state.setTranslateSiderbar);

  const handleToggleSideBar = () => {
    if (translateSideBar === "-translate-x-full") {
      setTranslateSiderbar("translate-x-0");
    } else {
      setTranslateSiderbar("-translate-x-full");
    }
    console.log(translateSideBar);
  };
  return (
    <>
      <nav
        className={` py-2 z-50 w-full  ${Style.bgPrimary} border-b border-blue-200 flex justify-between items-center`}
      >
        <Link href="/" className="mx-6 px-3 py-1 rounded-full space-x-2 flex items-center bg-white">
          <TbArrowBack className="w-5 h-5" /> <span>Back</span>
        </Link>
        <div className="flex items-center justify-center  w-40 md:hidden">
          <button className="">
            <IoMenu
              className="text-2xl text-gray-700 w-8 h-8"
              onClick={() => handleToggleSideBar()}
            />
          </button>
        </div>
        <ProfileAvatar />
      </nav>
    </>
  );
};

export default AdminNavbar;
