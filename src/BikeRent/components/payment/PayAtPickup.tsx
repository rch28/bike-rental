"use client";

import { RentalResponse } from "@/BikeRent/types/BikeRentFormSchema";
import { LuClock } from "react-icons/lu";

type OnlinePaymentProps = {
  rentalDetails: RentalResponse;
};
const PayAtPickup = ({ rentalDetails }: OnlinePaymentProps) => {
  return (
    <>
      <div className="text-center p-6 space-y-4">
        <LuClock className="w-12 h-12 mx-auto text-primary" />
        <h3 className="text-lg font-medium text-primary">Pay at Pickup</h3>
        <p className="text-gray-500">
          You can make the payment when you pick up the bike. Total amount due :
          <span className="font-semibold pl-1 text-gray-600">
            {" "}
            रु {rentalDetails.total_amount}
          </span>
        </p>
        <button
          className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary/90 font-semibold"
          onClick={() => console.log("Confirmed pay at pickup")}
        >
          Confirm Pay at Pickup
        </button>
      </div>
    </>
  );
};

export default PayAtPickup;
