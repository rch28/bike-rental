import { Contact } from "@/assets";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import Layout from "@/components/global/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <div className="h-96 overflow-hidden relative">
        <Image
          src={Contact}
          alt="About"
          className="h-full w-full object-cover "
        />
        <div className="absolute top-0 left-0 h-full w-screen bg-black/40  flex items-center">
          <div className=" ml-4 md:ml-24 space-y-3 ">
            <h1 className="text-5xl text-white font-bold  ">Contact Us</h1>
            {/* <div className="bg-primary flex  font-bold rounded-xl px-6 w-fit  py-4 text-white">
              <Link href={"/"} className="hover:text-black">
                Home
              </Link>
              <span className="mx-2">//</span>
              <span>Contact Us</span>
            </div> */}
          </div>
        </div>
      </div>

      <Layout>
        {/* Contact Info */}
        <div className="my-24">
          <ContactInfo />
        </div>

        {/* Contact Form */}
        <div className=" my-6">
          <ContactForm />
        </div>
      </Layout>
    </div>
  );
};

export default ContactUsPage;
