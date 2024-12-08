import RentBikeServices from "@/services/RentBikeServices";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "./navigate";
import {
  defaultPaymentValue,
  PaymentSchemaType,
} from "@/BikeRent/types/PaymentSchema";

const useKhaltiPayment = () => {
  const { goTo } = useNavigate();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<PaymentSchemaType>({
    mode: "onSubmit",
    // resolver: zodResolver(PaymentSchema),
    defaultValues: defaultPaymentValue,
  });

  useEffect(() => {
    console.log(errors.root);
    const sub = watch((data) => console.log(data));
    return () => sub.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<PaymentSchemaType> = async (data) => {
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
