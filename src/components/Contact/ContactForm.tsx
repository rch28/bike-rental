import { GetInTouch } from '@/assets';
import Image from 'next/image';
import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa6';

const ContactForm = () => {
  return (
    <div className="md:flex gap-8">
      {/* Left side with the image */}
      <div className=" flex-1 my-4 ">
        <Image

          src={GetInTouch}
          alt="Contact Us"
          className="rounded-r-full object-cover w-full h-full"
        />
      </div>

      {/* Right side with the form */}
      <div className=" flex-1 my-4  bg-pink-100 rounded-md p-6 ">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6 text-gray-500 font-medium text-base">
          Get in touch with us with our following numbers and enjoy the quality service
          of Just My Bike.
        </p>

        <form className="space-y-4">
          <div className="flex  gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <input
            type="text"
            placeholder="Your Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Write Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className=" relative px-[22px] py-[10px] overflow-hidden min-w-20 bg-primary flex justify-center items-center text-white rounded-xl  font-medium hover:text-white   before:absolute before:w-0 before:h-0 before:bg-orange-500 before:transition-all before:ease-linear before:duration-300 hover:before:w-60 hover:before:h-60 before:rounded-full "
          >
            <span  className="relative z-10">Send Message</span>
            <span  className="relative z-10 pl-4 text-sm ">
                <FaRegPaperPlane/>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
