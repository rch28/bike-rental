import { BikeRentFormSchemaType } from "../types/BikeRentFormSchema";
import RHFDateTimePicker from "@/components/RHFComponents/RHFDateTimePicker";
import RHFSelectField from "@/components/RHFComponents/RHFSelectField";
import { Button } from "@/components/utils/Button";
import useRentBikeSubmit from "@/hooks/useRentBikeSubmit";
import { useEffect } from "react";

export default function BikeRentalForm({ bikeId }: { bikeId: string }) {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = useRentBikeSubmit();
  useEffect(() => {
    const sub = watch((data) => console.log(data));
    return () => sub.unsubscribe();
  }, [watch]);
  useEffect(() => {
    setValue("bike", bikeId);
    const sub = watch((data) => console.log(data));
    return () => sub.unsubscribe();
  }, [watch, bikeId]);
  return (
    <>
      <div className="p-4 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-md drop-shadow-md grid space-y-5"
        >
          <RHFSelectField<BikeRentFormSchemaType>
            name="pickup_location"
            label="Pick Up Location"
            size="medium"
            options={[
              { label: "Kathmandu", value: "1" },
              { label: "Pokhara", value: "2" },
            ]}
          />
          <RHFDateTimePicker<BikeRentFormSchemaType>
            name="pickup_date"
            label="Pick up Date"
          />
          <RHFSelectField<BikeRentFormSchemaType>
            name="dropoff_location"
            label="Drop off Location"
            size="medium"
            options={[
              { label: "Kathmandu", value: "1" },
              { label: "Pokhara", value: "2" },
            ]}
          />
          <RHFDateTimePicker<BikeRentFormSchemaType>
            name="dropoff_date"
            label="Drop off Date"
          />

          <Button
            type="submit"
            title={isSubmitting ? "Submitting..." : "Rent Now"}
            className="bg-primary text-white"
          />
        </form>
      </div>
    </>
  );
}
