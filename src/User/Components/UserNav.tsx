"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { UserProfile } from "../types/userTypes";
import { FaRegUser } from "react-icons/fa";
import Loading from "@/components/utils/Loading";
import { useUserStore } from "@/store/userStore";

const UserNav = () => {
  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const me = localStorage.getItem("me");
  const { setEmail } = useUserStore((state) => ({
    setEmail: state.setEmail,
  }));
  useEffect(() => {
    if (me && !profileData) {
      setProfileData(JSON.parse(me));
    }
  }, [me, profileData]);
  useEffect(() => {
    if (profileData) {
      setEmail(profileData?.email);
    }
  }, [profileData]);
  if (!profileData) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className=" p-4 border-b border-orange-400">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {profileData && profileData?.profile_picture ? (
            <div>
              <Image
                src={profileData?.profile_picture as string}
                alt="profile"
                width={200}
                height={200}
                priority
                className="rounded-full w-12 h-12 drop-shadow-2xl object-cover "
              />
            </div>
          ) : (
            <FaRegUser className="w-6 h-6 text-gray-600" />
          )}
          <div className="ml-4">
            <h1 className="text-xl font-bold capitalize">
              {profileData?.first_name} {profileData?.last_name}
            </h1>
            <p className="text-sm">
              <span className="text-green-500">
                {profileData?.is_active ? "Active" : "Inactive"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
