'use client'

import Image from "next/image"
import { useRef } from "react"

type Props = {
    imageUrl: string
}

const Category = ({imageUrl}: Props) => {
    const handleClick = () => {
        categoryRef.current!.scrollIntoView({ behavior: "smooth"})
        // categoryRef.current!.scrollIntoView()
    }
    let categoryRef = useRef<HTMLLIElement>(null)
    return (
        <li ref={categoryRef} className="grid lg:grid-cols-2 lg:grid-rows-2" onClick={() => handleClick()}>
            {/* Image/Gallery */}
            <div className="w-[95%] lg:w-full aspect-[3/2] lg:aspect-auto lg:h-[50vh] mx-auto relative">
                <Image alt="placeholder" fill src={imageUrl} className="object-cover"/>
                <div className="absolute top-0 w-full h-full bg-white/30"></div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col text-center">
                    <h3 className="text-4xl font-playfairDisplay font-[600] italic">Swimming</h3>
                    <p className="font-playfairDisplay text-xl">Voloume 1</p>
                </div>
            </div>
            {/* Prices */}
            <div className="hidden lg:flex bg-red-500 text-3xl row-span-2">
                Prices
            </div>
            {/* Reviews */}
            <div className="hidden lg:flex bg-blue-500 text-3xl">
                Reviews
            </div>
        </li>
    )
}

export default Category