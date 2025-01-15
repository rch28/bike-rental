import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { CgGitCommit } from "react-icons/cg";
import { FaPlay } from "react-icons/fa6";
import Image from "next/image";
import { LogoTransparent } from "@/assets";

const Footer = () => {
  return (
    <div>
      {/* upper section */}

      <div className="flex flex-col md:flex-row  gap-6 py-6  ">
        {/* Logo and Description */}
        <div className="  flex-1 w-full space-y-5  mb-6 md:mb-0">
          <h2 className="max-w-80 text-3xl  font-bold  p-4 text-center rounded-md uppercase  text-white  bg-primary">
            With My Bike
          </h2>
          {/* <Image src={LogoTransparent} alt="logo" className="bg-primary max-w-80  rounded-lg" /> */}
          <p className=" max-w-80 text-neutral-700">
            If you plan to holiday and looking for a bike on rent, reserve
            online of your choice today and make your holiday memorable.
          </p>
        </div>

        <div className="  flex flex-1 w-full  md:flex-row md:mx-5 ">
          {/* Quick Links */}
          <div className="w-full  mb-6 md:mb-0">
            <h3 className="font-bold mb-3">Quick links</h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex gap-2 items-center hover:translate-x-3 transition-all duration-500 ease-in-out hover:text-primary ">
                <FaPlay className="text-primary" />
                <Link href="/about" className="hover:text-primary ">
                  About Us
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:translate-x-3 transition-all duration-500 ease-in-out hover:text-primary ">
                <FaPlay className="text-primary" />
                <Link href="/contact" className="hover:text-primary ">
                  Contact Us
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:translate-x-3 transition-all duration-500 ease-in-out hover:text-primary ">
                <FaPlay className="text-primary" />
                <Link href="/terms-condition" className="hover:text-primary ">
                  Terms & Conditions
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:translate-x-3 transition-all duration-500 ease-in-out hover:text-primary ">
                <FaPlay className="text-primary" />
                <Link href="/privacy-policy" className="hover:text-primary ">
                  Privacy policy
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:translate-x-3 transition-all duration-500 ease-in-out hover:text-primary ">
                <FaPlay className="text-primary" />
                <Link href="/privacy-policy" className="hover:text-primary ">
                  Cancellation policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Related pages */}
          <div className="w-full  mb-6 md:mb-0">
            <h3 className="font-bold mb-3">Related Pages</h3>
            <ul className=" text-neutral-700 space-y-3">
              <li className="flex gap-2 items-center hover:translate-x-3 transition-all duration-500 ease-in-out hover:text-primary ">
                <FaPlay className="text-primary" />
                <Link href="/bike-on-rent" className="hover:text-primary ">
                  Bikes
                </Link>
              </li>

              <li className="flex gap-2 items-center hover:translate-x-3 transition-all duration-500 ease-in-out hover:text-primary ">
                <FaPlay className="text-primary" />
                <Link href="/blog" className="hover:text-primary ">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="text-xs md:text-sm text-black font-mono sm:text-center dark:text-gray-300 flex justify-end flex-col-reverse gap-2 md:flex-row items-center border-t  border-gray-400 pt-2">
        <div className="">
          © {new Date().getFullYear()}{" "}
          <Link href="" className="hover:underline">
            WithMyBike™
          </Link>
          . All Rights Reserved.
        </div>
        <div className="flex  mx-2 space-x-3 sm:justify-center sm:mt-0 items-center">
          <Link
            href="#"
            className="p-1.5 text-primary  bg-white rounded-full relative  dark:shadow-sm  shadow-md  flex justify-center items-center shadow-gray-500  cursor-pointer "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link
            href="#"
            className="p-1.5 text-primary  bg-white rounded-full relative  dark:shadow-sm  shadow-md  flex justify-center items-center shadow-gray-500  cursor-pointer "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span className="sr-only">Discord community</span>
          </Link>
          <Link
            href="#"
            className="p-1.5 text-primary  bg-white rounded-full relative  dark:shadow-sm  shadow-md  flex justify-center items-center shadow-gray-500  cursor-pointer "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Twitter page</span>
          </Link>
          <div>
            <CgGitCommit size={24} className="text-gray-600  " />
          </div>
          <div className="mx-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
