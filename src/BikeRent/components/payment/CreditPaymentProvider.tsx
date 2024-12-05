"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CreditPaymentForm from "./CreditPaymentForm";

const CreditPaymentProvider = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <CreditPaymentForm />
    </FormProvider>
  );
};

export default CreditPaymentProvider;
