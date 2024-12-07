import {
  defaultKhaltiValue,
  KhaltiSchema,
  KhaltiSchemaType,
} from "@/BikeRent/types/KhaltiSchema";
import RentBikeServices from "@/services/RentBikeServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "./navigate";

const useKhaltiPayment = () => {
  const { goTo } = useNavigate();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<KhaltiSchemaType>({
    mode: "onSubmit",
    // resolver: zodResolver(KhaltiSchema),
    defaultValues: defaultKhaltiValue,
  });

  useEffect(() => {
    console.log(errors.root);
    const sub = watch((data) => console.log(data));
    return () => sub.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<KhaltiSchemaType> = async (data) => {
    const newPromise: Promise<string> = new Promise(async (resolve, reject) => {
      try {
        const response = await RentBikeServices.initiateKhaltiPayment(data);
        console.log("response", response);
        if (response?.status === 200) {
          goTo(response?.result?.payment_url);
          resolve("Redirecting to Khalti Payment Gateway");
        }
        resolve(response);
      } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.detail) {
          const errMsg = error?.response?.data?.detail;
          reject(errMsg);
        } else if (error instanceof Error) {
          reject(error?.message);
        } else {
          reject("Network Error!!");
        }
      }
    });

    await toast.promise(newPromise, {
      loading: "Loading..",
      success: (msg) => msg,
      error: (err) => err,
    });
  };
  return {
    handleSubmit: handleSubmit(onSubmit),
    setValue,
  };
};

export default useKhaltiPayment;
