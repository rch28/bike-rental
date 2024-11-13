import { sidebarList } from "../constants/sidebar";
import SideBarItem from "./SideBarItem";

const UserSidebar = () => {
  return (
    <div className=" col-span-10 sm:col-span-4 md:col-span-3 lg:col-span-2 p-6  min-h-[80vh] space-y-2">
      {sidebarList?.map((item) => {
        return <SideBarItem key={item._id} item={item} />;
      })}
    </div>
  );
};

export default UserSidebar;
