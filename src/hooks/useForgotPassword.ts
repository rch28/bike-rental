import { successResponse } from "@/Auth/types/common";
import { ForgotPasswordSchemaType } from "@/Auth/types/ForgotPasswordSchema";
import UserServices from "@/services/UserServices";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useForgotPassword = () => {
  const router = useRouter();

  const { handleSubmit, formState } =
    useFormContext<ForgotPasswordSchemaType>();

  const onSubmit: SubmitHandler<ForgotPasswordSchemaType> = async (data) => {
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await UserServices.forgotPassword(data);
          console.log(response);
          resolve(response);
        } catch (error) {
          console.log("error", error);
          if (error instanceof AxiosError && error.response?.data) {
            const errMsg = error?.response?.data;
            reject(errMsg?.error || errMsg?.detail);
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
        let msg;
        if (response?.otp_created_at) {
          sessionStorage.setItem("email", data.email);
          msg = response?.success || "OTP sent to your email!";
          router.push("/auth/login?verifyOtp=true");
        } else {
          msg = response?.success || "Login successful!";
          router.push("/");
        }
        return msg;
      },
      error: (err) => err,
    });
  };

  return { onSubmit, handleSubmit, formState };
};

export default useForgotPassword;
