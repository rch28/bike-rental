import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import UserServices from "@/services/UserServices";
import { successResponse } from "@/Auth/types/common";
import { AxiosError } from "axios";
import { UserProfile } from "@/User/types/userTypes";
import { useRouter } from "next/navigation";

type ProfileDropdownProps = {
  setProfileToggle: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserProfile;
};

const ProfileDropdown = ({
  setProfileToggle,
  userData,
}: ProfileDropdownProps) => {
  const router = useRouter();
  const handleLogout = () => {
    const newPromise: Promise<successResponse> = new Promise(
      async (resolve, reject) => {
        try {
          const response = await UserServices.logoutUser();
          resolve(response);
        } catch (err: any) {
          if (err instanceof AxiosError && err.response?.data) {
            reject(err.response?.data?.detail || err.response?.data?.error);
          } else if (err instanceof Error) {
            reject(err.message);
          } else {
            reject("Network Error!!");
          }
        }
      }
    );

    toast.promise(newPromise, {
      loading: "Logging out...",
      success: (data) => {
        router.push("/");
        Cookies.remove("user_logged_in");
        Cookies.remove("user_id");
        setProfileToggle(false);
        return data?.success || "Logout successfully!";
      },
      error: (err) => {
        return err;
      },
    });
  };

  return (
    <div className="min-w-48 p-2 z-50 relative bg-white">
      <div className="border-b border-gray-400">
        <h1 className="text-lg font-semibold text-neutral-800 ">
          <span className="pr-2 capitalize">{userData.first_name}</span>
          <span className="capitalize">{userData.last_name}</span>
        </h1>
        <h3 className="text-sm text-gray-700">{userData.email}</h3>
      </div>

      <div className="mt-2  font-medium space-y-2 text-neutral-800">
        <div className="flex gap-2 items-center hover:text-primary">
          <FaRegUser className="pb-0.5" />
          <Link href="/profile" className="">
            Your Profile
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="flex gap-2 items-center hover:text-primary"
        >
          <CiLogout className="pb-0.5" />
          <span className="block">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
