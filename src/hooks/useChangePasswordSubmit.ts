import { successResponse } from "@/Auth/types/common";
import UserServices from "@/services/UserServices";
import { ChangePasswordSchemaType } from "@/User/types/changePasswordSchema";
import { AxiosError } from "axios";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useChangePasswordSubmit = () => {
  const { handleSubmit, formState } =
    useFormContext<ChangePasswordSchemaType>();

  const onSubmit: SubmitHandler<ChangePasswordSchemaType> = async (data) => {
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await UserServices.changePassword(data);
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
      loading: "Updating...",
      success: (response) => {
        return response?.success || "Password Change successfully!";
      },
      error: (err) => err,
    });
  };
  return {
    handleSubmit,
    formState,
    onSubmit,
  };
};

export default useChangePasswordSubmit;
