"use client";

import { useStore } from "@/store/store";
import { Button } from "../utils/Button";
import { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import ProfileDropdown from "./ProfileDropdown";
import { fetchUserData } from "@/lib/fetchUserData";
import { FaRegUser } from "react-icons/fa6";
const ProfileAvatar = () => {
  const [mount, setMount] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const [userData, setUserData] = useState<userData | null>(null);

  const isLogged = useStore((state) => state.isLogged);
  const setLogged = useStore((state) => state.setLogged);

  const userLoggedIn = Cookies.get("user_logged_in") === "true" ? true : false;

  const userId = Cookies.get("user_id");

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        const data = await fetchUserData(userId);
        setUserData(data);
      };

      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    if (userLoggedIn) {
      setLogged(true);
    } else {
      setLogged(false);
    }

    setMount(true);
  }, [userLoggedIn]);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount)
    return (
      <div className=" mx-2 w-10 h-10 cursor-pointer rounded-full shadow-md shadow-gray-400" />
    );

  return (
    <div className=" mx-4 relative">
      {isLogged ? (
        <button
          onClick={() => setProfileToggle(!profileToggle)}
          className=" grid place-content-center w-10 h-10 lg:w-12 lg:h-12 cursor-pointer rounded-full shadow-md shadow-gray-500"
        >
          {userData && userData?.profile_picture ? (
            <Image
              src={userData?.profile_picture}
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

      {profileToggle && isLogged && userData && (
        <div className="absolute top-14 right-0 bg-white dark:bg-gray-800 shadow-md rounded-md p-2">
          <ProfileDropdown
            setProfileToggle={setProfileToggle}
            userData={userData}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
