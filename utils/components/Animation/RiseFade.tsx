'use client'

import { useStore } from '@/store'
import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode,
    duration: number,
    delay?: number,
    awaitPreload: boolean
}

const RiseFade = ({children, duration, delay, awaitPreload}: Props) => {
    const { imageLoaded } = useStore()
    return (
        <div className="overflow-hidden">
            {awaitPreload ?
            <motion.div initial="hidden" animate={imageLoaded && "visible"} transition={{ duration: duration, delay: delay }}
                        variants={{ visible: { opacity: 1, y: 0}, hidden: { opacity: 0, y:20} }}>
                    {children}
            </motion.div>
            :
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: duration, delay: delay }}
                        variants={{ visible: { opacity: 1, y: 0}, hidden: { opacity: 0, y:20} }}>
                    {children}
            </motion.div>
            }
        </div>
    )
}

export default RiseFade