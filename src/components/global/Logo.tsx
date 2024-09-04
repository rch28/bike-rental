import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WithMyBike } from "@/assets";
const Logo = () => {
  return (
    <div
      className="  absolute top-0 "
    >
      <Link href="/" className="text-4xl">
      <Image src={WithMyBike} alt="with my bike" className="w-80" />

      </Link>
    </div>
  );
};

export default Logo;
