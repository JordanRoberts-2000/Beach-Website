'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

type Props = {
    imageUrl: string
}

const CategoryImage = ({imageUrl}: Props) => {
    let imageRef = useRef<any>(null)
    let imageWrapperRef = useRef<HTMLDivElement>(null)
    let throttle = useRef(true)
    const pageScroll = () => {
        if(!throttle.current)return
        throttle.current = false
        setTimeout(() => {
            throttle.current = true
        }, 100)
        requestAnimationFrame(() => {
            if(imageWrapperRef.current!.getBoundingClientRect().top <= window.innerHeight && imageWrapperRef.current!.getBoundingClientRect().top >= -imageWrapperRef.current!.getBoundingClientRect().height){
                let percentagePassed = ((imageWrapperRef.current!.getBoundingClientRect().top - window.innerHeight)*-1)/(window.innerHeight + imageWrapperRef.current!.getBoundingClientRect().height)
                let defaultPosition = (imageWrapperRef.current!.getBoundingClientRect().height * -.25)
                imageRef.current.style.transform = `translate(0, ${(defaultPosition + (percentagePassed * imageWrapperRef.current!.getBoundingClientRect().height * .5))}px) scale(1.5)`
            }
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', pageScroll)
    },[])
    return (
        <div ref={imageWrapperRef} className="h-full w-full relative duration-75">
            <Image ref={imageRef} alt="placeholder" fill src={imageUrl} className="object-cover scale-150 duration-75"/>
        </div>
    )
}

export default CategoryImage