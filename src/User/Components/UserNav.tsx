"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { UserProfile } from "../types/userTypes";
import { FaRegUser } from "react-icons/fa";
import Loading from "@/components/utils/Loading";
import { useUserStore } from "@/store/userStore";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import UserServices from "@/services/UserServices";

const UserNav = () => {
  // const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const { setEmail } = useUserStore((state) => ({
    setEmail: state.setEmail,
  }));
  const userId = Cookies.get("user_id") as string;
  const { data, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => await UserServices.fetchUserData(userId),
    enabled: !!userId,
    select: (data) => data,
  });

  useEffect(() => {
    if (data) {
      setEmail(data?.email);
    }
  }, [data]);

  if (isLoading) <Loading />;
  return (
    <div className=" p-4 border-b border-orange-400">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {data && data?.profile_picture ? (
            <div>
              <Image
                src={data?.profile_picture as string}
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
              {data?.first_name} {data?.last_name}
            </h1>
            <p className="text-sm">
              <span className="text-green-500">
                {data?.is_active ? "Active" : "Inactive"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
