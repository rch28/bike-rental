import RHFTextField from "@/components/RHFComponents/RHFTextField";
import useChangePasswordSubmit from "@/hooks/useChangePasswordSubmit";
import { useUserStore } from "@/store/userStore";
import { ChangePasswordSchemaType } from "../types/changePasswordSchema";
import Loading from "@/components/utils/Loading";
import useFPVerifySubmit from "@/hooks/useFPVerifySubmit";

const ChangePasswordForm = () => {
  const { handleSubmit: handleFPSubmit, onSubmit: onFPSubmit } =
    useFPVerifySubmit({ isLoggedin: true });
  const { showChangePassword, email } = useUserStore((state) => ({
    showChangePassword: state.showChangePassword,
    email: state.email,
  }));

  const {
    handleSubmit,
    formState: { isSubmitting },
    onSubmit,
  } = useChangePasswordSubmit();
  const handleClick = () => {
    onFPSubmit({
      email: email,
    });
  };

  if (!showChangePassword) return null;
  return (
    <div className="mt-4">
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="md:grid grid-cols-2">
          <RHFTextField<ChangePasswordSchemaType>
            name="old_password"
            label="Old Password"
            type="password"
          />
        </div>
        <div className="md:grid grid-cols-2">
          <RHFTextField<ChangePasswordSchemaType>
            name="new_password"
            label="New Password"
            type="password"
          />
        </div>

        <div className="md:grid grid-cols-2">
          <RHFTextField<ChangePasswordSchemaType>
            name="confirm_password"
            label="Confirm Password"
            type="password"
          />
        </div>
        <div className="md:grid grid-cols-3">
          <div className="flex  items-center gap-4  col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting
                  ? "bg-gray-600 text-white cursor-not-allowed"
                  : "bg-primary text-white"
              }  px-4 py-3 rounded-lg font-bold text-sm md:text-base  flex justify-center items-center`}
            >
              {isSubmitting ? <Loading msg="Updating..." /> : "Update Account"}
            </button>
            <div className="text-blue-600 font-semibold text-sm md:text-base">
              <button type="button" onClick={handleClick}>
                I forgot my password
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
