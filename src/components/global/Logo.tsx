import React from 'react'
import Link from 'next/link'
import { Leaf } from 'lucide-react'
const Logo = () => {
  return (
    <Link href={"/"} id='logo' className="flex items-center   text-gray-900 dark:text-white ">
      <span className=" transition-all duration-200 ease-linear self-center text-2xl md:text-3xl lg:text-4xl  font-bold whitespace-nowrap dark:text-white">
              Bike<span className="text-orange-500 ">Hub.</span>
            </span><Leaf className="text-green-500"/>   
      </Link>
  )
}

export default Logo