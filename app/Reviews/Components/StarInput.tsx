'use client'

import { forwardRef } from "react"

type StarsInputProps =  React.HTMLAttributes<HTMLSpanElement> & {
    index: number,
    active: boolean[],
    setter: React.Dispatch<React.SetStateAction<boolean[]>>
}

const StarInput = forwardRef<HTMLInputElement, StarsInputProps>(({index, active, setter}, ref) => {
    const handleOnchange = () => {
        let newArr = active.map((value, i) => {
            if(i === index)return !value
            return value
        })
        console.log('new array', newArr)
        setter(newArr)
    }
    return (
            <div className={`${index === 0 && 'rounded-l-lg'} ${index === 4 && 'rounded-r-lg'} relative flex-1 border-2 border-black`}>
                <label className={`absolute whitespace-nowrap pointer-events-none top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] font-[600] text-xl flex items-center gap-1
                        ${active[index] && 'scale-[.95] text-cyan-700'} transition`}>
                    {index + 1}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`h-5  ${active[index] ? 'fill-cyan-700' : 'fill-black'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </label>
                <input onChange={() => handleOnchange()} ref={ref} className='h-full w-full opacity-0' type='checkbox'/>
            </div>
    )
})

StarInput.displayName = 'StarInput'
export default StarInput