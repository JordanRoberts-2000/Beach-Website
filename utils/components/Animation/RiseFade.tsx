'use client'

import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode,
    duration: number,
    delay?: number
}

const RiseFade = ({children, duration, delay}: Props) => {
  return (
    <div className="overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: duration, delay: delay }}
                variants={{ visible: { opacity: 1, y: 0}, hidden: { opacity: 0, y:20} }}>
                {children}
        </motion.div>
    </div>
  )
}

export default RiseFade