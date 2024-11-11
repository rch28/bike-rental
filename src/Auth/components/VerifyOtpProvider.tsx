"use client";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  defaultOtpVerifyValues,
  VerifyOtpSchema,
} from "../types/LoginVerifySchema";
import VerifyOtp from "./VerifyOtp";

const VerifyOtpProvider = () => {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(VerifyOtpSchema),
    defaultValues: defaultOtpVerifyValues,
  });
  return (
    <FormProvider {...methods}>
      <VerifyOtp />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default VerifyOtpProvider;
