import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import UserServices from "@/services/UserServices";
import Loading from "@/components/utils/Loading";
import RHFTextField from "@/components/RHFComponents/RHFTextField";
import Notfound from "@/components/global/Notfound";
import Image from "next/image";
import RHFImageField from "@/components/RHFComponents/RHFImageField";
import useUserEditSubmit from "@/hooks/useUserEditSubmit";

const User = () => {
  const {
    handleSubmit,
    setValue,
    onSubmit,
    watch,
    formState: { isSubmitting },
  } = useUserEditSubmit();

  const userId = Cookies.get("user_id") as string;
  const userLoggedIn = Cookies.get("user_logged_in") === "true";
  const profilePicture = watch("profile_picture");
  const [newProfileImage, setNewProfileImage] = useState<string | null>(null);

  const { data, isFetching } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => UserServices.fetchUserData(userId),
    enabled: !!userId && userLoggedIn,
    select: (data) => data,
  });

  useEffect(() => {
    if (data) {
      setValue("id", data?.id);
      setValue("username", data?.username);
      setValue("email", data?.email);
      setValue("is_active", data?.is_active);
      setValue("is_superuser", data?.is_superuser);
      setValue("first_name", data?.first_name);
      setValue("last_name", data?.last_name);

      if (data?.profile_picture) {
        setNewProfileImage(data?.profile_picture);
      }
    }
  }, [data, setValue]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("profile_picture", file);
      setNewProfileImage(URL.createObjectURL(file)); // Set new image preview URL
    }
  };

  return (
    <div>
      {isFetching ? (
        <Loading />
      ) : data?.id ? (
        <div className="p-2 mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <RHFTextField name="first_name" type="text" label="First Name" />
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <RHFTextField name="last_name" type="text" label="Last Name" />
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <RHFTextField name="username" type="text" label="Username" />
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 place-items-baseline gap-6">
              {newProfileImage ? (
                <Image
                  src={newProfileImage}
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div>No profile picture available</div>
              )}
              <div className="flex items-end h-full">
                <RHFImageField
                  name="profile_picture"
                  label="Profile Picture"
                  handleImageChange={handleImageChange}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-400 px-6 py-3 rounded-md text-black font-semibold"
            >
              {isSubmitting && <Loading />} Update Profile
            </button>
          </form>
        </div>
      ) : (
        <Notfound msg="Not Found!! Something went wrong!!" />
      )}
    </div>
  );
};

export default User;
