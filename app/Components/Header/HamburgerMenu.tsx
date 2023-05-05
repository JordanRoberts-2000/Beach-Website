'use client'

import { motion } from "framer-motion"
import { useState } from "react"

const variants = { 
    // errorActive1: { width: ['0rem', '1rem', '1rem', '1rem'], rotate: [0, 0, 0, 45], y: [2], transition: {duration: .6, times: [0, .3]}},
    oneActive: { width: ['2rem'], rotate: 45, y: 10 }, oneInactive: { width: '2rem', },
    twoActive: { width: ['2rem', '0rem'] }, twoInactive: { width: '1.25rem' },
    threeActive: { width: '2rem', rotate: -45, y:-10 }, threeInactive: { width: '1.25rem' }
}

const HamburgerMenu = () => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive((prev) => !prev)
    }
    return (
        <div className='flex flex-col gap-2 ml-2 lg:hidden items-center' onClick={() => handleClick()}>
            <motion.div animate={active ? "oneActive" : "oneInactive"} variants={variants} className='h-[2px] bg-black w-8'></motion.div>
            <motion.div animate={active ? "twoActive" : "twoInactive"} variants={variants} className={`h-[2px] bg-black w-5 ${!active && 'mr-3'}`}></motion.div>
            <motion.div animate={active ? "threeActive" : "threeInactive"} variants={variants} className={`h-[2px] bg-black w-5 ${!active && 'mr-3'}`}></motion.div>
        </div>
    )
}

export default HamburgerMenu