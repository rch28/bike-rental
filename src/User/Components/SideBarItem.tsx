"use client";
import Link from "next/link";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { sidebarItem } from "../types/sidebar";
import { usePathname } from "next/navigation";

const SideBarItem = ({ item }: { item: sidebarItem }) => {
  const [showSubMenu, setShowSubMenu] = useState(true);

  const pathname = usePathname();
  const handleClick = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <div className="">
      <div
        className={`p-2 rounded-md hover:bg-blue-100  ${
          pathname === item?.path && "bg-blue-200"
        } `}
      >
        {item?.path ? (
          <Link href={item?.path} className="text-sm font-semibold ">
            {item.title}
          </Link>
        ) : (
          <div
            onClick={handleClick}
            className="text-sm font-semibold  flex justify-between items-center cursor-pointer"
          >
            <span>{item.title}</span>
            <span>
              {showSubMenu ? (
                <LuChevronUp size={20} />
              ) : (
                <LuChevronDown size={20} />
              )}
            </span>
          </div>
        )}
      </div>
      <div
        className={`transition-all duration-400  overflow-hidden ${
          showSubMenu ? "max-h-screen" : "max-h-0"
        }`}
      >
        {item?.subList?.map((subItem) =>
          subItem.path ? (
            <Link
              href={subItem.path}
              key={subItem._id}
              className={`text-sm p-2 rounded-md font-medium pl-6 block hover:bg-blue-100 ${
                pathname === item?.path && "bg-blue-200"
              }`}
            >
              {subItem.title}
            </Link>
          ) : (
            <div
              key={subItem._id}
              className="text-sm p-2 font-medium rounded-md pl-6"
            >
              {subItem.title}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SideBarItem;
