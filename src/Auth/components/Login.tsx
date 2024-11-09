import Link from "next/link";
import React from "react";
import useLoginSubmit from "@/hooks/useLoginSubmit";
import RHFTextField from "../../components/RHFComponents/RHFTextField";
import { LoginSchemaType } from "@/Auth/types/LoginSchema";
import Loading from "@/components/utils/Loading";
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
        <div className="flex justify-end items-center text-sm mt-2 text-gray-600 font-medium">
          <Link
            href="/auth/forgot-password"
            className="underline hover:text-primary/75"
          >
            Forgot Password?
          </Link>
        </div>

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
            {isSubmitting ? <Loading msg="Loging in.." /> : "Login"}
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
