import PasswordChangeProvider from "@/User/Components/passwordChangeProvider";
import PasswordNav from "@/User/Components/PasswordNav";
import React from "react";

const ChangePasswordPage = () => {
  return (
    <div>
      {/* nav */}
      <PasswordNav />
      <PasswordChangeProvider />
    </div>
  );
};

export default ChangePasswordPage;
