"use client";

import { Style } from "@/lib/Style";
import Logo from "../global/Logo";
import ProfileAvatar from "../global/ProfileAvatar";

const AdminNavbar = () => {
  return (
    <>
      <nav className={ ` py-2 z-50 w-full  ${Style.bgPrimary} border-b border-blue-200 flex justify-end`}>
        <ProfileAvatar/>
      </nav>

     
    </>
  );
};

export default AdminNavbar;
