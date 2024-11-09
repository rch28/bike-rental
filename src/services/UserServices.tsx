import { LoginSchemaType } from "@/Auth/types/LoginSchema";
import configureAxios from "./axiosConfig";
import { SignupSchemaType } from "@/Auth/types/SignupSchema";

const requests = configureAxios();

const UserServices = {
  registerUser: (data: SignupSchemaType) => {
    return requests.post("/auth/register/user/", data);
  },
  loginUser: (data: LoginSchemaType) => {
    return requests.post("/auth/login/user/", data);
  },
};

export default UserServices;
