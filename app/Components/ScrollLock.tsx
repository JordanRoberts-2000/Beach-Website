'use client'

import { useStore } from '@/store'
import { useEffect, useState } from 'react'

const ScrollLock = ({children}: { children: React.ReactNode}) => {
    const { bodyLocked, imageLoaded } = useStore()
    return (
        <body className={`${bodyLocked && "overflow-hidden"} ${imageLoaded ? "opacity-100" : "opacity-0 overflow-hidden"} duration-300`}>
            {children}
        </body>
    )
}

export default ScrollLock