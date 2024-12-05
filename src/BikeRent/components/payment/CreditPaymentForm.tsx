import { CreditPaymentType } from "@/BikeRent/types/CreditPaymentSchema";
import RHFMonthYearField from "@/components/RHFComponents/RHFMonthYearField";
import RHFNumberField from "@/components/RHFComponents/RHFNumberField";
import RHFTextField from "@/components/RHFComponents/RHFTextField";
import useCreditPaymentSubmit from "@/hooks/useCreditPaymentSubmit";
import { useStore } from "@/store/store";
import React from "react";

const CreditPaymentForm = () => {
  const { rentalDetails } = useStore();
  const { handleSubmit } = useCreditPaymentSubmit();
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-medium">Card Number</label>
            <RHFTextField<CreditPaymentType>
              name="card_number"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-medium">Name on Card</label>
            <RHFTextField<CreditPaymentType>
              name="name_on_card"
              placeholder="Ram Sharma"
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-medium">Expiry Date</label>

            <RHFMonthYearField<CreditPaymentType>
              name="expiry_date"
              placeholder="MM/YY"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-medium">CVV</label>
            <RHFTextField<CreditPaymentType> name="cvv" placeholder="123" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary/90"
        >
          Pay ${rentalDetails.total_amount}
        </button>
      </form>
    </div>
  );
};

export default CreditPaymentForm;
