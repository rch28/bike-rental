import { LoginSchemaType } from "@/Auth/types/LoginSchema";
import configureAxios from "./axiosConfig";

const requests = configureAxios();

const UserServices = {
  registerUser: (data) => {
    return requests.post("/auth/register/user/", data);
  },
  loginUser: (data: LoginSchemaType) => {
    return requests.post("/auth/login/user/", data);
  },
};

export default UserServices;
