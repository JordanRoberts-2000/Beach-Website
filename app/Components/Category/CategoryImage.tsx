'use client'

import RiseFade from "@/utils/components/Animation/RiseFade"
import Image from "next/image"
import { useEffect, useRef } from "react"

type Props = {
    imageUrl: string,
    active: boolean,
    index: number
}

const CategoryImage = ({imageUrl, active, index}: Props) => {
    let imageRef = useRef<any>(null)
    let imageWrapperRef = useRef<HTMLDivElement>(null)
    let throttle = useRef(true)
    const imageAdjust = () => {
        let percentagePassed = ((imageWrapperRef.current!.getBoundingClientRect().top - window.innerHeight)*-1)/(window.innerHeight + imageWrapperRef.current!.getBoundingClientRect().height)
        let defaultPosition = (imageWrapperRef.current!.getBoundingClientRect().height * -.25)
        imageRef.current.style.transform = `translate(0, ${(defaultPosition + (percentagePassed * imageWrapperRef.current!.getBoundingClientRect().height * .5))}px) scale(1.5)`
    }
    useEffect(() => {
        imageAdjust()
    },[])
    useEffect(() => {
        if(active){
            imageRef.current.style.transform = `translate(0, 0) scale(1)`
            imageRef.current.style.transitionDuration = `700ms`
        }else{
            imageAdjust()
            setTimeout(() => {
                imageRef.current.style.transitionDuration = `75ms`
            },600)
        }
    },[active])
    const pageScroll = () => {
        if(!throttle.current)return
        throttle.current = false
        setTimeout(() => {
            throttle.current = true
        }, 15)
        requestAnimationFrame(() => {
            if(imageWrapperRef.current!.getBoundingClientRect().top <= window.innerHeight && imageWrapperRef.current!.getBoundingClientRect().top >= -imageWrapperRef.current!.getBoundingClientRect().height){
                imageAdjust()
            }
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', pageScroll)
    },[])
    return (
        <div ref={imageWrapperRef} className="h-full w-full relative duration-700 overflow-hidden">
            <Image ref={imageRef} alt="placeholder" fill src={imageUrl} className={`object-cover scale-150 duration-75`}/>
            
<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center z-20">
                <RiseFade duration={0.6} delay={index <= 1 ? 1.2 : 0} awaitPreload={index <= 1}>
                    <h3 className="text-4xl font-playfairDisplay font-[600] italic">{'hello'}</h3>
                </RiseFade>
                <RiseFade duration={0.6} delay={(index <= 1 ? 1.2 : 0.2)} awaitPreload={index <= 1}>
                    <p className="text-xl font-playfairDisplay">{'hello'}</p>
                </RiseFade>
            </div>
        </div>
    )
}

export default CategoryImage