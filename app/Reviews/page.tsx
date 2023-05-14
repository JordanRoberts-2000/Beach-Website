'use client'

import pageData from '@/Data.json'
import StarInput from './Components/StarInput'
import { useState } from 'react'
import FilterModel from './Components/FilterModel'
import FilterButton from './Components/FilterButton'
import { useStore } from '@/store'

const Page = () => {
    const [startOptions, setStarsOptions] = useState([false,false,false,false,false])
    const [activeActivity, setActiveActivity] = useState(0)
    return (
        <div className='h-[65vh] bg-white flex flex-col'>
            <div className='flex gap-6 items-center font-bold text-lg pb-2'>
                <FilterButton/>
                <div className='flex flex-1 overflow-x-auto gap-6'>
                    <button className={`${activeActivity === 0 && 'text-teal-600'} flex-shrink-0 relative`} onClick={() => setActiveActivity(0)}>
                        All
                        <div className={`${activeActivity === 0 ? 'w-full' : 'w-0'} absolute duration-300 bottom-0 left-[50%] translate-x-[-50%] h-[2px] bg-teal-600`}></div>
                    </button>
                    <button className={`${activeActivity === 1 && 'text-teal-600'} flex-shrink-0 relative`} onClick={() => setActiveActivity(1)}>
                        Swimming
                        <div className={`${activeActivity === 1 ? 'w-full' : 'w-0'} absolute duration-300 bottom-0 left-[50%] translate-x-[-50%] h-[2px] bg-teal-600`}></div>
                    </button>
                    <button className={`${activeActivity === 2 && 'text-teal-600'} flex-shrink-0 relative`} onClick={() => setActiveActivity(2)}>
                        Parasailing
                        <div className={`${activeActivity === 2 ? 'w-full' : 'w-0'} absolute duration-300 bottom-0 left-[50%] translate-x-[-50%] h-[2px] bg-teal-600`}></div>
                    </button>
                    <button className={`${activeActivity === 3 && 'text-teal-600'} flex-shrink-0 relative`} onClick={() => setActiveActivity(3)}>
                        Surfing
                        <div className={`${activeActivity === 3 ? 'w-full' : 'w-0'} absolute duration-300 bottom-0 left-[50%] translate-x-[-50%] h-[2px] bg-teal-600`}></div>
                    </button>
                    <button className={`${activeActivity === 4 && 'text-teal-600'} flex-shrink-0 relative`} onClick={() => setActiveActivity(4)}>
                        Jet skis
                        <div className={`${activeActivity === 4 ? 'w-full' : 'w-0'} absolute duration-300 bottom-0 left-[50%] translate-x-[-50%] h-[2px] bg-teal-600`}></div>
                    </button>
                    <button className={`${activeActivity === 5 && 'text-teal-600'} flex-shrink-0 relative`} onClick={() => setActiveActivity(5)}>
                        Fishing
                        <div className={`${activeActivity === 5 ? 'w-full' : 'w-0'} absolute duration-300 bottom-0 left-[50%] translate-x-[-50%] h-[2px] bg-teal-600`}></div>
                    </button>
                    <button className={`${activeActivity === 6 && 'text-teal-600'} flex-shrink-0 relative`} onClick={() => setActiveActivity(6)}>
                        Vollyball
                        <div className={`${activeActivity === 6 ? 'w-full' : 'w-0'} absolute duration-300 bottom-0 left-[50%] translate-x-[-50%] h-[2px] bg-teal-600`}></div>
                    </button>
                </div>
            </div>
            <div className='px-2 py-4 flex-1 overflow-y-auto'>
            {pageData.map(({reviews}) => (
                reviews.map(({stars, reviewContent, reviewer, date}, index) => (
                    <div className="flex flex-col" key={index}>
                        <div className="flex gap-1 mb-1">
                            {[...Array(stars)].map((x, i) =>
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                            )}
                        </div>
                        <p className="mr-2 font-bold text-sm"><q>{reviewContent}</q></p>
                        <span className="text-bold text-gray-700 text-xs mb-10"><span className="text-lg font-extrabold"></span>{` ${reviewer}: ${date}`}</span>
                    </div>
                ))
            ))}
            </div>
           <FilterModel active={startOptions} setter={setStarsOptions}/>
        </div>
    )
}

export default Page