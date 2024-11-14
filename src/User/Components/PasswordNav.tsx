"use client";
import { useUserStore } from "@/store/userStore";
import { Button } from "@mui/material";

import React from "react";

const PasswordNav = () => {
  const { setShowChangePassword, showChangePassword } = useUserStore(
    (state) => ({
      setShowChangePassword: state.setShowChangePassword,
      showChangePassword: state.showChangePassword,
    })
  );
  return (
    <div className="flex justify-between items-center text-xl p-2  shadow-[0px_4px_2px_-2px_rgba(0,0,0,0.1)]">
      <h1 className="font-bold">Password</h1>
      <Button
        variant="outlined"
        className="!text-black  !text-xs md:!text-sm  !capitalize "
        onClick={() => setShowChangePassword(!showChangePassword)}
      >
        Change Password
      </Button>
    </div>
  );
};

export default PasswordNav;
