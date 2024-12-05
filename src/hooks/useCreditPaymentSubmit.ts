import { CreditPaymentType } from "@/BikeRent/types/CreditPaymentSchema";
import { SubmitHandler, useFormContext } from "react-hook-form";

const useCreditPaymentSubmit = () => {
  const { handleSubmit, formState } = useFormContext<CreditPaymentType>();

  const onSubmit: SubmitHandler<CreditPaymentType> = (data) => {
    console.log("Credit Payment Form Submitted");
    console.log("data", data);
  };
  return {
    handleSubmit: handleSubmit(onSubmit),
    formState,
  };
};

export default useCreditPaymentSubmit;
