import React from 'react'
import Link from 'next/link'
const Logo = () => {
  return (
    <div className="logo flex items-center   py-6  bg-orange-600 text-white font-bold px-4   w-60">
    <Link href="/" className="text-2xl">WITH MY BIKE</Link>
  </div>
  )
}

export default Logo