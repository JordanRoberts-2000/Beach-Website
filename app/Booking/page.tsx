'use client'

import { emailValidation, passwordValidation } from '@/utils/Validation/clientsideInputValidation'
import Checkbox from '@/utils/components/Inputs/CheckInput'
import TextInput from '@/utils/components/Inputs/TextInput'
import Link from 'next/link'
import { SetStateAction, useRef } from 'react'

const Page = () => {
    let emailInputRef = useRef<HTMLInputElement>(null)
    let passwordInputRef = useRef<HTMLInputElement>(null)
    let stayLoggedInputRef = useRef<HTMLInputElement>(null)
    return (
        <div className='h-[90vh] flex flex-col'>
            <h3 className=' translate-y-[calc(-100%-8px)] mx-auto text-3xl font-[600] z-50 font-playfairDisplay'>Sign in</h3>
            <form className='flex flex-col'>
                <TextInput refValue={emailInputRef} validationFunc={ emailValidation } title={'Email:'} maxLength={50} debounceDuration={300} 
                           tooltip={false} password={false} submitEmpty={false} emtpySetter={null}/>
                <div className='my-2'></div>
                <TextInput refValue={passwordInputRef} validationFunc={ passwordValidation } title={'Password:'} maxLength={20} debounceDuration={200} 
                           tooltip={false} password={false} submitEmpty={false} emtpySetter={null}/>
                <div className='flex w-[85%] mx-auto mt-2'>
                    <Checkbox title={"Stay logged in"} ref={stayLoggedInputRef}/>
                    <span className='whitespace-nowrap ml-auto text-blue-600'>Forgot Password?</span>
                </div>
                <button type='submit' className='bg-black text-white text-xl font-bold py-2 w-[85%] mt-4 mx-auto rounded-md'>Sign In</button>
                <div className='flex items-center mt-4 w-[95%] mx-auto'>
                    <div className='h-[1px] bg-black flex-1'></div>
                    <span className='mx-4'>Or sign in with</span>
                    <div className='h-[1px] bg-black flex-1'></div>
                </div>
                <div className='w-[85%] flex flex-col gap-4 mt-4 mx-auto'>
                    <button className='bg-black text-white text-xl font-bold py-2 uppercase flex items-center justify-center relative'>
                        <svg className='h-5 fill-white absolute top-[50%] translate-y-[-50%] left-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                        Google
                    </button>
                    <button className='bg-black text-white text-xl font-bold py-2 uppercase flex items-center justify-center relative'>
                        <svg className='h-6 fill-white absolute top-[50%] translate-y-[-50%] left-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                        Facebook
                    </button>
                    <button className='bg-black text-white text-xl font-bold py-2 uppercase flex items-center justify-center relative'>
                        <svg className='h-6 fill-white absolute top-[50%] translate-y-[-50%] left-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                        Apple
                    </button>
                </div>
                <p className='w-[85%] mx-auto mt-2 text-blue-300'>By Signing in you are agreeing to the terms and conditions</p>
                <div className='mt-6 mx-auto flex gap-2 items-center'>
                    <div className='text-lg font-bold'>Dont have an account?</div>
                    <Link href={'/SignUp'} className='text-xl font-bold translate-y-[-2px] text-blue-600'>Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Page