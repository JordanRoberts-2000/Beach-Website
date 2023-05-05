'use client'

import { motion } from "framer-motion"

const Fade = ({children}: {children: React.ReactNode}) => {
  return (
    <motion.div initial={{opacity: 0}}>
        {children}
    </motion.div>
  )
}

export default Fade