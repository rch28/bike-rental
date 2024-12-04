import React from "react";

const OnlinePayment = () => {
  return (
    <>
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
          {/* Pay ${rentalDetails.totalAmount} */}
          Pay 1222222
        </button>
      </form>
    </>
  );
};

export default OnlinePayment;
