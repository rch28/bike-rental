import UserProvider from "@/User/Components/UserProvider";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <div className="">
        <h1 className="text-xl p-2  shadow-[0px_4px_2px_-2px_rgba(0,0,0,0.1)]">
          Profile
        </h1>
        <UserProvider />
      </div>
    </>
  );
};

export default ProfilePage;
