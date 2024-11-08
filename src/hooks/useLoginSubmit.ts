import { LoginSchemaType } from "@/Auth/types/LoginSchema";
import { SubmitHandler, useFormContext } from "react-hook-form";

const useLoginSubmit = () => {
  const { register, handleSubmit, formState } =
    useFormContext<LoginSchemaType>();

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    console.log(data);
  };
  return { register, handleSubmit, formState, onSubmit };
};

export default useLoginSubmit;
