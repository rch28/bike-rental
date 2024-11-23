"use client";
import { successResponse } from "@/Auth/types/common";
import BikeServices from "@/Bikes/services/BikeServices";
import { RatingType } from "@/Bikes/types/RatingSchema";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useRatingSubmit = (bikeId: string) => {
  const router = useRouter();
  const { handleSubmit, formState, reset } = useFormContext<RatingType>();
  const me = localStorage.getItem("me");
  const queryClient = useQueryClient();
  const userId = me ? JSON.parse(me).id : null;
  const onSubmit: SubmitHandler<RatingType> = async (data) => {
    if (!me || !userId) {
      toast.error("Please login to rate this bike");
      router.push("/auth/login");
      return;
    }
    const formData = {
      ...data,
      user: userId,
      bike_id: bikeId,
    };
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await BikeServices.postRating(formData);
          resolve(response);
        } catch (error) {
          if (error instanceof AxiosError && error.response?.data?.detail) {
            const errMsg = error?.response?.data?.detail;
            reject(errMsg);
          } else if (error instanceof Error) {
            reject(error.message);
          } else {
            reject("Network Error!!");
          }
        }
      }
    );

    await toast.promise(newPromise, {
      loading: "Submitting...",
      success: (response) => {
        if (response?.success) {
          queryClient.invalidateQueries({ queryKey: ["bike"] });
          reset();
        }
        return response?.success || "Rating submitted successfully";
      },
      error: (err) => {
        return err;
      },
    });
  };
  return {
    handleSubmit: handleSubmit(onSubmit),
    formState,
  };
};

export default useRatingSubmit;
