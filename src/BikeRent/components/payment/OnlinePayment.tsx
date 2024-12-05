"use client";
import { esewaIcon, KhaltiIconColor, KhaltiIconWhite } from "@/assets";
import { RentalResponse } from "@/BikeRent/types/BikeRentFormSchema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStore } from "@/store/store";
import Image from "next/image";
import React, { useEffect } from "react";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import CreditPaymentProvider from "./CreditPaymentProvider";

type OnlinePaymentProps = {
  rentalDetails: RentalResponse;
};

const OnlinePayment = ({ rentalDetails }: OnlinePaymentProps) => {
  const { setRentDetails } = useStore();

  useEffect(() => {
    if (rentalDetails) {
      setRentDetails(rentalDetails);
    }
  }, [rentalDetails]);
  return (
    <>
      <Tabs className="w-full min-h-60">
        <TabsList className="grid w-96 grid-cols-3 h-16 bg-purple-200">
          <TabsTrigger value="credit" className="flex ">
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
          <CreditPaymentProvider />
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
