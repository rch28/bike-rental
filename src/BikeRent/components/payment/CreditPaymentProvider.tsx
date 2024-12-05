"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CreditPaymentForm from "./CreditPaymentForm";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreditPaymentSchema,
  defaultCreditPayment,
} from "@/BikeRent/types/CreditPaymentSchema";

const CreditPaymentProvider = () => {
  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(CreditPaymentSchema),
    defaultValues: defaultCreditPayment,
  });
  return (
    <FormProvider {...methods}>
      <CreditPaymentForm />
    </FormProvider>
  );
};

export default CreditPaymentProvider;
