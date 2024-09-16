"use client";

import AdminNavbar from "@/components/Admin/AdminNavbar";
import AdminSideBar from "@/components/Admin/AdminSideBar";
import Footer from "@/components/global/Footer";
import Layout from "@/components/global/Layout";
import Navbar from "@/components/global/Navbar";
import { Style } from "@/lib/Style";
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
        <div>
          <div>
            <div className="flex">
              <AdminSideBar />
              <div className="flex-1 flex flex-col">
                 <AdminNavbar />
                <main className="flex-1">{children}</main>
                <footer
                  className={` w-full border-t border-neutral-400 dark:border-neutral-700  p-2`}
                >
                    <Footer />
                  
                </footer>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="h-3 w-full bg-primary"></div>
          <main className="flex-1">{children}</main>
          <footer
            className={` w-full border-t border-neutral-400 dark:border-neutral-700 ${Style.bgPrimary} p-2`}
          >
            <Layout>
                    <Footer />
                  </Layout>
          </footer>
        </>
      )}
    </div>
  );
};

export default Main;
