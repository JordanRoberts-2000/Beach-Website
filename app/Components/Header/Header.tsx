import CallToAction from './CallToAction'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  return (
    <header className='fixed flex z-50 top-0 w-full py-4 items-center backdrop-blur-sm'>
        {/* Hamburger Menu */}
        <HamburgerMenu/>
        <CallToAction/>
    </header>
  )
}

export default Header