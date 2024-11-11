import { LoginSchemaType } from "@/Auth/types/LoginSchema";
import configureAxios from "./axiosConfig";
import { SignupSchemaType } from "@/Auth/types/SignupSchema";
import { getCookies } from "./getCookies";
import { VerifyOtpSchemaType } from "@/Auth/types/LoginVerifySchema";
import { FPVerifySchemaType } from "@/Auth/types/FPVerifySchema";
import { ForgotPasswordSchemaType } from "@/Auth/types/ForgotPasswordSchema";

const requests = configureAxios();

const UserServices = {
  registerUser: (data: SignupSchemaType) => {
    return requests.post("/auth/register/user/", data);
  },
  loginUser: (data: LoginSchemaType) => {
    return requests.post("/auth/login/user/", data);
  },

  // verify otp
  verifyOtp: (data: VerifyOtpSchemaType, isloginOtpMode: boolean) => {
    return requests.post(
      `/auth/${isloginOtpMode ? "login/user" : "forgot-password"}/verify-otp/`,
      data
    );
  },

  // logout user
  logoutUser: async () => {
    return requests.post("/auth/logout/user/", {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookies()}`,
    });
  },
  // Forgot password verify
  FPVerify: (data: FPVerifySchemaType) => {
    return requests.post("/auth/forgot-password/", data);
  },
  // Forgot password verify
  forgotPassword: (data: ForgotPasswordSchemaType) => {
    return requests.post("/auth/forgot-password/change-password/", data);
  },

  // get user data
  fetchUserData: async (userId: string) => {
    return requests.get(`/auth/user/retrieve/${userId}/`, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getCookies()}`,
    });
  },
};

export default UserServices;
