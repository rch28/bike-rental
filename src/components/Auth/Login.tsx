"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import Cookies from 'js-cookie'
const Login: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // email usestate
  const [email, setEmail] = useState("");

  // password state
  const [password, setPassword] = useState("");

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  //   function to submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check if email and password are empty
    if (email === "") {
      userRef.current?.focus();
      return;
    }
    if (password === "") {
      passwordRef.current?.focus();
      return;
    }
    const newPromise = new Promise<string | undefined>(
      async (resolve, reject) => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login/user/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
              credentials: "include",
            }
          );
          
          const data = await response.json();
          if (!response.ok) {
            reject(data);
            return;
          }
          if (data?.otp_created_at) {
            localStorage.setItem("otp_created_at", data.otp_created_at);
            router.push("/auth/login/verify-otp");
          } else {
            Cookies.set('user_logged_in', "true", {
              path: '/',
              expires: 1, // 1 day
              sameSite: 'lax', 
              secure: process.env.NODE_ENV === 'production' 
            });
            router.push("/");
          }
          setEmail("");
          setPassword("");
          resolve(data.success);
        } catch (error) {
          console.log(error);
        }
      }
    );

    toast.promise(newPromise, {
      loading: "Logging in...",
      success: (data) => data || "Login successful!",
      error: (error) => {
        return error.detail || "Login failed!";
      },
    });
  };
  return (
    <>
      <form
        action=""
        className="flex flex-col gap-4 mt-4 p-4 pt-0"
        onSubmit={handleSubmit}
      >
        {/* Username field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-black/85 dark:text-white font-serif"
          >
            Email :
          </label>
          <input
            ref={userRef}
            type="email"
            id="email"
            name="email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="  border border-black/50  text-gray-900 sm:text-sm rounded-lg   block w-full p-1.5 bg-transparent dark:border-white/40 placeholder:text-black/45 px-3 dark:placeholder:text-white/60 dark:text-white   focus:border-orange-500 dark:focus:border-white focus:outline-none  "
          />
        </div>
        {/* Password Field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-black/85 dark:text-white font-serif"
          >
            Password :
          </label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="••••••••"
            className="  border border-black/50  text-gray-900 sm:text-sm rounded-lg   block w-full p-1.5 px-3 bg-transparent dark:border-white/40 placeholder:text-black/45 dark:placeholder:text-white/60 dark:text-white   dark:focus:border-white focus:border-orange-500  focus:outline-none  "
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className={`
              w-full py-3 bg-primary text-white rounded-lg font-bold text-lg `}
          >
            Login
          </button>
        </div>

        {/* Sign In Button */}
        <div className="">
          <span className="inline-flex text-gray-700 dark:text-gray-400 text-sm  ">
            Don't have an account yet?
          </span>
          <Link
            href="/auth/register"
            className="underline italic text-sm text-primary pl-1"
          >
            {" "}
            Register
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
