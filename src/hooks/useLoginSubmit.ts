import { successResponse } from "@/Auth/types/common";
import { LoginSchemaType } from "@/Auth/types/LoginSchema";
import UserServices from "@/services/UserServices";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useLoginSubmit = () => {
  const router = useRouter();
  const { register, watch, handleSubmit, setError, formState } =
    useFormContext<LoginSchemaType>();

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await UserServices.loginUser(data);
          if (response?.otp_created_at) {
            sessionStorage.setItem("email", data.email);
            await Promise.resolve(response);
            router.push("/auth/login?verifyOtp=true");
          } else if (response?.success) {
            await Promise.resolve(response);
            router.push("/");
          }
          resolve(response);
        } catch (error) {
          if (error instanceof AxiosError && error.response?.data?.detail) {
            const errMsg = error?.response?.data?.detail;
            setError("email", {});
            setError("password", {});
            reject(errMsg);
          } else if (error instanceof Error) {
            reject(error?.message);
          } else {
            reject("Network Error!!");
          }
        }
      }
    );
    await toast.promise(newPromise, {
      loading: "Logging in...",
      success: (response) => {
        const msg =
          response?.success ||
          (response?.otp_created_at
            ? "OTP sent to yoresponseur email!"
            : "Login successful!");

        return msg;
        return msg;
      },
      error: (err) => err,
    });
  };
  return { register, handleSubmit, watch, formState, onSubmit };
};

export default useLoginSubmit;
