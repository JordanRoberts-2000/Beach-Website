'use client'

import { motion } from "framer-motion"
import { useState } from "react"

const variants = { 
    oneActive: { width: ['1.5rem'], rotate: 45, y: 10 }, oneInactive: { width: '2rem', },
    twoActive: { width: ['2rem', '0rem'] }, twoInactive: { width: '1.25rem' },
    threeActive: { width: '1.5rem', rotate: -45, y:-10 }, threeInactive: { width: '1.25rem' }
}

const HamburgerMenu = () => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive((prev) => !prev)
    }
    return (
        <>
            <div className='flex flex-col gap-2 ml-2 lg:hidden items-center z-10' onClick={() => handleClick()}>
                <motion.div animate={active ? "oneActive" : "oneInactive"} variants={variants} className='h-[2px] bg-black w-8'></motion.div>
                <motion.div animate={active ? "twoActive" : "twoInactive"} variants={variants} className={`h-[2px] bg-black w-5 ${!active && 'mr-3'}`}></motion.div>
                <motion.div animate={active ? "threeActive" : "threeInactive"} variants={variants} className={`h-[2px] bg-black w-5 ${!active && 'mr-3'}`}></motion.div>
            </div>
            <nav className={`${!active ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} lg:opacity-100 lg:relative lg:bg-white/0 lg:h-auto 
                            lg:w-auto top-0 fixed h-[100lvh] w-[100%] left-0 bg-white/80 duration-300 lg:ml-auto flex justify-center`}>
                <ul className='flex gap-12 mt-20 lg:mr-8 font-bold flex-col text-center text-3xl lg:text-base lg:flex-row lg:mt-0'>
                    <li className="border-b-2 border-black lg:border-none">FISHING</li>
                    <li className="border-b-2 border-black lg:border-none">VOLLYBALL</li>
                    <li className="border-b-2 border-black lg:border-none">PARASAILING</li>
                    <li className="border-b-2 border-black lg:border-none">JET SKIS</li>
                    <li className="border-b-2 border-black lg:border-none">SURFING</li>
                    <li className="border-b-2 border-black lg:border-none">SWIMMING</li>
                </ul>
            </nav>
        </>
    )
}

export default HamburgerMenu