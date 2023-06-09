'use client'

import { usePathname } from "next/navigation"

const MainResize = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()
    return (
        <main className={`${(pathname === "/Bookings") && "h-[10vh] overflow-hidden"} w-full lg:h-[100svh] relative`}>
            {children}
        </main>
    )
}

export default MainResize