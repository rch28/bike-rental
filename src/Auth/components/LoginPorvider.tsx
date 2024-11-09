"use client";
import { defaultLoginValues, LoginSchema } from "@/Auth/types/LoginSchema";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Login from "./Login";

const LoginPorvider = () => {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(LoginSchema),
    defaultValues: defaultLoginValues,
  });
  return (
    <FormProvider {...methods}>
      <Login />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default LoginPorvider;
