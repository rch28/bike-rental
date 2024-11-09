import React from "react";

import Link from "next/link";
import RHFTextField from "@/components/RHFComponents/RHFTextField";
import { SignupSchemaType } from "../types/SignupSchema";
import useSignupSubmit from "@/hooks/useSignupSubmit";
import Loading from "@/components/utils/Loading";

const Register: React.FC = () => {
  const {
    handleSubmit,
    onSubmit,
    formState: { isSubmitting },
  } = useSignupSubmit();
  return (
    <form className="flex flex-col  gap-4" onSubmit={handleSubmit(onSubmit)}>
      {/* username field */}
      <div className="flex flex-col md:flex-row gap-4 w-full mt-6 ">
        <RHFTextField<SignupSchemaType> name="first_name" label="First Name" />
        <RHFTextField<SignupSchemaType> name="last_name" label="Last Name" />
      </div>
      {/* Email field  */}
      <RHFTextField<SignupSchemaType> name="email" label="Email" />
      {/* Password Field */}
      <RHFTextField<SignupSchemaType>
        type="password"
        name="password"
        label="Password"
      />

      {/* Confirm Password Field */}
      <RHFTextField<SignupSchemaType>
        type="password"
        name="confirm_password"
        label="Confirm Password"
      />

      {/* buttons */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${
            isSubmitting
              ? "bg-gray-600 text-gray-500 cursor-not-allowed"
              : "bg-primary text-white"
          } w-full py-3 rounded-lg font-bold text-lg flex justify-center items-center`}
        >
          {isSubmitting ? <Loading msg="Creating .." /> : "Create Account"}
        </button>

        <div className=" py-4">
          <span className="inline-flex text-gray-700 dark:text-gray-400 text-sm  ">
            Already have an account?
          </span>
          <Link
            href="/auth/login"
            className="underline italic text-sm text-primary pl-1 font-bold"
          >
            {" "}
            login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
