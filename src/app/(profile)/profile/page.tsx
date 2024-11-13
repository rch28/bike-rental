import UserMainContent from "@/User/Components/UserMainContent";
import UserNav from "@/User/Components/UserNav";
import UserSidebar from "@/User/Components/UserSidebar";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="h-screen px-4">
      {/* nav */}
      <UserNav />
      <div className="grid grid-cols-5 mt-4">
        <UserSidebar />
        <UserMainContent />
      </div>
    </div>
  );
};

export default ProfilePage;
