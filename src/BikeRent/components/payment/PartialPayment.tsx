import React from "react";

const PartialPayment = () => {
  return (
    <div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Payment Amount</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="Enter amount"
            // max={rentalDetails.totalAmount}
          />
          <p className="text-sm text-gray-500">
            Remaining amount will be due at dropoff
          </p>
        </div>
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
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Make Partial Payment
        </button>
      </div>
    </div>
  );
};

export default PartialPayment;
