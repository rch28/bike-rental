import React from 'react'
import Link from 'next/link'
import { Leaf } from 'lucide-react'
const Logo = () => {
  return (
    <Link href={"/"} id='bubble' className="flex items-center  text-sm md:text-2xl font-semibold text-gray-900 dark:text-white ">
      <span className=" transition-all duration-200 ease-linear self-center text-sm md:text-2xl font-semibold lg:font-bold whitespace-nowrap dark:text-white">
              Bike<span className="text-orange-500 ">Hub.</span>
            </span><Leaf className="text-green-500"/>   
      </Link>
  )
}

export default Logo