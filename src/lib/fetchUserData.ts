"use server"

import { cookies } from "next/headers";

const cookieStore = cookies()
const access_token = cookieStore.get("access_token")?.value;


// fetch user
export const fetchUserData = async (userId:string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/user/retrieve/${userId}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };