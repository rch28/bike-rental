import UserNav from "@/User/Components/UserNav";
import UserSidebar from "@/User/Components/UserSidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" ">
      {/* nav */}
      <UserNav />
      <div className="grid grid-cols-10">
        <UserSidebar />
        <div className=" col-span-10  sm:col-span-6 md:col-span-7 lg:col-span-8 bg-blue-200 p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
