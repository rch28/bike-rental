import RHFTextField from "@/components/RHFComponents/RHFTextField";
import { ForgotPasswordSchemaType } from "../types/ForgotPasswordSchema";
import Link from "next/link";
import Loading from "@/components/utils/Loading";
import { useSearchParams } from "next/navigation";
import useFPResetSubmit from "@/hooks/useFPResetSubmit";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";

const ForgotPassword = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const { email: storeEmail } = useUserStore((state) => ({
    email: state.email,
  }));
  const {
    handleSubmit,
    onSubmit,
    setValue,
    formState: { isSubmitting },
  } = useFPResetSubmit();
  if (email) {
    setValue("email", email);
  }
  useEffect(() => {
    if (storeEmail && !email) {
      setValue("email", storeEmail);
    }
  }, [storeEmail]);
  return (
    <>
      <form
        className="flex flex-col gap-4 mt-4 p-4 pt-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RHFTextField<ForgotPasswordSchemaType> name="email" label="Email" />

        <>
          <RHFTextField<ForgotPasswordSchemaType>
            name="new_password"
            label="New Password"
            type="password"
          />
          <RHFTextField<ForgotPasswordSchemaType>
            name="confirm_password"
            label="Confirm Password"
            type="password"
          />
        </>
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
        {!storeEmail && (
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
        )}
      </form>
    </>
  );
};

export default ForgotPassword;
