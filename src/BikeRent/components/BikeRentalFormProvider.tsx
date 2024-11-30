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
      <div className="shadow-md shadow-gray-400">
        <h2 className="bg-primary text-white text-xl  p-4 rounded-t-md">
          Rent a Bike
        </h2>
        <BikeRentalForm />
      </div>
    </FormProvider>
  );
};

export default BikeRentalFormProvider;
