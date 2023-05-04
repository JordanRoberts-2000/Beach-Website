'use client'

import { emailValidation, passwordValidation } from '@/utils/Validation/clientsideInputValidation'
import Checkbox from '@/utils/components/Inputs/CheckInput'
import TextInput from '@/utils/components/Inputs/TextInput'
import { SetStateAction, useRef } from 'react'

const Page = () => {
    let emailInputRef = useRef<HTMLInputElement>(null)
    let passwordInputRef = useRef<HTMLInputElement>(null)
    let stayLoggedInputRef = useRef<HTMLInputElement>(null)
    return (
        <div className='h-[85vh] flex flex-col'>
            <h3 className=' translate-y-[calc(-100%-8px)] mx-auto text-3xl font-[600] z-50 font-playfairDisplay'>Sign in</h3>
            <form className='flex flex-col'>
                <TextInput refValue={emailInputRef} validationFunc={ emailValidation } title={'Email:'} maxLength={50} debounceDuration={300} 
                           tooltip={false} password={false} submitEmpty={false} emtpySetter={null}/>
                <div className='my-2'></div>
                <TextInput refValue={passwordInputRef} validationFunc={ passwordValidation } title={'Password:'} maxLength={20} debounceDuration={200} 
                           tooltip={false} password={false} submitEmpty={false} emtpySetter={null}/>
                <div className='flex w-[85%] mx-auto mt-2'>
                    <Checkbox title={"Stay logged in"} refValue={stayLoggedInputRef}/>
                    <span className='whitespace-nowrap ml-auto text-blue-600'>Forgot Password?</span>
                </div>
                <button type='submit' className='bg-black text-white text-xl font-bold py-2 w-[85%] mt-4 mx-auto rounded-md'>Sign In</button>
                <div className='flex items-center mt-4 w-[95%] mx-auto'>
                    <div className='h-[1px] bg-black flex-1'></div>
                    <span className='mx-4'>Or sign in with</span>
                    <div className='h-[1px] bg-black flex-1'></div>
                </div>
                <div className='w-[85%] flex flex-col gap-4 mt-4 mx-auto'>
                    <button className='bg-black text-white text-xl font-bold py-2 uppercase'>Google</button>
                    <button className='bg-black text-white text-xl font-bold py-2 uppercase'>Facebook</button>
                    <button className='bg-black text-white text-xl font-bold py-2 uppercase'>Apple</button>
                </div>
                <p className='w-[85%] mx-auto mt-2 text-blue-300'>By Signing in you are agreeing to the terms and conditions</p>
                <div className='mt-6 mx-auto flex gap-2 items-center'>
                    <div className='text-lg font-bold'>Dont have an account?</div>
                    <div className='text-xl font-bold translate-y-[-2px] text-blue-600'>Register</div>
                </div>
            </form>
        </div>
    )
}

export default Page