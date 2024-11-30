"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  BikeRentFormSchema,
  BikeRentFormSchemaType,
  defaultBikeRentValue,
} from "../types/BikeRentFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import BikeRentalForm from "./BikeRentalForm";

const BikeRentalFormProvider = () => {
  const methods = useForm<BikeRentFormSchemaType>({
    mode: "all",
    defaultValues: defaultBikeRentValue,
    resolver: zodResolver(BikeRentFormSchema),
  });
  return (
    <FormProvider {...methods}>
      <BikeRentalForm />
    </FormProvider>
  );
};

export default BikeRentalFormProvider;
