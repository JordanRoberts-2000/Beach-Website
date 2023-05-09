'use client'

import { useStore } from '@/store'
import RisingFallingModel from '@/utils/components/RisingFallingModel'
import { useRef } from 'react'

const FindUsModel = () => {
    const { findUsModal } = useStore()
    const backgroundRef = useRef<HTMLDivElement>(null)
    const exitModel = (e:any) => {
        if(e.target !== backgroundRef.current)return
        useStore.setState(() => ({findUsModal: false}))
    }
    return (
        <RisingFallingModel ref={backgroundRef} active={findUsModal} onClick={(e) => exitModel(e)} className='top-[40%] w-[90%] aspect-square bg-white'>
           <iframe className='h-full w-full' loading="lazy" allowFullScreen
                   src="https://www.google.com/maps/embed/v1/view?zoom=16&center=37.8267,-122.4230&key=AIzaSyCYWyEmTQCbkPCiobCV00TsNtcAdPEeJkI"></iframe>
        </RisingFallingModel>
    )
}

export default FindUsModel