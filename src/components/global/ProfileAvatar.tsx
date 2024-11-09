"use client";

import { useStore } from "@/store/store";
import { Button } from "../utils/Button";
import { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import ProfileDropdown from "./ProfileDropdown";
import { FaRegUser } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import UserServices from "@/services/UserServices";
const ProfileAvatar = () => {
  const [mount, setMount] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const isLogged = useStore((state) => state.isLogged);
  const setLogged = useStore((state) => state.setLogged);

  const userLoggedIn = Cookies.get("user_logged_in") === "true" ? true : false;

  const userId = Cookies.get("user_id") as string;
  const { data, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => UserServices.fetchUserData(userId),
    enabled: !!userId,
    select: (data) => data,
  });
  useEffect(() => {
    setLogged(true);
    localStorage.setItem("me", JSON.stringify(data));
  }, [data, userId]);

  useEffect(() => {
    if (userLoggedIn) {
      setLogged(true);
    } else {
      setLogged(false);
    }
    setMount(true);
  }, [userLoggedIn]);

  if (isLoading || !mount)
    return (
      <div className=" grid place-content-center w-10 h-10 lg:w-12 lg:h-12 cursor-pointer rounded-full shadow-md shadow-gray-500 mx-4">
        <FaRegUser className="w-6 h-6 text-gray-600" />
      </div>
    );

  return (
    <div className=" mx-4 relative">
      {isLogged ? (
        <button
          onClick={() => setProfileToggle(!profileToggle)}
          className=" grid place-content-center w-10 h-10 lg:w-12 lg:h-12 cursor-pointer rounded-full shadow-md shadow-gray-500"
        >
          {data && data?.profile_picture ? (
            <Image
              src={data?.profile_picture}
              alt="profile"
              width={100}
              height={100}
              className="rounded-full w-full h-full object-cover"
            />
          ) : (
            <FaRegUser className="w-6 h-6 text-gray-600" />
          )}
        </button>
      ) : (
        <div className="">
          <Button
            title="Login"
            path="/auth/login"
            className="py-1.5  lg:py-[10px] hidden md:flex rounded-md lg:rounded-xl text-white "
          />
        </div>
      )}

      {profileToggle && isLogged && data && (
        <div className="absolute top-14 right-0 bg-white dark:bg-gray-800 shadow-md rounded-md p-2">
          <ProfileDropdown
            setProfileToggle={setProfileToggle}
            userData={data}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
