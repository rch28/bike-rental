import { successResponse } from "@/Auth/types/common";
import { LoginVerifySchemaType } from "@/Auth/types/LoginVerifySchema";
import UserServices from "@/services/UserServices";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useLoginVerifySubmit = () => {
  const router = useRouter();
  const { register, handleSubmit, setError, setValue, formState } =
    useFormContext<LoginVerifySchemaType>();

  const onSubmit: SubmitHandler<LoginVerifySchemaType> = async (data) => {
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await UserServices.verifyLoginOtp(data);
          resolve(response);
        } catch (error) {
          if (error instanceof AxiosError && error.response?.data?.detail) {
            const errMsg = error?.response?.data?.detail;
            setError("otp", {
              type: "manual",
              message: errMsg,
            });
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
      loading: "Sending OTP...",
      success: (data) => {
        router.push("/");
        sessionStorage.removeItem("email");
        return data.success || "OTP verified!";
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

export default useLoginVerifySubmit;
