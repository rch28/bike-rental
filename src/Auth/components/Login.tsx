"use client";
import Link from "next/link";
import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import useLoginSubmit from "@/hooks/useLoginSubmit";
import RHFTextField from "../../components/RHFComponents/RHFTextField";
import { LoginSchemaType } from "@/Auth/types/LoginSchema";
const Login: React.FC = () => {
  const {
    handleSubmit,
    onSubmit,
    formState: { isSubmitting },
  } = useLoginSubmit();
  return (
    <>
      <form
        className="flex flex-col gap-4 mt-4 p-4 pt-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Username field */}
        <RHFTextField<LoginSchemaType> name="email" label="Email" />
        <RHFTextField<LoginSchemaType>
          type="password"
          name="password"
          label="Password"
        />
        {/* Forgot Password */}
        {/* TODO : Forget button */}

        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-3 rounded-lg font-bold text-lg 
              ${
                isSubmitting
                  ? "bg-black/40 text-white"
                  : "bg-primary text-white"
              }
            `}
          >
            {isSubmitting ? (
              <span>
                {" "}
                <AutorenewIcon className="animate-spin" /> Login In ...
              </span>
            ) : (
              "Login"
            )}
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

export default Login;
