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

const useEsewaPayment = () => {
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
    const sub = watch((data) => console.log(data));
    return () => sub.unsubscribe();
  }, [watch]);
  const submitEsewaForm = (
    formData: Record<string, any>,
    paymentUrl: string
  ) => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = paymentUrl;

    // Add all form fields from the response
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = String(value); // Convert all values to string
      form.appendChild(input);
    });

    // Append form to body, submit it, and then remove it
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };
  const onSubmit: SubmitHandler<PaymentSchemaType> = async (data) => {
    const newPromise: Promise<string> = new Promise(async (resolve, reject) => {
      try {
        const response = await RentBikeServices.initiateEsewaPayment(data);
        if (response?.payment_url && response?.form_data) {
          // goTo(response?.payment_url);
          submitEsewaForm(response.form_data, response.payment_url);
          resolve("Redirecting to Esewa Payment Gateway");
        } else {
          reject("Invalid response from payment initialization");
        }
      } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.detail) {
          console.log("error", error);
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

export default useEsewaPayment;
