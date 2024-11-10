import { LoginSchemaType } from "@/Auth/types/LoginSchema";
import { SubmitHandler, useFormContext } from "react-hook-form";

const useLoginVerifySubmit = () => {
  const { register, handleSubmit, setError, setValue, formState } =
    useFormContext<LoginSchemaType>();

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    console.log(data);
  };

  return { register, handleSubmit, onSubmit, setValue, setError, formState };
};

export default useLoginVerifySubmit;
