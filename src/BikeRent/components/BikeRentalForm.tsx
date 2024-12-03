import { Bike } from "@/Bikes/types/bikeApiTypes";
import { BikeRentFormSchemaType } from "../types/BikeRentFormSchema";
import RHFDateTimePicker from "@/components/RHFComponents/RHFDateTimePicker";
import RHFSelectField from "@/components/RHFComponents/RHFSelectField";
import { Button } from "@/components/utils/Button";
import useRentBikeSubmit from "@/hooks/useRentBikeSubmit";
import LocationService from "@/services/LocationService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function BikeRentalForm({ bikeData }: { bikeData: Bike }) {
  const [pickUpLocationOptions, setPickUpLocationOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [dropOffLocationOptions, setDropOffLocationOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = useRentBikeSubmit();

  const { data: LocationsList } = useQuery({
    queryKey: ["get-loaction-list"],
    queryFn: async () => LocationService.getLocationList(),
    select: (d) => d,
  });
  useEffect(() => {
    const sub = watch((data) => console.log(data));
    return () => sub.unsubscribe();
  }, [watch]);
  useEffect(() => {
    setValue("bike", bikeData.id);
    const sub = watch((data) => console.log(data));
    return () => sub.unsubscribe();
  }, [watch, bikeData]);
  useEffect(() => {
    if (bikeData?.locations) {
      const mappedOptions = bikeData?.locations.map((item) => ({
        label: item.city,
        value: item.id,
      }));
      setPickUpLocationOptions(mappedOptions);
    }
    if (LocationsList) {
      const mappedOptions = LocationsList.map((item) => ({
        label: item.city,
        value: item.id,
      }));
      setDropOffLocationOptions(mappedOptions);
    }
  }, [bikeData, LocationsList]);

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
            options={pickUpLocationOptions}
          />
          <RHFDateTimePicker<BikeRentFormSchemaType>
            name="pickup_date"
            label="Pick up Date"
          />
          <RHFSelectField<BikeRentFormSchemaType>
            name="dropoff_location"
            label="Drop off Location"
            size="medium"
            options={dropOffLocationOptions}
          />
          <RHFDateTimePicker<BikeRentFormSchemaType>
            name="dropoff_date"
            label="Drop off Date"
          />

          <Button
            type="submit"
            disabled={bikeData?.isAvailable ? false : true}
            title={isSubmitting ? "Submitting..." : "Rent Now"}
            className="bg-primary text-white"
          />
        </form>
      </div>
    </>
  );
}
