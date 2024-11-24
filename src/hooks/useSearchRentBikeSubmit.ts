import { RentFormSearchSchemaType } from "@/BikeRent/types/RentFormSearchSchema";
import { SubmitHandler, useFormContext } from "react-hook-form";

const useSearchRentBikeSubmit = () => {
  const { handleSubmit, formState } =
    useFormContext<RentFormSearchSchemaType>();
  const onSubmit: SubmitHandler<RentFormSearchSchemaType> = (data) => {};
  return {
    handleSubmit: handleSubmit(onSubmit),
    formState,
  };
};

export default useSearchRentBikeSubmit;
