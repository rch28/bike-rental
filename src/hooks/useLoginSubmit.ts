import { LoginSchemaType } from "@/Auth/types/LoginSchema";
import UserServices from "@/services/UserServices";
import { AxiosError } from "axios";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useLoginSubmit = () => {
  const { register, handleSubmit, setError, formState } =
    useFormContext<LoginSchemaType>();

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    const newPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await UserServices.loginUser(data);
        console.log(response);

        resolve(response?.success);
      } catch (error: unknown) {
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
    });
    await toast.promise(newPromise, {
      loading: "Logging in...",
      success: (data: unknown) => {
        window.location.href = "/";
        return data ? `${data}` : "Login successful!";
      },
      error: (err) => err,
    });
  };
  return { register, handleSubmit, formState, onSubmit };
};

export default useLoginSubmit;
