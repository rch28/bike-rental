import { successResponse } from "@/Auth/types/common";
import { SignupSchemaType } from "@/Auth/types/SignupSchema";
import UserServices from "@/services/UserServices";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useSignupSubmit = () => {
  const router = useRouter();
  const { handleSubmit, formState, setError } =
    useFormContext<SignupSchemaType>();
  const onSubmit: SubmitHandler<SignupSchemaType> = async (data) => {
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await UserServices.registerUser(data);
          resolve(response?.success);
          router.push("/auth/login");
        } catch (error) {
          if (error instanceof AxiosError && error.response?.data) {
            const errMsg = error.response?.data;
            if (errMsg.email) {
              setError("email", {
                type: "manual",
                message: errMsg.email[0],
              });
              reject(errMsg.email[0]);
            } else {
              reject(error.response?.data?.detail);
            }
          } else if (error instanceof Error) {
            reject(error.message);
          } else {
            reject("Network Error!!");
          }
        }
      }
    );
    await toast.promise(newPromise, {
      loading: "Creating Account...",
      success: (data: unknown) => {
        return data ? `${data}` : "Account created successfully!";
      },
      error: (err) => err,
    });
  };
  return { handleSubmit, onSubmit, formState };
};

export default useSignupSubmit;
