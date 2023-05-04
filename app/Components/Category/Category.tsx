'use client'

import Image from "next/image"
import { useRef, useState } from "react"

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
        setActive((prev) => !prev)
        // categoryRef.current!.scrollIntoView()
    }
    let categoryRef = useRef<HTMLLIElement>(null)
    return (
        <li ref={categoryRef} className={`${!active && "overflow-hidden"} grid w-[95%] aspect-[3/2] mx-auto bg-white lg:grid-cols-2 lg:grid-rows-2`} onClick={() => handleClick()}>
            {/* Image/Gallery */}
            <div className="w-[100%] lg:w-full aspect-[3/2] lg:aspect-auto lg:h-[50vh] mx-auto relative mb-4">
                <Image alt="placeholder" fill src={imageUrl} className="object-cover"/>
                <div className="absolute top-0 w-full h-full bg-white/40"></div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center">
                    <h3 className="text-4xl font-playfairDisplay font-[600] italic">{title}</h3>
                    <p className="font-playfairDisplay text-xl">{subtitle}</p>
                </div>
            </div>
            {/* Info Section */}
            {children}
        </li>
    )
}

export default Category