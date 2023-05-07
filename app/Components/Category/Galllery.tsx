import React from 'react'

const Galllery = ({active}: {active: boolean}) => {
  return (
    <>
        <div className={`${active ? "opacity-100" : "opacity-0"} duration-300 font-bold z-[10] text-xl mx-auto w-fit translate-y-[-50%] border-4 px-2 border-black`}>
            GALLERY
        </div>
        <div className='flex gap-4 relative overflow-x-scroll px-4 mb-2'>
            <div className='flex-shrink-0 w-[70%] aspect-video bg-blue-300'></div>
            <div className='flex-shrink-0 w-[70%] aspect-video bg-blue-300'></div>
            <div className='flex-shrink-0 w-[70%] aspect-video bg-blue-300'></div>
            <div className='flex-shrink-0 w-[70%] aspect-video bg-blue-300'></div>
            <div className='flex-shrink-0 w-[70%] aspect-video bg-blue-300'></div>
        </div>
    </>
  )
}

export default Galllery