"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RHFTextField from "../../components/RHFComponents/RHFTextField";
import Loading from "@/components/utils/Loading";
import RHFNumberField from "@/components/RHFComponents/RHFNumberField";
import { useSearchParams } from "next/navigation";
import { VerifyOtpSchemaType } from "../types/LoginVerifySchema";
import useVerifyOtpSubmit from "@/hooks/useVerifyOtpSubmit";

const VerifyOtp = () => {
  const searchParams = useSearchParams();
  const verifyOtp = searchParams.get("verifyOtp");
  const forgotPassword = searchParams.get("forgotPassword");
  const [verifyLoginOtpMode, setVerifyLoginOtpMode] = useState(true);
  const {
    handleSubmit,
    onSubmit,
    setValue,
    formState: { isSubmitting },
  } = useVerifyOtpSubmit(verifyLoginOtpMode);
  useEffect(() => {
    setVerifyLoginOtpMode(true);
    if (verifyOtp && forgotPassword) {
      setVerifyLoginOtpMode(false);
    }
  }, [verifyOtp, forgotPassword]);
  useEffect(() => {
    const email = sessionStorage.getItem("email");
    if (email) {
      setValue("email", email);
    }
  }, [setValue]);
  return (
    <>
      <form
        className="flex flex-col gap-4 mt-4 p-4 pt-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Username field */}
        <RHFTextField<VerifyOtpSchemaType> name="email" label="Email" />
        <RHFNumberField<VerifyOtpSchemaType> name="otp" label="Otp" />

        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-3 rounded-lg font-bold text-lg  flex justify-center
              ${
                isSubmitting
                  ? "bg-black/40 text-white"
                  : "bg-primary text-white"
              }
            `}
          >
            {isSubmitting ? <Loading msg="Sending.." /> : "Send"}
          </button>
        </div>

        {/* Sign In Button */}
        <div className="">
          <span className="inline-flex text-gray-700 dark:text-gray-400 text-sm  ">
            Don't have an account yet?
          </span>
          <Link
            href="/auth/register"
            className="underline italic text-sm text-primary pl-1 font-bold"
          >
            {" "}
            Register
          </Link>
        </div>
      </form>
    </>
  );
};

export default VerifyOtp;
