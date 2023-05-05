'use client'

import { useStore } from "@/store"
import { useRef, useState } from "react"
import CategoryImage from "./CategoryImage"
import { motion } from "framer-motion"

type Props = {
    children: React.ReactNode
    imageUrl: string,
    title: string,
    subtitle: string
}

const Category = ({children, imageUrl, title, subtitle}: Props) => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        categoryRef.current!.scrollIntoView({ behavior: "smooth"})
        useStore.setState((set: any) => ({bodyLocked: !set.bodyLocked}))
        setActive((prev) => !prev)
        // categoryRef.current!.scrollIntoView()
    }
    let categoryRef = useRef<HTMLLIElement>(null)
    return (
        <li ref={categoryRef} className={`${!active ? "overflow-hidden aspect-[3/2] w-[95%]" : "w-full aspect-auto h-[100lvh] overflow-scroll"} duration-300 grid mx-auto bg-white lg:grid-cols-2 lg:grid-rows-2`} onClick={() => handleClick()}>
            {/* Image/Gallery */}
            <div className="w-[100%] lg:w-full aspect-[3/2] lg:aspect-auto lg:h-[50vh] mx-auto relative mb-4">
                <CategoryImage imageUrl={imageUrl}/>
                <div className="absolute top-0 w-full h-full bg-white/40"></div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center">
                    <motion.h3 initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} className="text-4xl duration-300 font-playfairDisplay font-[600] italic">{title}</motion.h3>
                    <p className="font-playfairDisplay text-xl">{subtitle}</p>
                </div>
            </div>
            {/* Info Section */}
            {children}
        </li>
    )
}

export default Category