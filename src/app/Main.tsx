"use client";

import Navbar from "@/components/global/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <div>
      {pathname.startsWith("/admin") ? (
        "Admin Navbar"
      ) : (
        <>
          <Navbar />
          <div className="h-3 w-full bg-primary"></div>
        </>
      )}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Main;
