"use client";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  defaultLoginVerifyValues,
  LoginVerifySchema,
} from "../types/LoginVerifySchema";
import VerifyOtp from "./VerifyOtp";

const VerifyLoginOtpProvider = () => {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(LoginVerifySchema),
    defaultValues: defaultLoginVerifyValues,
  });
  return (
    <FormProvider {...methods}>
      <VerifyOtp />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default VerifyLoginOtpProvider;
