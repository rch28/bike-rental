import React from 'react'

import Link from "next/link";


export const Button:React.FC<ButtonProps> = ({className, path , title}) => {
  return (
    <Link href={path} className={` px-[22px] py-[10px]  min-w-20 bg-orange-600 flex justify-center items-center rounded-xl text-white font-medium  ${className}`}>
        {title}
    </Link>
  )
}
