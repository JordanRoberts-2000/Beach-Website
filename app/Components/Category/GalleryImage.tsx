'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"

type Props = {
    url: string,
    placeholder: string,
    blurImageUrl: string,
    sliderRef: React.RefObject<HTMLDivElement>,
    index: number
}

const GalleryImage = ({url, placeholder, blurImageUrl, sliderRef, index}: Props) => {
    let imageRef = useRef<any>(null)
    let imageWrapperRef = useRef<HTMLDivElement>(null)
    let throttle = useRef(true)
    const imageAdjust = () => {
        let percentagePassed = ((imageWrapperRef.current!.getBoundingClientRect().left - window.innerWidth)*-1)/(window.innerWidth + imageWrapperRef.current!.getBoundingClientRect().width)
        let defaultPosition = (imageWrapperRef.current!.getBoundingClientRect().width * -.25)
        imageRef.current.style.transform = `translate(${(defaultPosition + (percentagePassed * imageWrapperRef.current!.getBoundingClientRect().width * .5))}px, 0) scale(1.5)`
    }
    useEffect(() => {
        imageAdjust()
    },[])
    const pageScroll = () => {
        if(!throttle.current)return
        throttle.current = false
        setTimeout(() => {
            throttle.current = true
        }, 5)
        requestAnimationFrame(() => {
            if(imageWrapperRef.current!.getBoundingClientRect().left <= window.innerWidth && imageWrapperRef.current!.getBoundingClientRect().right >= 0){
                imageAdjust()
            }
        })
    }
    useEffect(() => {
        sliderRef.current!.addEventListener('scroll', pageScroll)
    },[])
    return (
        <div ref={imageWrapperRef} className='flex-shrink-0 w-[90%] aspect-[5/6] relative overflow-hidden'>
            <Image ref={imageRef} alt={placeholder} loading={index <= 1 ? "eager" : "lazy"} src={url} fill className="object-cover scale-150" sizes="90vw" placeholder="blur" blurDataURL={`${blurImageUrl}`}/>
        </div>
    )
}

export default GalleryImage