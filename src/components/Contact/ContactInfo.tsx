import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 mt-10">
      {/* Office Address */}
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 mx-auto md:w-full h-52 border-2 border-primary rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105">
        <div className="w-20 h-20  flex justify-center items-center bg-primary rounded-full">

        <FaMapMarkerAlt className="text-4xl text-white " />
        </div>
        <h4 className="font-semibold">Office Address</h4>
        <p className="text-gray-500">Bharatpur-4, Chitwan.</p>
      </div>

      {/* Call Us */}
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 mx-auto md:w-full h-52 border-2 border-primary rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105">
        <div className="w-20 h-20  flex justify-center items-center bg-primary rounded-full">

        <FaPhoneAlt className="text-4xl text-white " />
        </div>
        <h4 className="font-semibold">Call Us</h4>
        <p className="text-gray-500">+977 9812990000</p>
      </div>

      {/* Email Us */}
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 mx-auto md:w-full h-52 border-2 border-primary rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105">
        <div className="w-20 h-20  flex justify-center items-center bg-primary rounded-full">

        <FaEnvelope className="text-4xl text-white " />
        </div>
        <h4 className="font-semibold">Email Us</h4>
        <p className="text-gray-500">withmybike@gmail.com</p>
      </div>

      {/* Open Time */}
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 mx-auto md:w-full h-52 border-2 border-primary
       rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105">
        <div className="w-20 h-20  flex justify-center items-center bg-primary rounded-full">

        <FaClock className="text-4xl text-white " />
        </div>
        <h4 className="font-semibold">Open Time</h4>
        <p className="text-gray-500">Mon - Sat (24 Hours)</p>
      </div>
    </div>
  );
};

export default ContactInfo;
