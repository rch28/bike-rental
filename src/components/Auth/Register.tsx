"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LuCheck, LuEye, LuEyeOff, LuX } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import toast from "react-hot-toast";

// password regex
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// Email Regex

const EMAIL_REGEX = /^[^\s@]{3,}@[^\s@]+\.[^\s@]+$/;
const Register: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  //   First Name state
  const [firstName, setFirstName] = useState("");

  //  Last Name state
  const [lastName, setLastName] = useState("");


  //   Email state
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [showEmailInfo, setShowEmailInfo] = useState(false);

  //   Password state
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);

  //   confirmPassword state
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [focusConfirmPassword, setFocusConfirmPassword] = useState(false);
  const [showConfirmInfo, setShowConfirmInfo] = useState(false);

  // show password state
  const [showPassword, setShowPassword] = useState(false);

  // show confirm password state
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //submit button enable state
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    userRef.current?.focus();
  }, []);



  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);

    const match = password === confirmPassword;
    setValidConfirmPassword(match);
  }, [password, confirmPassword]);

  useEffect(() => {
    if ( firstName && lastName && validPassword && validEmail && validConfirmPassword) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [
    validConfirmPassword,
    validPassword,
    validEmail,
    firstName,
    lastName


  ]);

  // show password click handler
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setTimeout(() => {
      if (passwordRef.current) {
        const length = passwordRef.current?.value.length;
        passwordRef.current?.focus();
        passwordRef.current?.setSelectionRange(length, length);
      }
    }, 0);
  };
  // show Confirm password click handler
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setTimeout(() => {
      if (confirmPasswordRef.current) {
        const length = confirmPasswordRef.current?.value.length;
        confirmPasswordRef.current?.focus();
        confirmPasswordRef.current?.setSelectionRange(length, length);
      }
    }, 0);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if button is some how enable
    const p = PWD_REGEX.test(password);
    if ( !p) {
      toast.error("Invalid credentials!");
      return;
    }

    const newPromise = new Promise<string | undefined>(async (resolve, reject) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/register/user/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              email:email,
              password:password,
            }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          router.push("/auth/login");
          resolve(data.success);
        } else {
          let error;
          if (data?.email) {
            error = data.email[0];
            emailRef.current?.focus();
          }else{
            error = data.detail;
          }
          reject(error);
        }
      } catch (error :any) {
        reject(error);
      }
    });

    toast.promise(newPromise, {
      loading: "Creating Account...",
      success: (data) => `${data}`,
      error: (error) => error,
    });
  };


  return (
    <form className="flex flex-col  gap-4" onSubmit={handleSubmit}>
      {/* username field */}
      <div className="flex flex-col md:flex-row gap-4 w-full mt-6 ">
        <div className="flex flex-col gap-1  w-full">
          <label
            htmlFor="firstName"
            className="flex justify-left gap-2  items-center relative"
          >
            First Name :
            <LuCheck
              className={firstName ? "text-green-500 text-2xl" : "hidden"}
            />
          </label>
          <input
            ref={userRef}
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="off"
            required
            aria-description="uidnote"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter firstName"
            className=" border border-black/50  text-gray-900 sm:text-sm rounded-lg   block w-full p-1.5 bg-transparent dark:border-white/40  dark:placeholder:text-white/60 dark:text-white   dark:focus:border-white px-3 focus:border-orange-500  focus:outline-none  placeholder:text-black/75 "
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="lastName"
            className="flex justify-left gap-2  items-center relative"
          >
            Last Name :
            <LuCheck
              className={lastName !=="" ? "text-green-500 text-2xl" : "hidden"}
            />
          
           
          </label>
          <input
            ref={userRef}
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="off"
            required
            aria-description="uidnote"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter lastName"
            className=" border border-black/50  text-gray-900 sm:text-sm rounded-lg   block w-full p-1.5 bg-transparent dark:border-white/40  dark:placeholder:text-white/60 dark:text-white   dark:focus:border-white px-3 focus:border-orange-500  focus:outline-none  placeholder:text-black/75 "
          />
        </div>
      </div>
      {/* Email field  */}
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="email"
          className="flex justify-left gap-2  items-center relative"
        >
          Email :{" "}
          <LuCheck
            className={validEmail ? "text-green-500 text-2xl" : "hidden"}
          />
          <LuX
            className={
              validEmail || !email ? "hidden" : "text-red-500 text-2xl"
            }
          />
          <span
            className={`cursor-pointer flex items-center justify-center absolute right-3 text-3xl  ${
              !validEmail && email
                ? "w-6 h-6 border-2 border-black dark:border-white rounded-full animate-pulse  "
                : "hidden"
            }`}
          >
            <FaInfoCircle
              title="Valid Info"
              className={``}
              onClick={() => {
                setShowEmailInfo(!showEmailInfo), setFocusEmail(true);
              }}
            />
          </span>
        </label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          required
          autoComplete="off"
          aria-invalid={validEmail ? "true" : "false"}
          aria-description="eidnote"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocusEmail(true)}
          onBlur={() => setFocusEmail(false)}
          placeholder="Your Email @gmail.com"
          className=" border border-black/50 text-gray-900 sm:text-sm rounded-lg   block w-full p-1.5 bg-transparent dark:border-white/40  dark:placeholder:text-white/60 dark:text-white  dark:focus:border-white px-3 focus:border-orange-500 focus:outline-none placeholder:text-black/75"
        />
        <p
          id="eidnote"
          className={`text-xs font-extrabold absolute right-10 md:-right-40 bg-white/80 p-3 rounded-md shadow-md shadow-gray-600 text-black -top-10 md:top-0 ${
            showEmailInfo && focusEmail && email && !validEmail
              ? "flex"
              : "hidden"
          }  `}
        >
          Invalid Email! <br />
          at least minimum 3 <br /> characters before @.
        </p>
      </div>
      {/* Password Field */}
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="password"
          className="flex justify-left gap-2  items-center relative"
        >
          Password :
          <LuCheck
            className={validPassword ? "text-green-500 text-2xl" : "hidden"}
          />
          <LuX
            className={
              validPassword || !password ? "hidden" : "text-red-500 text-2xl"
            }
          />
          <span
            className={`cursor-pointer flex items-center justify-center absolute right-3 text-3xl  ${
              !validPassword && password
                ? "w-6 h-6 border-2 border-black dark:border-white rounded-full animate-pulse  "
                : "hidden"
            }`}
          >
            <FaInfoCircle
              title="Valid Info"
              className={``}
              onClick={() => {
                setShowPasswordInfo(!showPasswordInfo), setFocusPassword(true);
              }}
            />
          </span>
        </label>

        <input
          ref={passwordRef}
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          required
          aria-invalid={validPassword ? "true" : "false"}
          aria-description="pidnote"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocusPassword(true)}
          onBlur={() => setFocusPassword(false)}
          placeholder="••••••••"
          className=" border border-black/50 text-gray-900 sm:text-sm rounded-lg   block w-full p-1.5 bg-transparent dark:border-white/40  dark:placeholder:text-white/60 dark:text-white  dark:focus:border-white px-3 focus:border-orange-500 focus:outline-none placeholder:text-black/75 "
        />
        {password && (
          <span
            onClick={handleShowPassword}
            className="cursor-pointer  absolute right-3 bottom-2"
          >
            {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
          </span>
        )}

        <p
          id="pidnote"
          className={`text-xs font-extrabold absolute right-10 md:-right-56 bg-white/80 p-3 rounded-md shadow-md shadow-gray-600 text-black -top-16 md:top-0 ${
            showPasswordInfo && focusPassword && password && !validPassword
              ? "inline-block"
              : "hidden"
          }  `}
        >
          8 to 24 characters. <br />
          Must include uppercase and <br />
          lowercase letters, a number <br /> and a special caharacter. <br />
          Allowed special characters:
          <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="hastag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
        </p>
      </div>
      {/* Confirm Password Field */}
      <div className="flex flex-col gap-1 relative">
        <label
          htmlFor="confirm-password"
          className="flex justify-left gap-2  items-center relative"
        >
          Confirm Password :
          <LuCheck
            className={
              validConfirmPassword && confirmPassword && validPassword
                ? "text-green-500 text-2xl"
                : "hidden"
            }
          />
          <LuX
            className={
              validConfirmPassword || !confirmPassword || validPassword
                ? "hidden"
                : "text-red-500 text-2xl"
            }
          />
          <span
            className={`cursor-pointer flex items-center justify-center absolute right-3 text-3xl  ${
              !validConfirmPassword && confirmPassword
                ? "w-6 h-6 border-2 border-black dark:border-white rounded-full animate-pulse  "
                : "hidden"
            }`}
          >
            <FaInfoCircle
              title="Valid Info"
              className={``}
              onClick={() => {
                setShowConfirmInfo(!showConfirmInfo),
                  setFocusConfirmPassword(true);
              }}
            />
          </span>
        </label>
        <input
          ref={confirmPasswordRef}
          type={showConfirmPassword ? "text" : "password"}
          name="confirm-password"
          id="confirm-password"
          required
          aria-invalid={validConfirmPassword ? "true" : "false"}
          aria-description="confirmidnote"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onFocus={() => setFocusConfirmPassword(true)}
          onBlur={() => setFocusConfirmPassword(false)}
          placeholder="••••••••"
          className=" border border-black/50 text-gray-900 sm:text-sm rounded-lg   block w-full p-1.5 bg-transparent dark:border-white/40  dark:placeholder:text-white/60 dark:text-white  dark:focus:border-white px-3 focus:border-orange-500 focus:outline-none placeholder:text-black/75"
        />
        {confirmPassword && (
          <span
            onClick={handleShowConfirmPassword}
            className="cursor-pointer absolute right-3 bottom-2"
          >
            {showConfirmPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
          </span>
        )}
        <p
          id="confirmidnote"
          className={`text-xs font-extrabold absolute right-10 md:-right-56 bg-white/80 p-3 rounded-md shadow-md shadow-gray-600 text-black top-0 ${
            showConfirmInfo &&
            focusConfirmPassword &&
            confirmPassword &&
            !validConfirmPassword
              ? "inline-block"
              : "hidden"
          }  `}
        >
          Must match the first password field
        </p>
      </div>
      {/* buttons */}
      <div>
        <button
          type="submit"
          disabled={disable}
          className={`${
            disable
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-primary text-white"
          } w-full py-3 rounded-lg font-bold text-lg `}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
