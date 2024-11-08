import { LoginType } from "@/types/loginType";
import configureAxios from "./axiosConfig";

const requests = configureAxios();

const UserServices = {
  registerUser: (data) => {
    return requests.post("/auth/register/user/", data);
  },
  loginUser: (data: LoginType) => {
    return requests.post("/auth/login/user/", data);
  },
};

export default UserServices;
