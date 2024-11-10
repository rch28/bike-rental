"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import RHFTextField from "../../components/RHFComponents/RHFTextField";
import Loading from "@/components/utils/Loading";
import useLoginVerifySubmit from "@/hooks/useLoginVerifySubmit";
import { LoginVerifySchemaType } from "../types/LoginVerifySchema";
const VerifyOtp: React.FC = () => {
  const {
    handleSubmit,
    onSubmit,
    setValue,
    formState: { isSubmitting },
  } = useLoginVerifySubmit();
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
        <RHFTextField<LoginVerifySchemaType> name="email" label="Email" />
        <RHFTextField<LoginVerifySchemaType>
          type="number"
          name="otp"
          label="Otp"
        />

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
