"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  defaultForgotPasswordValues,
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "../types/ForgotPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ForgotPassword from "./ForgotPassword";

const ForgotPasswordProvider = ({ mode }: { mode: string }) => {
  const methods = useForm<ForgotPasswordSchemaType>({
    mode: "all",
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: defaultForgotPasswordValues,
  });
  return (
    <FormProvider {...methods}>
      <ForgotPassword mode={mode} />
    </FormProvider>
  );
};

export default ForgotPasswordProvider;
