import { FormProvider, useForm } from "react-hook-form";
import User from "../users/components/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import {
  bikeSchema,
  bikeType,
  defaultBikeValues,
} from "@/Bikes/types/bikeSchema";
const UserProvider = () => {
  const methods = useForm<bikeType>({
    mode: "all",
    resolver: zodResolver(bikeSchema),
    defaultValues: defaultBikeValues,
  });
  return (
    <FormProvider {...methods}>
      <User />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default UserProvider;
