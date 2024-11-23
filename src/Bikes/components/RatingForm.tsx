import RHFSelectField from "@/components/RHFComponents/RHFSelectField";
import useRatingSubmit from "@/hooks/useRatingSubmit";
import React from "react";
import { RatingType } from "../types/RatingSchema";
import RHFTextArea from "@/components/RHFComponents/RHFTextArea";
import Loading from "@/components/utils/Loading";

const RatingForm = ({ bikeId, userId }: { bikeId: string; userId: string }) => {
  const RatingOPtions = [
    { value: 1, label: "1 - Poor" },
    { value: 2, label: "2 - Fair" },
    { value: 3, label: "3 - Good" },
    { value: 4, label: "4 - Very Good" },
    { value: 5, label: "5 - Excellent" },
  ];
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useRatingSubmit(bikeId, userId);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <RHFSelectField<RatingType>
        name="rating"
        label="Rating (1-5)"
        options={RatingOPtions}
      />

      <RHFTextArea<RatingType> name="comment" label="Comment" />
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-md shadow hover:bg-primary-dark"
      >
        {isSubmitting ? <Loading /> : "Submit Rating"}
      </button>
    </form>
  );
};

export default RatingForm;
