import { NextResponse } from "next/server";
import type {NextRequest} from 'next/server';
import {
  adminPrefix,
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./lib/route";
import { verifyUser } from "./lib/auth";

const SECRET_KEY =   process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET


export async function middleware(request:NextRequest) {
  const { nextUrl } = request;
  const response = NextResponse.next();

  const access_token = request.cookies.get("access_token")?.value;
  const refresh_token = request.cookies.get("refresh_token")?.value;

  let userLoggedIn = false;
  let isSuperuser = false;
  if (access_token && refresh_token && SECRET_KEY) {
    const userData:any = await verifyUser(access_token, SECRET_KEY) ;
    console.log(userData);
    if (userData && userData?.user_id) {
      
      userLoggedIn = true;
      isSuperuser = userData.is_superuser
    }else{
      userLoggedIn = false;
    }
  }

  response.cookies.set('user_logged_in', userLoggedIn.toString(), {
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  });
  response.cookies.set('isSuperuser', isSuperuser.toString(), {
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
    sameSite: 'lax', 
    secure: process.env.NODE_ENV === 'production' 
  });

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublic = isPublicRoute(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAdminRoute = nextUrl.pathname.startsWith(adminPrefix);
  if (isApiAuthRoute) {
    return response;
  }
 
  if (isAuthRoute) {
    if (userLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return response;
  }

  if (isAdminRoute) {
    if (!userLoggedIn) {
      return NextResponse.redirect(new URL("/auth/login", nextUrl));
    }
    if (!isSuperuser) {
      return NextResponse.redirect(new URL("/", nextUrl)); 
    }
  } else if (!userLoggedIn && !isPublic) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
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
  return response;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
