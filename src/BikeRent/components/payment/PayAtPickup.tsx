"use client";

import { RentalResponse } from "@/BikeRent/types/BikeRentFormSchema";
import Modal from "@/components/Model/Model";
import { useModal } from "@/hooks/useModalStore";
import RentBikeServices from "@/services/RentBikeServices";
import { AxiosError } from "axios";
import { LuClock } from "react-icons/lu";

type OnlinePaymentProps = {
  rentalDetails: RentalResponse;
};
const PayAtPickup = ({ rentalDetails }: OnlinePaymentProps) => {
  const { openModal, isOpen, closeModal } = useModal();

  const haldleSubmit = async () => {
    const newPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await RentBikeServices.updateRentBike("233", {});
        console.log("response", response);
      } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.detail) {
          const errMsg = error?.response?.data?.detail;
          reject(errMsg);
        } else if (error instanceof Error) {
          reject(error?.message);
        } else {
          reject("Network Error!!");
        }
      }
    });
  };

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          title="Confirm Pay at Pickup"
        >
          <p className="text-gray-500">
            You can make the payment when you pick up the bike. Total amount due
            :
            <span className="font-semibold pl-1 text-gray-600">
              {" "}
              रु {rentalDetails.total_amount}
            </span>
          </p>
          <button
            onClick={haldleSubmit}
            className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary/90 font-semibold mt-6"
          >
            Confirm Pay at Pickup
          </button>
        </Modal>
      )}
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
          onClick={openModal}
        >
          Confirm Pay at Pickup
        </button>
      </div>
    </>
  );
};

export default PayAtPickup;
