"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  defaultFPVerifyValues,
  FPVerifySchema,
  FPVerifySchemaType,
} from "../types/FPVerifySchema";
import FPVerify from "./FPVerify";

const FPVerifyProvider = () => {
  const methods = useForm<FPVerifySchemaType>({
    mode: "all",
    resolver: zodResolver(FPVerifySchema),
    defaultValues: defaultFPVerifyValues,
  });
  return (
    <FormProvider {...methods}>
      <FPVerify />
    </FormProvider>
  );
};

export default FPVerifyProvider;
