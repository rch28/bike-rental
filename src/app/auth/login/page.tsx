"use client";
import { SignUpBg } from "@/assets";
import { defaultLoginValues, LoginSchema } from "@/Auth/types/LoginSchema";
import Login from "@/components/Auth/Login";
import Layout from "@/components/global/Layout";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const LoginPage = () => {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(LoginSchema),
    defaultValues: defaultLoginValues,
  });
  return (
    <div className="relative  mb-16">
      <div className=" h-screen w-full overflow-hidden">
        <Image src={SignUpBg} className="  w-full h-full object-cover" alt="" />
      </div>
      <div className=" w-full h-full absolute top-0">
        <Layout>
          {/* Register */}
          <div className="max-w-lg mx-auto my-20">
            <div className="bg-pink-100 p-6 rounded-xl">
              <h1 className="text-4xl text-primary font-bold text-center tracking-widest">
                Login
              </h1>
              <p className="text-center text-gray-500">Login to your account</p>
              <FormProvider {...methods}>
                <Login />
                <DevTool control={methods.control} />
              </FormProvider>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default LoginPage;
