import React from "react";
import { LuAlertTriangle } from "react-icons/lu";

const Notfound = ({ msg }: { msg: string }) => {
  return (
    <div className="p-4 w-full group  bg-gradient-to-br from-blue-100 to-blue-100 rounded-md shadow-sm shadow-gray-300 h-52 flex flex-col justify-center items-center text-2xl  gap-2">
      {/* Not found icon */}
      <LuAlertTriangle className="md:text-4xl text-gray-500 " />
      <span className="text-gray-700 text-center">{msg}</span>
    </div>
  );
};

export default Notfound;
