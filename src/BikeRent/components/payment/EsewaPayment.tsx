import { esewaIcon } from "@/assets";
import { RentalResponse } from "@/BikeRent/types/BikeRentFormSchema";
import useEsewaPayment from "@/hooks/useEsewaPayment";
import Image from "next/image";
import React, { useEffect } from "react";
type OnlinePaymentProps = {
  rentalDetails: RentalResponse;
};
const EsewaPayment = ({ rentalDetails }: OnlinePaymentProps) => {
  const { handleSubmit, setValue } = useEsewaPayment();
  useEffect(() => {
    if (rentalDetails) {
      setValue("product_id", rentalDetails.id);
      setValue("total_amount", rentalDetails.total_amount);
      setValue("amount_paid", rentalDetails.total_amount);
    }
  }, [rentalDetails]);
  return (
    <div className="text-center p-6 space-y-4">
      <Image
        src={esewaIcon}
        alt="esewa-icon"
        width={80}
        height={80}
        priority
        className="rounded-lg w-20 h-20 mx-auto "
      />
      <h3 className="text-lg font-medium text-green-700">Pay Via e-sewa</h3>

      <form onSubmit={handleSubmit}>
        <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
          Confirm Pay रु {rentalDetails.total_amount}
        </button>
      </form>
    </div>
  );
};

export default EsewaPayment;
