"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { RiDashboardLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type ProfileDropdownProps = {
  setProfileToggle: React.Dispatch<React.SetStateAction<boolean>>;
  userData: userData
};

const ProfileDropdown = ({
  setProfileToggle,
  userData,
}: ProfileDropdownProps) => {
  const [isSuperuser, setIsSuperuser] = useState(false);
  useEffect(()=>{
    const isSuperuser = Cookies.get("isSuperuser") === "true" ? true : false;
    setIsSuperuser(isSuperuser);
  },[])
  const router = useRouter();
  const handleLogout = () => {
    const newPromise = new Promise<string | undefined>(
      async (resolve, reject) => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/logout/user/`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (!response.ok) {
            if (data.error) {
              reject(data.error);
            } else if (data.detail) {
              reject(data.detail);
            } else {
              reject("Something went wrong");
            }
            return;
          }
          Cookies.remove("user_logged_in");
          Cookies.remove("isSuperuser");
          setProfileToggle(false);
          router.push("/");
          resolve(data.success);
        } catch (err: any) {
          reject(err.message);
        }
      }
    );

    toast.promise(newPromise, {
      loading: "Logging out...",
      success: (data) => {
        return data || "Login successful!";
      },
      error: (err) => {
        return err;
      },
    });
  };

  return (
    <div className="min-w-48 p-2">
      <div className="border-b border-gray-400">
        <h1 className="text-lg font-semibold text-neutral-800">
          <span className="pr-2">{userData.first_name}</span>
          <span>{userData.last_name}</span>
          </h1>
        <h3 className="text-sm text-gray-700">{userData.email}</h3>
      </div>

      <div className="mt-2  font-medium space-y-2 text-neutral-800">
        <div className="flex gap-2 items-center hover:text-primary">
          <FaRegUser className="pb-0.5" />
          <Link href="/profile" className="">
            Your Profile
          </Link>
        </div>
        {isSuperuser && (
          <div className="flex gap-2 items-center hover:text-primary">
            <RiDashboardLine className="pb-0.5" />
            <Link href="/admin/dashboard" className="">
              Dashboard
            </Link>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="flex gap-2 items-center hover:text-primary"
        >
          <CiLogout className="pb-0.5" />
          <span className="block">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
