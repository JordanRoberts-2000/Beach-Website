'use client'

import { useStore } from "@/store"
import { motion } from "framer-motion"

const Fade = ({children}: {children: React.ReactNode}) => {
    const { categoryClicked } = useStore()
    return (
        <motion.div initial={{opacity: 0}} animate={categoryClicked !== "" ? "visible" : "hidden"} className="flex flex-col"
                    variants={{ visible: { opacity: 1, transition: {duration: .3, delay: .6}}, hidden: { opacity: 0, transition: {duration: 0.1}} }}>
            {children}
        </motion.div>
    )
}

export default Fade