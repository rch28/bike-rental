"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RHFTextField from "../../components/RHFComponents/RHFTextField";
import Loading from "@/components/utils/Loading";
import RHFNumberField from "@/components/RHFComponents/RHFNumberField";
import { useSearchParams } from "next/navigation";
import { VerifyOtpSchemaType } from "../types/LoginVerifySchema";
import useVerifyOtpSubmit from "@/hooks/useVerifyOtpSubmit";
import { successResponse } from "../types/common";
import UserServices from "@/services/UserServices";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const VerifyOtp = () => {
  const searchParams = useSearchParams();
  const verifyOtp = searchParams.get("verifyOtp");
  const forgotPassword = searchParams.get("forgotPassword");
  const [verifyLoginOtpMode, setVerifyLoginOtpMode] = useState(true);
  const [email, setEmail] = useState("");
  const {
    handleSubmit,
    onSubmit,
    setValue,
    setError,
    formState: { isSubmitting },
    otpExpired,
    setOtpExpired,
    setFocus,
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
      setEmail(email);
      setFocus("otp");
    }
  }, [setValue]);
  const handleResendLoginOtp = async () => {
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await UserServices.resendOtp({ email });
          resolve(response);
        } catch (error) {
          if (error instanceof AxiosError && error.response?.data) {
            const errMsg = error?.response?.data;
            reject(errMsg?.detail || errMsg?.error);
          } else if (error instanceof Error) {
            reject(error?.message);
          } else {
            reject("Network Error!!");
          }
        }
      }
    );
    await toast.promise(newPromise, {
      loading: "Sending OTP...",
      success: (response) => {
        setOtpExpired(false);
        setValue("otp", "");
        setError("otp", {});
        return response.success || "OTP sent to your email!";
      },
      error: (error) => {
        return error;
      },
    });
  };
  return (
    <>
      <form
        className="flex flex-col gap-4 mt-4 p-4 pt-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Username field */}
        <RHFTextField<VerifyOtpSchemaType> name="email" label="Email" />
        <RHFNumberField<VerifyOtpSchemaType> name="otp" label="Otp" />

        {/* Otp Expired */}
        {otpExpired && (
          <div className=" flex justify-end">
            <button type="button" onClick={handleResendLoginOtp}>
              <span className="text-primary hover:text-red-500 hover:underline">
                Resend OTP
              </span>
            </button>
          </div>
        )}
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
