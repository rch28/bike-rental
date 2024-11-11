import { successResponse } from "@/Auth/types/common";
import { VerifyOtpSchemaType } from "@/Auth/types/LoginVerifySchema";
import UserServices from "@/services/UserServices";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useVerifyOtpSubmit = (isloginOtpMode: boolean) => {
  const router = useRouter();
  const { register, handleSubmit, setError, setValue, formState } =
    useFormContext<VerifyOtpSchemaType>();
  const onSubmit: SubmitHandler<VerifyOtpSchemaType> = async (data) => {
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await UserServices.verifyOtp(data, isloginOtpMode);
          resolve(response);
        } catch (error) {
          if (error instanceof AxiosError && error.response?.data) {
            const errMsg = error?.response?.data;
            setError("otp", {
              type: "manual",
              message: errMsg?.detail || errMsg?.error,
            });
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
        isloginOtpMode
          ? router.push("/")
          : router.push(`/auth/forgot-password?email=${data?.email}`);
        sessionStorage.removeItem("email");
        return response.success || "OTP verified!";
      },
      error: (error) => {
        setError("otp", {
          type: "manual",
          message: error,
        });
        return error;
      },
    });
  };

  return { register, handleSubmit, onSubmit, setValue, setError, formState };
};

export default useVerifyOtpSubmit;
