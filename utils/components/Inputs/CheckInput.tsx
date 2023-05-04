'use client'

import { Dispatch, SetStateAction } from "react"

type Props = {
    title: string,
    refValue: React.RefObject<HTMLInputElement>,
}

const Checkbox = ({title, refValue}:Props) => {
    return (
        <div className="checkbox-wrapper-4 flex">
            <input ref={refValue} className="inp-cbx absolute invisible" id="terms" type="checkbox"/>
            <label className="cbx hover:bg-[rgba(3,154,114,0.06)]" htmlFor="terms">
                <span className='rounded w-[18px] h-[18px] relative border border-gray-300 scale-100 transition-[all_0.2s_ease] shadow-[0_1px_1px_rgba(0,16,75,0.05)]'>
                    <svg className=' stroke-white fill-none absolute top-[3px] left-[2px] delay-100 transition-[all_0.3s_ease]' width="12px" strokeWidth={2} strokeLinecap='round' strokeDashoffset={'16px'} strokeLinejoin='round' strokeDasharray={'16px'} height="10px"><use xlinkHref="#check-4"></use></svg>
                </span>
                <span className='text-sm whitespace-nowrap'>{title}</span><br/>
            </label>
            <svg className="inline-svg absolute w-0 h-0 pointer-events-none select-none"><symbol id="check-4" viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></symbol></svg>
        </div>
    )
}

export default Checkbox