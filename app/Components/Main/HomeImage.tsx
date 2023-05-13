'use client'

import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useStore } from "@/store"
import { useEffect, useRef } from "react"
import RiseFade from "@/utils/components/Animation/RiseFade"

const HomeImage = () => {
    const pathname = usePathname()
    const imageLoaded = () => {
        useStore.setState(() => ({imageLoaded: true}))
    }
    let imageRef = useRef<any>(null)
    let titleWrapperRef = useRef<HTMLDivElement>(null)
    let subtitleRef = useRef<HTMLHeadingElement>(null)
    let throttle = useRef(true)
    const pageScroll = () => {
        if(!throttle.current || window.scrollY > imageRef.current!.getBoundingClientRect().height)return
        if(!imageRef.current)return
        if(pathname !== '/')return
        throttle.current = false
        setTimeout(() => {
            throttle.current = true
        }, 20)
        requestAnimationFrame(() => {
            let percentage = window.scrollY / imageRef.current!.getBoundingClientRect().height
            if(percentage < 0)percentage = 0
            imageRef.current.style.transform = `scale(${1 + (percentage * .3)})`
            // titleWrapperRef.current!.style.transform = `scale(${1 - (percentage * .15)}) translate(-50%, 0)`
            // subtitleRef.current!.style.transform = `scale(${1 - (percentage * .15)}) translate(-50%, 0)`
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', pageScroll)
    },[])
    return (
        <>
            <div className={`${(pathname === "/Booking" || pathname === "/SignUp") ? "h-[10vh]" : 'h-[35vh]'} overflow-hidden w-full fixed top-0 left-0 -z-50`}>
                <Image ref={imageRef} alt="Beach of Pocahontas" priority fill src="http://res.cloudinary.com/dewhcvhvq/image/upload/v1683129665/urkmys4futdbzl0ufu8e.webp" 
                    className={`${(pathname === "/Booking" || pathname === "/SignUp") && "z-40"} object-cover scale-[1] duration-75`} onLoad={() => imageLoaded()}/>
            </div>
            <div className='overflow-hidden'>
                <div ref={titleWrapperRef} className="top-[40%] backdrop-blur-sm text-lg font-playfairDisplay italic font-[800] absolute lg:top-20 left-[50%] translate-x-[-50%] lg:text-7xl 
                                whitespace-nowrap lg:text-center">
                    <RiseFade duration={.6} delay={.2} awaitPreload={true}>
                        <h1>The Best Beach in the<br className="hidden lg:block"/> Sutton West</h1>
                    </RiseFade>
                </div>
                <h2 ref={subtitleRef} className="absolute translate-x-[-50%] left-[50%] top-[25%] font-playfairDisplay lg:backdrop-blur-sm px-4 py-2 font-bold lg:border-black 
                            lg:border-4 whitespace-nowrap italic text-4xl">
                    Pocahontas Beach
                </h2>
            </div>
        </>
    )
}

export default HomeImage