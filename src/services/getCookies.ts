"use server";

import { cookies } from "next/headers";

export const getCookies = async () => {
  const cookieStore = await cookies();
  const access_token = cookieStore.get("access_token")?.value;
  return access_token;
};
