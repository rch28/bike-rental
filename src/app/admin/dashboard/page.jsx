"use client"

import { useState } from "react";

const DashboardPage = () => {
  const [navWidth, setNavWidth] = useState("-translate-x-full")
  const handleShowNavigation = () => {
      setNavWidth("translate-x-0")
  }
  return (
   <>
    Dashboard

   </>
  );
};

export default DashboardPage;
