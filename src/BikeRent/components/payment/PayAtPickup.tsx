"use client";

import { LuClock } from "react-icons/lu";

const PayAtPickup = () => {
  return (
    <>
      <div className="text-center p-6 space-y-4">
        <LuClock className="w-12 h-12 mx-auto text-blue-600" />
        <h3 className="text-lg font-medium">Pay at Pickup</h3>
        <p className="text-gray-500">
          You can make the payment when you pick up the bike. Total amount due:
          {/* ${rentalDetails.totalAmount} */}
          1222222
        </p>
        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          onClick={() => console.log("Confirmed pay at pickup")}
        >
          Confirm Pay at Pickup
        </button>
      </div>
    </>
  );
};

export default PayAtPickup;
