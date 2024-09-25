import React from "react";

import Link from "next/link";

export const Button: React.FC<ButtonProps> = ({
  className,
  path,
  title,
  icon,
  onClick
}) => {
  return (
    <>
      {path ? (
        <Link
          href={path}
          className={`relative px-[22px] py-[10px] overflow-hidden min-w-20 bg-primary flex justify-center items-center rounded-xl  font-medium hover:text-white   before:absolute before:w-0 before:h-0 before:bg-orange-500 before:transition-all before:ease-linear before:duration-300 hover:before:w-96 hover:before:h-96 before:rounded-full group  ${className}`}
        >
          <span className="relative z-10">{title}</span>
          {icon && <span className="ml-2 relative z-10 ">{icon}</span>}
        </Link>
      ) : (
        <button
          className={`relative z-10 px-[22px] py-[10px] overflow-hidden min-w-20 bg-primary flex justify-center items-center rounded-xl  font-medium hover:text-white before:z-10  before:absolute before:w-0 before:h-0 before:bg-orange-500 before:transition-all before:ease-linear before:duration-300 hover:before:w-60 hover:before:h-60 before:rounded-full group  ${className}`}
          onClick={onClick}
        >
          <span className="relative z-10">{title}</span>
          {icon && <span className="ml-2 relative z-10 ">{icon}</span>}
        </button>
      )}
    </>
  );
};
