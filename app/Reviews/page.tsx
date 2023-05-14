'use client'

import pageData from '@/Data.json'
import StarInput from './Components/StarInput'
import { useState } from 'react'
import FilterModel from './Components/FilterModel'
import FilterButton from './Components/FilterButton'

const Page = () => {
    const [startOptions, setStarsOptions] = useState([false,false,false,false,false])
    return (
        <div className='h-[65vh] bg-white flex flex-col'>
            <div className='flex gap-6 items-center font-bold text-lg pb-2'>
                <FilterButton/>
                <div className='flex flex-1 overflow-x-auto gap-6'>
                    <div className='flex-shrink-0'>Swimming</div>
                    <div className='flex-shrink-0'>Parasailing</div>
                    <div className='flex-shrink-0'>Surfing</div>
                    <div className='flex-shrink-0'>Jet skis</div>
                    <div className='flex-shrink-0'>Fishing</div>
                    <div className='flex-shrink-0'>Vollyball</div>
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