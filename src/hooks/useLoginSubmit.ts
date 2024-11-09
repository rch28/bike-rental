import { loginResponse } from "@/Auth/types/common";
import { LoginSchemaType } from "@/Auth/types/LoginSchema";
import UserServices from "@/services/UserServices";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useLoginSubmit = () => {
  const router = useRouter();
  const { register, handleSubmit, setError, formState } =
    useFormContext<LoginSchemaType>();

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    const newPromise: Promise<loginResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await UserServices.loginUser(data);
          console.log(response);
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
      success: (response: loginResponse) => {
        let msg;
        if (response?.otp_created_at) {
          msg = response?.success || "OTP sent to your email!";
          router.push("/auth/verify-otp");
        } else {
          msg = response?.success || "Login successful!";
          router.push("/");
        }
        return msg;
      },
      error: (err) => err,
    });
  };
  return { register, handleSubmit, formState, onSubmit };
};

export default useLoginSubmit;
