import { NextResponse } from "next/server";
import type {NextRequest} from 'next/server';
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./lib/route";

const SECRET_KEY = new TextEncoder().encode(
  process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET
);

export async function middleware(request:NextRequest) {
  const { nextUrl } = request;
  const response = NextResponse.next();

  let userLoggedIn = false;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublic = isPublicRoute(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  if (isApiAuthRoute) {
    return response;
  }
 
  if (isAuthRoute) {
    if (userLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!userLoggedIn && !isPublic) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  function isPublicRoute(url:string) {
    return publicRoutes.some((route:any) => {
      if (typeof route === "string") {
        return route === url;
      } else if (route instanceof RegExp) {
        return route.test(url);
      }
      return false;
    });
  }
  return;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
