import UserServices from "@/services/UserServices";
import { UserProfile } from "@/User/types/userTypes";
import { SubmitHandler, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const useUserEditSubmit = () => {
  const { handleSubmit, setValue, watch, formState } =
    useFormContext<UserProfile>();
  const profilePicture = watch("profile_picture");

  const onSubmit: SubmitHandler<UserProfile> = async (data) => {
    if (!profilePicture) {
      data.profile_picture = undefined;
    }
    const newPromise = new Promise(async (resolve, reject) => {
      try {
        const result = await UserServices.updateUserData(data);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });

    await toast.promise(newPromise, {
      loading: "Updating user...",
      success: "User updated successfully",
      error: "Failed to update user",
    });
  };

  return {
    handleSubmit,
    setValue,
    watch,
    onSubmit,
    formState,
  };
};

export default useUserEditSubmit;
