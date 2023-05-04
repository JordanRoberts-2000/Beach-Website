'use client'

import { useStore } from '@/store'

const ScrollLock = ({children}: { children: React.ReactNode}) => {
    const { bodyLocked } = useStore()
    return (
        <body className={`${bodyLocked && "overflow-hidden"}`}>
            {children}
        </body>
    )
}

export default ScrollLock