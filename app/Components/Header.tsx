import React from 'react'

const Header = () => {
  return (
    <header className='fixed flex z-10 top-0 w-full pt-4 items-center'>
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
        <button className='bg-black text-white px-8 py-[2px] rounded-sm font-bold mr-2 lg:mr-4 ml-auto lg:ml-0'>Book</button>
    </header>
  )
}

export default Header