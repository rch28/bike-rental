"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  defaultRentFormSearch,
  RentFormSearchSchema,
  RentFormSearchSchemaType,
} from "../types/RentFormSearchSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { RentBikeForm } from "./RentBikeForm";

export const RentSearchFormProvider = () => {
  const methods = useForm<RentFormSearchSchemaType>({
    mode: "all",
    resolver: zodResolver(RentFormSearchSchema),
    defaultValues: defaultRentFormSearch,
  });
  return (
    <FormProvider {...methods}>
      <div className="relative h-auto  lg:min-h-[450px] md:min-h-[400px] xs:min-h-[400px] min-h-[600px] xl:min-h-[300px]">
        <div className="px-6 py-4 h-full bg-white rounded-xl shadow-sm shadow-neutral-400 absolute -top-6 md:-top-12 lg:-top-8 xl:-top-14 w-full">
          <h1 className="py-4 text-3xl  md:text-4xl font-bold">
            {" "}
            Let&apos;s Find Your Perfect Bike
          </h1>

          <RentBikeForm />
        </div>
      </div>
    </FormProvider>
  );
};
