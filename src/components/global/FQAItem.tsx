"use client";
import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa6";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

export const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-md  my-4 p-4 transition-all ease-linear duration-500">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-4 items-center ">
          <span className="w-10 h-10 bg-primary text-white grid place-items-center  rounded-md">
            <FaQuestion />
          </span>
          <span
            className={`text-xl font-bold  ${
              isOpen ? "text-primary " : "text-gray-900"
            } `}
          >
            {question}
          </span>
        </div>
        {isOpen ? (
          <LuChevronUp className="h-6 w-6 text-primary" />
        ) : (
          <LuChevronDown className="h-6 w-6 text-primary" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-[max-height] ease-in-out duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 "
        }`}
      >
        <div className="mt-2 text-gray-600 border-t border-primary py-2">
          {answer}
        </div>
      </div>
    </div>
  );
};
