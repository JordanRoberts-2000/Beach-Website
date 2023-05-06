'use client'

import { useStore } from "@/store"
import { useRef, useState } from "react"
import CategoryImage from "./CategoryImage"
import { motion } from "framer-motion"
import RiseFade from "@/utils/components/Animation/RiseFade"

type PriceOptions = {
    title: string,
    price: number,
    included: string[]
}

type Props = {
    children: React.ReactNode
    imageUrl: string,
    title: string,
    subtitle: string,
    priceOptions: PriceOptions[],
    index: number
}

const Category = ({children, imageUrl, title, subtitle, priceOptions, index}: Props) => {
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
        <li ref={categoryRef} className={`grid bg-white lg:grid-cols-2 lg:grid-rows-2 relative`} onClick={() => handleSelected()}>
            <div ref={scrollUpRef} className="absolute opacity-0 pointer-events-none top-[-50px] h-[1px] w-full"></div>
            <button className={`bg-black ${active ? "opacity-100 pointer-events-auto  duration-300" : "opacity-0 pointer-events-none"} p-2 rounded-full fixed bottom-0 right-0 m-4 z-40`} onClick={() => handleExit()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div ref={categoryScrollRef} className={`${!active ? "overflow-hidden aspect-[3/2] w-[95%]" : "w-full aspect-auto h-[100lvh] overflow-scroll"} mx-auto
            ${categoryClicked !== title && categoryClicked !== '' ? 'opacity-0 duration-200' : 'opacity-100 duration-500'}`}>
                {/* Image/Gallery */}
                <div className="w-[100%] lg:w-full aspect-[3/2] lg:aspect-auto lg:h-[50vh] mx-auto relative mb-4" onClick={() => handleExit()}>
                    <CategoryImage imageUrl={imageUrl} active={active}/>
                    <div className="absolute top-0 w-full h-full bg-white/40"></div>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center">
                        <RiseFade duration={0.6} delay={index <= 1 ? 1.4 : 0} awaitPreload={index <= 1}>
                            <h3 className="text-4xl font-playfairDisplay font-[600] italic">{title}</h3>
                        </RiseFade>
                        <RiseFade duration={0.6} delay={index <= 1 ? 1.5 : 0.2} awaitPreload={index <= 1}>
                            <p className="text-xl font-playfairDisplay">{subtitle}</p>
                        </RiseFade>
                    </div>
                </div>
                {/* Info Section */}
                {children}
            </div>
            <div className={`${!priceActive ? "translate-x-[-100%]" : "translate-x-0"} ${categoryClicked !== title && categoryClicked !== '' && 'opacity-0'}
                           duration-200 z-30 absolute bottom-0 left-[-2rem] mb-4 pl-12 py-1 bg-black text-white px-4 text-xl font-playfairDisplay italic`}>
                {`from £${priceOptions[0].price}`}
            </div>
        </li>
    )
}

export default Category