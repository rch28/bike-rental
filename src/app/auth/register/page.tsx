import { loginImage, SignUpBg } from "@/assets";
import Register from "@/Auth/components/Register";
import SignupProvider from "@/Auth/components/SignupProvider";
import Layout from "@/components/global/Layout";
import Image from "next/image";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="relative mb-16">
      <div className=" h-screen w-full overflow-hidden">
        <Image src={SignUpBg} className="  w-full h-full object-cover" alt="" />
      </div>
      <div className=" w-full h-full absolute top-0">
        <Layout>
          {/* Register */}
          <div className="flex gap-4 w-fit md:max-w-4xl  mx-auto   my-10 lg:my-8  bg-pink-200 p-6 rounded-xl">
            <div className="flex-1 hidden md:flex justify-center items-center border-r-2 border-orange-500">
              <Image
                src={loginImage}
                className="  w-full h-full object-cover mr-4"
                alt=""
              />
            </div>
            <div className="md:flex-1">
              <p className=" text-center text-gray-800 text-xl font-semibold">
                Create an account to get started
              </p>
              <SignupProvider />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default SignUpPage;
