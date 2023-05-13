'use client'

import { InputValid } from '@/typings'
import { debounce, requiredValidate, OnChangeValidate} from '@/utils/Validation/clientSideValidationFuncions'
import { Validation } from '@/utils/Validation/clientsideInputValidation'
import Checkbox from '@/utils/components/Inputs/CheckInput'
import ErrorMessage from '@/utils/components/InputsMain/ErrorMessage'
import InputIcon from '@/utils/components/InputsMain/InputIcon'
import TextInput from '@/utils/components/InputsMain/TextInput'
import TextInputLabel from '@/utils/components/InputsMain/TextInputLabel'

import Link from 'next/link'
import { SetStateAction, useCallback, useRef, useState } from 'react'

const Page = () => {
    const [hidden, setHidden] = useState(true)
    const [emailValid, setEmailValid] = useState<InputValid>({ valid: null, message: '' })
    const [passwordValid, setPasswordValid] = useState<InputValid>({ valid: null, message: '' })
    let emailInputRef = useRef<HTMLInputElement>(null)
    let passwordInputRef = useRef<HTMLInputElement>(null)
    let stayLoggedInputRef = useRef<HTMLInputElement>(null)
    let onchangeDebounce = useCallback(debounce((input: string, setter: React.Dispatch<React.SetStateAction<InputValid>>, valid: InputValid, validationFunc?: (input: string) => Validation) => OnChangeValidate(input, setter, valid, validationFunc), 200), [])
    return (
        <div className='h-[90vh] flex flex-col bg-white'>
            <h3 className=' translate-y-[calc(-100%-8px)] mx-auto text-3xl font-[600] z-[60] font-playfairDisplay'>Sign in</h3>
            <form className='flex flex-col gap-4 mx-8'>
                <div className='flex flex-col relative'>
                    <TextInputLabel HtmlId={'Email'} className='font-bold'>Email</TextInputLabel>
                    <TextInput HtmlId='Email' ref={emailInputRef} variant={'primary'}
                            className='flex-1 pl-9 bg-gray-100 text-lg shadow shadow-teal-500'
                            onChange={(e: any) => onchangeDebounce(e.target.value, setEmailValid, emailValid)} 
                            onBlur={(e:any) => requiredValidate(e.target.value, setEmailValid, emailValid)}>
                        <ErrorMessage valid={emailValid.valid} message={emailValid.message} variant={'topRight'}/>
                        <InputIcon variant={'insideLeft'}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                        </InputIcon>
                    </TextInput>
                </div>
                <div className='flex flex-col relative'>
                    <TextInputLabel HtmlId={'Password'} className='font-bold'>Password</TextInputLabel>
                    <TextInput HtmlId='Password' ref={passwordInputRef} variant={'primary'} inputType={hidden ? 'password' : ''}
                            className='flex-1 pl-9 bg-gray-100 text-lg shadow shadow-teal-500'
                            onChange={(e: any) => onchangeDebounce(e.target.value, setPasswordValid, passwordValid)} 
                            onBlur={(e:any) => requiredValidate(e.target.value, setPasswordValid, passwordValid)}>
                        <ErrorMessage valid={passwordValid.valid} message={passwordValid.message} variant={'topRight'}/>
                        <InputIcon variant={'insideLeft'}>
                            <button type='button' onClick={() => setHidden((prev) => !prev)} className='mt-1'>
                                {hidden ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                }
                            </button>
                        </InputIcon>
                    </TextInput>
                    <div className='flex mr-2 mt-2'>
                        <Checkbox title={"Stay logged in"} ref={stayLoggedInputRef}/>
                        <span className='whitespace-nowrap ml-auto text-sm text-blue-600'>Forgot Password?</span>
                    </div>
                </div>
                <button type='submit' className='bg-black text-white text-xl font-bold py-2 mt-4 rounded-md translate-y-[-1px]'>Sign In</button>
            </form>
            <div className='mt-2 mx-auto flex gap-4 justify-center items-center'>
                <div className='font-bold'>Dont have an account?</div>
                <Link href={'/SignUp'} className='text-xl font-bold text-blue-600'>Register</Link>
            </div>
            <div className='flex items-center mt-4 w-[95%] mx-auto mb-4'>
                <div className='h-[2px] bg-black flex-1'></div>
                <span className='mx-4 font-bold text-lg'>Or sign in with</span>
                <div className='h-[2px] bg-black flex-1'></div>
            </div>
            <div className='flex flex-col gap-4 mx-8'>
                <button className='bg-black text-white font-bold py-4 rounded-md flex items-center justify-center relative'>
                    <svg className='h-5 fill-white absolute top-[50%] translate-y-[-50%] left-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                    Continue with Google
                </button>
                <button className='bg-black text-white font-bold py-4 rounded-md flex items-center justify-center relative'>
                    <svg className='h-6 fill-white absolute top-[50%] translate-y-[-50%] left-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                    Continue with Facebook
                </button>
                <button className='bg-black text-white font-bold py-4 rounded-md flex items-center justify-center relative'>
                    <svg className='h-6 fill-white absolute top-[50%] translate-y-[-50%] left-[1.5rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    Continue with Apple
                </button>
            </div>   
        </div>
    )
}

export default Page