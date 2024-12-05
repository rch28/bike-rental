"use client";
import {
  esewaIcon,
  EsewaLogo,
  KhaltiIconColor,
  KhaltiIconWhite,
  KhaltiLogo,
} from "@/assets";
import { RentalResponse } from "@/BikeRent/types/BikeRentFormSchema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

type OnlinePaymentProps = {
  rentalDetails: RentalResponse;
};

const OnlinePayment = ({ rentalDetails }: OnlinePaymentProps) => {
  const totalamout = rentalDetails.total_amount;
  return (
    <>
      <Tabs defaultValue="credit" className="w-full">
        <TabsList className="grid w-96 grid-cols-3 h-16 bg-purple-200">
          <TabsTrigger value="credit" className="flex flex-col">
            <BsFillCreditCard2FrontFill className="text-blue-500 w-8 h-8" />
          </TabsTrigger>
          <TabsTrigger value="esewa">
            <Image
              src={esewaIcon}
              alt="esewa"
              width={24}
              height={24}
              priority
              className="rounded-lg  w-8 h-8"
            />
            <span className="text-gray-800 pl-2">e-sewa</span>
          </TabsTrigger>
          <TabsTrigger value="khalti">
            <div className="bg-purple-700 text-white  px-4 rounded-md flex items-center justify-start">
              <Image
                src={KhaltiIconWhite}
                alt="khalti"
                width={24}
                height={24}
                priority
                className="rounded-lg  h-full w-full"
              />
              Khalti
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="credit">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Card Number</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Name on Card</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Expiry Date</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="MM/YY"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">CVV</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Pay ${rentalDetails.total_amount}
            </button>
          </form>
        </TabsContent>
        <TabsContent value="esewa">
          <div className="text-center p-6 space-y-4">
            <Image
              src={esewaIcon}
              alt="esewa-icon"
              width={80}
              height={80}
              priority
              className="rounded-lg w-20 h-20 mx-auto "
            />
            <h3 className="text-lg font-medium text-green-700">
              Pay Via e-sewa
            </h3>

            <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
              Confirm Pay ${rentalDetails.total_amount}
            </button>
          </div>
        </TabsContent>
        <TabsContent value="khalti">
          <div className="text-center p-6 space-y-4">
            <Image
              src={KhaltiIconColor}
              alt="khalti"
              width={80}
              height={80}
              priority
              className="rounded-lg w-20 h-20 mx-auto "
            />
            <h3 className="text-lg font-medium text-purple-700">
              Pay Via Khalti{" "}
            </h3>

            <button
              className="w-full bg-purple-700 text-white p-3 rounded-lg hover:bg-purple-800"
              onClick={() => console.log("Confirmed pay at pickup")}
            >
              Confirm Pay ${rentalDetails.total_amount}
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default OnlinePayment;
