import pageData from '@/Data.json'

const page = () => {
  return (
    <div className='min-h-[65vh] bg-white flex flex-col'>
        <div className='flex overflow-x-auto gap-6 items-center font-bold text-lg pb-2'>
            <div className='flex-shrink-0 ml-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            </div>
            <div className='flex-shrink-0'>Swimming</div>
            <div className='flex-shrink-0'>Parasailing</div>
            <div className='flex-shrink-0'>Surfing</div>
            <div className='flex-shrink-0'>Jet skis</div>
            <div className='flex-shrink-0'>Fishing</div>
            <div className='flex-shrink-0'>Vollyball</div>
        </div>
        <div className='px-2 py-4'>
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
    </div>
  )
}

export default page