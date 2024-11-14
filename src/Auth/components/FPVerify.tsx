"use client";
import RHFTextField from "@/components/RHFComponents/RHFTextField";
import { ForgotPasswordSchemaType } from "../types/ForgotPasswordSchema";
import Link from "next/link";
import Loading from "@/components/utils/Loading";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useFPVerifySubmit from "@/hooks/useFPVerifySubmit";

const FPVerify = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const {
    handleSubmit,
    onSubmit,
    setValue,
    formState: { isSubmitting },
  } = useFPVerifySubmit();
  useEffect(() => {
    if (email) {
      setValue("email", email);
    }
  }, [email, setValue]);
  return (
    <>
      <form
        className="flex flex-col gap-4 mt-4 p-4 pt-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RHFTextField<ForgotPasswordSchemaType> name="email" label="Email" />

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
            Don&apos;t have an account yet?
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

export default FPVerify;
