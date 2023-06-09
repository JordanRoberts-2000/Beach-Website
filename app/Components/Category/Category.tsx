'use client'

import { useStore } from "@/store"
import { useRef, useState } from "react"
import CategoryImage from "./CategoryImage"
import { motion } from "framer-motion"
import RiseFade from "@/utils/components/Animation/RiseFade"
import Galllery from "./Galllery"

type PriceOptions = {
    title: string,
    price: number,
    included: string[]
}

type GalleryImageUrls = {
    url: string,
    placeholder: string,
    blurImageUrl: string
}

type Props = {
    children: React.ReactNode
    imageUrl: string,
    blurImageUrl?: string,
    title: string,
    subtitle: string,
    priceOptions: PriceOptions[],
    index: number,
    galleryImageUrls: GalleryImageUrls[]
}

const Category = ({children, imageUrl, title, subtitle, priceOptions, galleryImageUrls, blurImageUrl, index}: Props) => {
    let categoryRef = useRef<HTMLLIElement>(null)
    let scrollUpRef = useRef<HTMLDivElement>(null)
    let categoryScrollRef = useRef<HTMLDivElement>(null)
    const { categoryClicked } = useStore()
    const [active, setActive] = useState(false)
    const [priceActive, setPriceActive] = useState(true)
    const handleSelected = () => {
        if(active)return
        useStore.setState(() => ({
            categoryClicked: title,
            bodyLocked: true
        }))
        setTimeout(() => {
            categoryRef.current!.scrollIntoView({ behavior: "smooth"})
            setPriceActive(false)
            setTimeout(() => {
                setActive(true)
            }, 400)
        },10)
    }
    const handleExit = () => {
        if(!active)return
        let scrollDelay = 0
        if(categoryScrollRef.current!.scrollTop > 0)scrollDelay = 250
        if(categoryScrollRef.current!.scrollTop > window.innerHeight)scrollDelay = 500
        categoryScrollRef.current!.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(() => {
            useStore.setState(() => ({categoryClicked: ""}))
            setActive(false)
            setTimeout(() => {
                setPriceActive(true)
                scrollUpRef.current!.scrollIntoView({ behavior: "smooth"})
                setTimeout(() => {
                    useStore.setState((set: any) => ({bodyLocked: false}))
                }, 200)
            }, 400)
        }, scrollDelay)
    }
    return (
        <li ref={categoryRef} className={`bg-white relative lg:pointer-events-none lg:border-b-2 lg:border-black`} onClick={() => handleSelected()}>
            <div ref={scrollUpRef} className="absolute opacity-0 pointer-events-none top-[-50px] h-[1px] w-full"></div>
            <button className={`bg-black ${active ? "opacity-100 pointer-events-auto  duration-300" : "opacity-0 pointer-events-none"} p-2 lg:hidden rounded-full fixed bottom-0 right-0 m-4 z-40`} onClick={() => handleExit()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div ref={categoryScrollRef} className={`${!active ? "overflow-hidden lg:overflow-visible aspect-[3/2] lg:aspect-auto w-[95%] lg:w-full" : "w-full aspect-auto h-[100lvh] overflow-scroll"} mx-auto
            ${categoryClicked !== title && categoryClicked !== '' ? 'opacity-50 duration-200' : 'opacity-100 duration-500'} lg:grid lg:pt-4 grid-cols-[2fr,1fr] auto-rows-min`}>
                {/* Image/Gallery */}
                <div className="w-[100%] lg:w-full aspect-[3/2] lg:aspect-auto lg:h-[100%] mx-auto relative mb-4" onClick={() => handleExit()}>
                    <CategoryImage imageUrl={imageUrl} active={active} title={title} subtitle={subtitle} index={index} blurImageUrl={blurImageUrl}/>
                    <div className="absolute top-0 w-full h-full bg-white/40"></div>
                    
                    <Galllery active={active} galleryImageUrls={galleryImageUrls}/>
                </div>
                {/* Info Section */}
                {children}
            </div>
            {/* <div className={`${!priceActive ? "translate-x-[-100%]" : "translate-x-0"} ${categoryClicked !== title && categoryClicked !== '' && 'opacity-0 lg:opacity-100'}
                           duration-200 z-30 absolute bottom-0 left-[-2rem] mb-4 pl-12 py-1 bg-black text-white px-4 text-xl font-playfairDisplay italic`}>
                {`from £${priceOptions[0].price}`}
            </div> */}
        </li>
    )
}

export default Category