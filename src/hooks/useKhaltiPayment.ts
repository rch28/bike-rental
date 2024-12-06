import {
  defaultKhaltiValue,
  KhaltiSchema,
} from "@/BikeRent/types/KhaltiSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useKhaltiPayment = () => {
  const { handleSubmit, setValue, formState } = useForm({
    mode: "onChange",
    resolver: zodResolver(KhaltiSchema),
    defaultValues: defaultKhaltiValue,
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    handleSubmit: handleSubmit(onSubmit),
    formState,
    setValue,
  };
};

export default useKhaltiPayment;
