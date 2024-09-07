import {  SignUpBg } from "@/assets";
import Register from "@/components/Auth/Register";
import Layout from "@/components/global/Layout";
import Image from "next/image";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="relative mb-16">
      <div className=" h-screen w-full overflow-hidden">
        <Image
          src={SignUpBg}
          className="  w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className=" w-full h-full absolute top-0">
        <Layout>
          {/* Register */}
          <div className="max-w-lg mx-auto my-20">
            <div className="bg-pink-100 p-6 rounded-xl">
              <h1 className="text-4xl text-primary font-bold text-center tracking-widest">Sign Up</h1>
              <p className="text-center text-gray-500">
                Create an account to get started
              </p>
              <Register />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default SignUpPage;
