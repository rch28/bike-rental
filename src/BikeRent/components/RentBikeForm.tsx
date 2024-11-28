"use client";

import { FaArrowRight, FaMotorcycle } from "react-icons/fa6";
import { Button } from "../../components/utils/Button";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LocationService from "@/services/LocationService";
import RHFSelectField from "@/components/RHFComponents/RHFSelectField";
import { RentFormSearchSchemaType } from "../types/RentFormSearchSchema";
import RHFDateTimePicker from "@/components/RHFComponents/RHFDateTimePicker";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useNavigate } from "@/hooks/navigate";

export const RentBikeForm = () => {
  const { goTo } = useNavigate();

  const [LocationOptions, setLocationOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const { handleSubmit } = useFormContext<RentFormSearchSchemaType>();
  const onSubmit: SubmitHandler<RentFormSearchSchemaType> = (data) => {
    goTo(
      `/bike-on-rent/?locationId=${data.pickup_location}&&pickup_date=${data.pickup_date}&&dropoff_date=${data.dropoff_date}`
    );
  };

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
      onSubmit={handleSubmit(onSubmit)}
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
