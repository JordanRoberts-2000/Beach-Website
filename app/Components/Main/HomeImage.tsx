'use client'

import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useStore } from "@/store"

const HomeImage = () => {
    const pathname = usePathname()
    const imageLoaded = () => {
        useStore.setState(() => ({imageLoaded: true}))
    }
    return (
        <Image alt="Beach of Pocahontas" priority fill src="http://res.cloudinary.com/dewhcvhvq/image/upload/v1683129665/urkmys4futdbzl0ufu8e.webp" 
        className={`${pathname === "/Booking" && "z-40"} object-cover`} onLoad={() => imageLoaded()}/>
    )
}

export default HomeImage