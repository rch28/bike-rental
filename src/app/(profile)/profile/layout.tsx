import UserNav from "@/User/Components/UserNav";
import UserSidebar from "@/User/Components/UserSidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen px-4">
      {/* nav */}
      <UserNav />
      <div className="grid grid-cols-5 mt-4">
        <UserSidebar />
        <div className="col-span-4">{children}</div>
      </div>
    </div>
  );
};

export default layout;
