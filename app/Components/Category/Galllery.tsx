'use client'

import { useEffect, useRef } from "react"
import GalleryImage from "./GalleryImage"

type GalleryImageUrls = {
    url: string,
    placeholder: string,
    blurImageUrl: string
}

const Galllery = ({active, galleryImageUrls}: {active: boolean, galleryImageUrls:GalleryImageUrls[]}) => {
    let slider = useRef<HTMLDivElement>(null)
    
    // useEffect(() => {
    //     if(active){
    //         imageRef.current.style.transform = `translate(0, 0) scale(1)`
    //         imageRef.current.style.transitionDuration = `700ms`
    //     }else{
    //         imageAdjust()
    //         setTimeout(() => {
    //             imageRef.current.style.transitionDuration = `75ms`
    //         },600)
    //     }
    // },[active])
    return (
        <>
            <div className={`${active ? "opacity-100" : "opacity-0"} w-full duration-300 font-bold z-[10] text-xl flex items-center translate-y-[-50%] lg:hidden`}>
                <div className='flex-1 bg-black h-[2px]'></div>
                <span className="mx-4 font-semibold font-playfairDisplay backdrop-blur-sm italic text-3xl">Gallery</span>
                <div className='flex-1 bg-black h-[2px]'></div>
            </div>
            <div ref={slider} className='flex gap-4 lg:gap-6 relative overflow-x-auto px-4 mb-4 lg:absolute lg:w-full
                            lg:bottom-0 lg:left-0'>
                {galleryImageUrls.map(({url, placeholder, blurImageUrl}, index) => (
                    <GalleryImage key={index} url={url} index={index} placeholder={placeholder} blurImageUrl={blurImageUrl} sliderRef={slider}/>
                ))}
            </div>
        </>
    )
}

export default Galllery