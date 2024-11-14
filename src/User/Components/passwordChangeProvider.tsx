"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  changePasswordSchema,
  ChangePasswordSchemaType,
  defaultChangePasswordValues,
} from "../types/changePasswordSchema";
import ChangePasswordForm from "./ChangePasswordForm";

const PasswordChangeProvider = () => {
  const methods = useForm<ChangePasswordSchemaType>({
    mode: "all",
    resolver: zodResolver(changePasswordSchema),
    defaultValues: defaultChangePasswordValues,
  });
  return (
    <FormProvider {...methods}>
      <ChangePasswordForm />
    </FormProvider>
  );
};

export default PasswordChangeProvider;
