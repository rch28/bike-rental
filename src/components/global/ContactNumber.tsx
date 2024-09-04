
import { TbPhoneCall } from "react-icons/tb";

const ContactNumber = () => {
  return (
    <div className="mx-4 flex items-center gap-2">
        <div className="w-9 h-9 p-1 bg-primary flex justify-center items-center rounded-lg" >
        <TbPhoneCall className="w-full h-full text-white "/>
        </div>
        <div className="flex flex-col">
            <p className="tracking-widest text-sm">Need Bike rent?</p>
            <span className="text-base font-bold font-sans text-primary">+977 9812997800</span>
        </div>
    </div>
  )
}

export default ContactNumber