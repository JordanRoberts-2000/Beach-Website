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
    priceOptions: PriceOptions[]
}

const Category = ({children, imageUrl, title, subtitle, priceOptions}: Props) => {
    const { categoryClicked } = useStore()
    const [active, setActive] = useState(false)
    const [priceActive, setPriceActive] = useState(true)
    const handleClick = (e:any) => {
        if(categoryClicked !== ""){
            useStore.setState(() => ({categoryClicked: ""}))
        }else{
            useStore.setState(() => ({categoryClicked: title}))
        }
        categoryRef.current!.scrollIntoView({ behavior: "smooth"})
        useStore.setState((set: any) => ({bodyLocked: !set.bodyLocked}))
        if(priceActive)setPriceActive((prev) => !prev)
        if(active)setActive((prev) => !prev)
        setTimeout(() => {
            if(!active)setActive((prev) => !prev)
            if(!priceActive)setPriceActive((prev) => !prev)
            if(active){
                let scrollAmount = 0
                const scrolling = setInterval(() => {
                    if(scrollAmount !== 50){
                        window.scrollBy(0, -2)
                        scrollAmount = scrollAmount + 2
                    }else{
                        clearInterval(scrolling)
                    }
                },10)
            }
        },400)
    }
    let categoryRef = useRef<HTMLLIElement>(null)
    return (
        <li ref={categoryRef} className={`grid bg-white lg:grid-cols-2 lg:grid-rows-2 relative`} onClick={(e) => handleClick(e)}>
            <div className={`${!active ? "overflow-hidden aspect-[3/2] w-[95%]" : "w-full aspect-auto h-[100lvh] overflow-scroll"} mx-auto
            ${categoryClicked !== title && categoryClicked !== '' ? 'opacity-0 duration-200' : 'opacity-100 duration-500'}`}>
                {/* Image/Gallery */}
                <div className="w-[100%] lg:w-full aspect-[3/2] lg:aspect-auto lg:h-[50vh] mx-auto relative mb-4">
                    <CategoryImage imageUrl={imageUrl} active={active}/>
                    <div className="absolute top-0 w-full h-full bg-white/40"></div>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center">
                        <RiseFade duration={0.6}>
                            <h3 className="text-4xl font-playfairDisplay font-[600] italic">{title}</h3>
                        </RiseFade>
                        <RiseFade duration={0.6} delay={0.2}>
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