import { successResponse } from "@/Auth/types/common";
import { RentFormSearchSchemaType } from "@/BikeRent/types/RentFormSearchSchema";
import RentBikeServices from "@/services/RentBikeServices";
import { AxiosError } from "axios";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useSearchRentBikeSubmit = () => {
  const { handleSubmit, formState } =
    useFormContext<RentFormSearchSchemaType>();
  const onSubmit: SubmitHandler<RentFormSearchSchemaType> = async (data) => {
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await RentBikeServices.searchBikeOnLocation(data);
          console.log("response", response);
          resolve(response);
        } catch (error) {
          if (error instanceof AxiosError) {
            let errMsg = "";
            if (error.response?.data) {
              errMsg = error.response.data.detail || error.response.data.detail;
            }
            reject(errMsg);
          } else if (error instanceof Error) {
            reject(error.message);
          } else {
            reject("Failed to find bikes");
          }
        }
      }
    );
    await toast.promise(newPromise, {
      loading: "Searching for bikes",
      success: (data) => {
        return data.success || "Bikes found successfully";
      },
      error: (err) => err || "Failed to find bikes",
    });
  };
  return {
    handleSubmit: handleSubmit(onSubmit),
    formState,
  };
};

export default useSearchRentBikeSubmit;
