'use client'

import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useStore } from "@/store"
import { useEffect, useRef } from "react"

const HomeImage = () => {
    const pathname = usePathname()
    const imageLoaded = () => {
        useStore.setState(() => ({imageLoaded: true}))
    }
    let imageRef = useRef<any>(null)
    let throttle = useRef(true)
    const pageScroll = () => {
        if(!throttle.current || window.scrollY > imageRef.current!.getBoundingClientRect().height)return
        throttle.current = false
        setTimeout(() => {
            throttle.current = true
        }, 20)
        requestAnimationFrame(() => {
            let percentage = window.scrollY / imageRef.current!.getBoundingClientRect().height
            if(percentage < 0)percentage = 0
            imageRef.current.style.transform = `scale(${1 + (percentage * .5)})`
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', pageScroll)
    },[])
    return (
        <div className="overflow-hidden w-full h-full absolute">
            <Image ref={imageRef} alt="Beach of Pocahontas" priority fill src="http://res.cloudinary.com/dewhcvhvq/image/upload/v1683129665/urkmys4futdbzl0ufu8e.webp" 
                   className={`${pathname === "/Booking" && "z-40"} object-cover duration-75`} onLoad={() => imageLoaded()}/>
        </div>
    )
}

export default HomeImage