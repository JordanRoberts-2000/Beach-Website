'use client'

import Image from "next/image"
import { usePathname } from 'next/navigation'

const HomeImage = () => {
    const pathname = usePathname()
    return (
        <Image alt="Beach of Pocahontas" priority fill src="http://res.cloudinary.com/dewhcvhvq/image/upload/v1683129665/urkmys4futdbzl0ufu8e.webp" 
        className={`${pathname === "/Booking" && "z-40"} object-cover`}/>
    )
}

export default HomeImage