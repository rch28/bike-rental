import { FaBiking } from "react-icons/fa";
import { FaRoad, FaStar } from "react-icons/fa6";
import { RiSteeringFill } from "react-icons/ri";
import { Button } from "../utils/Button";

export const Bike = () => {
  return (
    <div
      className={`p-4 max-w-sm group transition-all ease-in duration-300 hover:-translate-y-3 bg-gradient-to-br from-pink-100 to-blue-200 rounded-xl shadow-sm shadow-gray-300`}
    >
      <div className=" relative rounded-xl w-full  h-60 overflow-hidden">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/295/264/47/ktm-bikes-racing-hd-wallpaper-preview.jpg"
          alt="bike"
          className="w-full h-60 rounded-xl group-hover:scale-110 transition-all ease-linear duration-300  object-cover"
        />
      </div>

      <div className="flex justify-between items-center my-2 ">
        <h1 className="text-xl font-bold">KTM Duke 390</h1>
        <span>
          <FaStar className="inline-block" />
          <span>4</span>
        </span>
      </div>
      <div className="flex flex-wrap gap-3 text-gray-600 font-medium">
        <span className="flex gap-2">
          <FaBiking />
          <span>SELF START ONly</span>
        </span>
        <span className="flex gap-2">
          <RiSteeringFill />
          <span>396 cc Engine</span>
        </span>
        <span className="flex gap-2">
          <FaRoad />
          <span>160 km/day</span>
        </span>
      </div>
      <div className="flex items-center justify-between my-3  border-t border-neutral-400 pt-2">
        <h2>
          <span className="text-xl font-bold text-primary ">₹ 1000</span>
          <span>/day</span>
        </h2>
        <Button title="Rent Now" className=" text-white" />
      </div>
    </div>
  );
};
