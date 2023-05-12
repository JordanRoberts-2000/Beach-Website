'use client'

import CallToAction from './CallToAction'
import HamburgerMenu from './HamburgerMenu'
import { useStore } from '@/store'

const Header = () => {
  const {navActive } = useStore()
  return (
    <header className={`${navActive ? 'z-[70]' : 'z-50'} fixed flex top-0 w-full py-4 items-center backdrop-blur-sm`}>
        {/* Hamburger Menu */}
        <HamburgerMenu/>
        <CallToAction/>
    </header>
  )
}

export default Header