"use client";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { defaultSignupValues, SignupSchema } from "../types/SignupSchema";
import Register from "./Register";

const SignupProvider = () => {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(SignupSchema),
    defaultValues: defaultSignupValues,
  });
  return (
    <FormProvider {...methods}>
      <Register />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default SignupProvider;
