'use client'

import { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"
import { forwardRef } from "react"

const varients = {
    active: { y: '-50%', x: '-50%', transition: { type: 'spring', damping: 15}},
    inactive: { y: '100vh', x: '-50%'},
    visible: {opacity: 1, },
    invisible: {opacity: 0}
}

type ModelProps = HTMLMotionProps<"div"> & {
    active: boolean
}

const RisingFallingModel = forwardRef<HTMLDivElement ,ModelProps>(({children, className, active, ...rest}, ref) => {
    return (
        <motion.div ref={ref} className={`fixed z-50 w-[100%] h-[100lvh] bg-black/70 left-0 top-0 ${!active && ' pointer-events-none'} opacity-0`}
                    variants={varients} animate={active ? 'visible' : 'invisible'} {...rest}>
            <motion.div variants={varients} animate={active ? 'active' : 'inactive'} 
                    className={`absolute left-[50%] translate-x-[-50%] translate-y-[100vh] ${className}`}>
                {children}
            </motion.div>
        </motion.div>
    )
})

export default RisingFallingModel