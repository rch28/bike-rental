import { loginImage, SignUpBg } from "@/assets";
import Layout from "@/components/global/Layout";
import Image from "next/image";
import React from "react";
import ForgotPasswordProvider from "@/Auth/components/ForgotPasswordProvider";
import FPVerifyProvider from "@/Auth/components/FPVerifyProvider";

type LoginPageProps = Promise<{
  [searchParams: string]: {
    verifyOtp?: boolean;
    forgotPassword?: boolean;
  };
}>;
const ForgotPasswordPage = async (props: { searchParams: LoginPageProps }) => {
  const { verifyOtp, forgotPassword } = await props.searchParams;
  return (
    <div className="relative  mb-16">
      <div className=" h-screen w-full overflow-hidden">
        <Image src={SignUpBg} className="  w-full h-full object-cover" alt="" />
      </div>
      <div className=" w-full h-full absolute top-0">
        <Layout>
          {/* Register */}
          <div className="flex gap-4  w-fit md:max-w-3xl  mx-auto my-20  bg-pink-200 p-6 rounded-xl">
            <div className="flex-1 hidden md:flex   justify-center items-center border-r-2 border-orange-500">
              <Image
                src={loginImage}
                className="  w-full h-full object-cover mr-4"
                alt=""
              />
            </div>
            {forgotPassword ? (
              <div className="md:flex-1  flex flex-col justify-center items-center ">
                <p className="text-center text-gray-800 text-2xl font-semibold">
                  Forgot Password
                </p>
                <FPVerifyProvider />
              </div>
            ) : (
              <div className="md:flex-1   ">
                <p className="text-center text-gray-800 text-2xl font-semibold">
                  Enter New Password
                </p>
                <ForgotPasswordProvider />
              </div>
            )}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
