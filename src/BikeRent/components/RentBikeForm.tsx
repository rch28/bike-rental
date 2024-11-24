"use client";

import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight, FaMotorcycle } from "react-icons/fa6";
import { Button } from "../../components/utils/Button";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LocationService from "@/services/LocationService";
import RHFSelectField from "@/components/RHFComponents/RHFSelectField";
import { RentFormSearchSchemaType } from "../types/RentFormSearchSchema";
import { LocationListResponse } from "@/types/locationType";
import useSearchRentBikeSubmit from "@/hooks/useSearchRentBikeSubmit";
import RHFDateTimePicker from "@/components/RHFComponents/RHFDateTimePicker";
import RHFTextField from "@/components/RHFComponents/RHFTextField";

export const RentBikeForm = () => {
  const [LocationOptions, setLocationOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const { handleSubmit } = useSearchRentBikeSubmit();

  const { data } = useQuery({
    queryKey: ["get-loaction-list"],
    queryFn: async () => LocationService.getLocationList(),
    select: (data) => data,
  });
  useEffect(() => {
    if (data) {
      const mappedOptions = data.map((item) => ({
        label: item.city,
        value: item.id,
      }));
      setLocationOptions(mappedOptions);
    }
  }, [data]);
  return (
    <form
      className="mt-2 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-4"
      onSubmit={handleSubmit}
    >
      {/* Pick Up location */}

      <RHFSelectField<RentFormSearchSchemaType>
        name="pickup_location"
        label="Pick Up Location"
        size="medium"
        options={LocationOptions}
      />
      <RHFSelectField<RentFormSearchSchemaType>
        name="dropoff_location"
        label="Drop Off Location"
        size="medium"
        options={LocationOptions}
      />

      <RHFDateTimePicker<RentFormSearchSchemaType>
        name="pickup_date"
        label="Pick Up Date"
      />
      <RHFDateTimePicker<RentFormSearchSchemaType>
        name="dropoff_date"
        label="Drop Off Date"
      />

      <RHFSelectField<RentFormSearchSchemaType>
        name="category"
        label="Category"
        size="medium"
        options={[
          // { label: "Scooter", value: "scooter" },
          { label: "Bike", value: "bike" },
        ]}
      />
      <div className="relative ">
        <Button
          type="submit"
          title="Find Your Bike"
          className=" text-white  !py-3 text-lg"
          icon={<FaArrowRight className="" />}
        />
      </div>
    </form>
  );
};
