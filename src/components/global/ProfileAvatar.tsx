"use client";

import { useStore } from "@/store/store";
import { Button } from "../utils/Button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HeroImg } from "@/assets";
import Cookies from "js-cookie";
const ProfileAvatar = () => {
  const [mount, setMount] = useState(false);

  const isLogged = useStore((state) => state.isLogged);
  const setLogged = useStore((state) => state.setLogged);

  const userLoggedIn = Cookies.get("user_logged_in") === "true" ? true : false;
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
    <div className=" mx-4">
      {isLogged ? (
        <div className=" w-10 h-10 lg:w-12 lg:h-12 cursor-pointer rounded-full shadow-md shadow-gray-500">
          <Image
            src={HeroImg}
            alt="profile"
            width={100}
            height={100}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="">
          <Button
            title="Login"
            path="/auth/login"
            className="py-1.5  lg:py-[10px] hidden md:flex rounded-md lg:rounded-xl text-white "
          />
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
