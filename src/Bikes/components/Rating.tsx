"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { defaultRatingValues, RatingSchema } from "../types/RatingSchema";
import RatingForm from "./RatingForm";

const Rating = ({ bikeId }: { bikeId: string }) => {
  const me = localStorage.getItem("me");
  const userId = me ? JSON.parse(me).id : "";
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(RatingSchema),
    defaultValues: defaultRatingValues,
  });
  return (
    <FormProvider {...methods}>
      <div className="mt-10 bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-4">Rate This Bike</h2>
        <p className="text-lg text-neutral-600 mb-4">
          Share your experience with this bike! Your feedback helps other users.
        </p>

        {/* Rating Form */}
        <RatingForm bikeId={bikeId} userId={userId} />
      </div>
    </FormProvider>
  );
};

export default Rating;
