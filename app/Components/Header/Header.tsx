import CallToAction from './CallToAction'

const Header = () => {
  return (
    <header className='fixed flex z-50 top-0 w-full py-4 items-center backdrop-blur-sm'>
        {/* Hamburger Menu */}
        <div className='flex flex-col gap-2 ml-2 lg:hidden'>
            <div className='h-[2px] bg-black w-8'></div>
            <div className='h-[2px] bg-black w-5'></div>
            <div className='h-[2px] bg-black w-5'></div>
        </div>
        <nav className='ml-auto hidden lg:flex'>
            <ul className='flex gap-12 mr-8 font-bold'>
                <li>FISHING</li>
                <li>VOLLYBALL</li>
                <li>PARASAILING</li>
                <li>JET SKIS</li>
                <li>SURFING</li>
                <li>SWIMMING</li>
            </ul>
        </nav>
        <CallToAction/>
    </header>
  )
}

export default Header