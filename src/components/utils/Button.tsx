import React from 'react'

import Link from "next/link";


export const Button:React.FC<ButtonProps> = ({className, path , title}) => {
  return (
    <Link href={path} className={`relative px-[22px] py-[10px] overflow-hidden min-w-20 bg-primary flex justify-center items-center rounded-xl text-white font-medium   before:absolute before:w-0 before:h-0 before:bg-orange-500 before:transition-all before:ease-linear before:duration-300 hover:before:w-60 hover:before:h-60 before:rounded-full  ${className}`}>
        <span className='relative z-10'>{title}</span>
    </Link>
  )
}
