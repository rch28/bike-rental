import { About } from "@/assets";
import { AboutUs } from "@/components/global/AboutUs";
import FAQComponent from "@/components/global/FQAComponent";
import Layout from "@/components/global/Layout";
import { Process } from "@/components/global/Process";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Aboutpage = () => {
  return (
    <div>
      <div className="h-96 overflow-hidden relative">
        <Image
          src={About}
          alt="About"
          className="h-full w-full object-cover "
        />
        <div className="absolute top-0 left-0 h-full w-screen bg-black/40  flex items-center">
          <div className=" ml-24 space-y-3 ">
            <h1 className="text-5xl text-white font-bold  ">About Us</h1>
            {/* <div className="bg-primary flex  font-bold rounded-xl px-6 w-fit  py-4 text-white">
              <Link href={"/"} className="hover:text-black">
                Home
              </Link>
              <span className="mx-2">//</span>
              <span>About Us</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Description */}
      <Layout>
        <AboutUs />
      </Layout>

      {/* Process */}
      <Process />

      {/* FQA's*/}

      <Layout>
        <FAQComponent />
      </Layout>
    </div>
  );
};

export default Aboutpage;
