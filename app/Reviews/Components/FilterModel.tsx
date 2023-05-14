import React from 'react'
import StarInput from './StarInput'
import { useStore } from '@/store'

type FilterFormProps =  React.HTMLAttributes<HTMLSpanElement> & {
    active: boolean[],
    setter: React.Dispatch<React.SetStateAction<boolean[]>>
}

const FilterModel = ({active, setter}:FilterFormProps) => {
    const { filterModelActive } = useStore()
    return (
        <div className={`${filterModelActive ? 'translate-y-[0]' : 'translate-y-[100%]'} fixed bottom-0 left-0 transition duration-500 w-full pb-4 rounded-t-2xl border-t-2 bg-white border-black flex flex-col`}>
            <button onClick={() => useStore.setState(() => ({filterModelActive: false}))} className='absolute top-0 right-0 m-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <form className='flex flex-col gap-4'>
                <div className='text-center w-full text-2xl font-[600] font-playfairDisplay mt-2'>Filter</div>
                <div className='flex h-[2rem] px-2'>
                    {[...Array(5)].map((x, i) =>
                        <StarInput key={i} index={i} active={active} setter={setter}/>
                    )}
                </div>
                <select className='flex-1 px-2 py-2 bg-white pl-8 text-center border-2 border-black font-semibold mx-2 rounded-md'>
                    <option>Sort by Newest</option>
                    <option>Sort by Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default FilterModel