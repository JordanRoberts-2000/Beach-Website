'use client'

import Checkbox from '@/utils/components/Inputs/CheckInput'
import EmailValidation from './Inputs/EmailValidation'
import FullName from './Inputs/FullNameValidation'
import PasswordValidation from './Inputs/PasswordValidation'
import ReEnterPasswordValidation from './Inputs/ReEnterPasswordValidation'
import { useRef, useState } from 'react'
import { emailValidation, fullNameValidation, passwordValidation } from '@/utils/Validation/clientsideInputValidation'
import { InputValid } from '@/typings'

const SignUpForm = () => {
    let nameInputRef = useRef<HTMLInputElement>(null)
    let emailInputRef = useRef<HTMLInputElement>(null)
    let passwordInputRef = useRef<HTMLInputElement>(null)
    let reEnerPasswordInputRef = useRef<HTMLInputElement>(null)
    let newletterCheckbox = useRef<HTMLInputElement>(null)
    const [formErrorMessage, setFormErrorMessage] = useState('')
    const [nameValid, setNameValid] = useState<InputValid>({ valid: null, message: '' })
    const [emailValid, setEmailValid] = useState<InputValid>({ valid: null, message: '' })
    const [passwordValid, setPasswordValid] = useState<InputValid>({ valid: null, message: '' })
    const [reEnterpasswordValid, setReEnterPasswordValid] = useState<InputValid>({ valid: null, message: '' })
    const handleSubmit = (e:any) => {
        e.preventDefault()
        if(nameInputRef.current!.value === '')setNameValid({ valid: false, message: 'Required' })
        if(emailInputRef.current!.value === '')setEmailValid({ valid: false, message: 'Required' })
        if(passwordInputRef.current!.value === '')setPasswordValid({ valid: false, message: 'Required' })
        if(reEnerPasswordInputRef.current!.value === '')setReEnterPasswordValid({ valid: false, message: 'Required' })
        if(!fullNameValidation(nameInputRef.current!.value).valid)return
        if(!emailValidation(emailInputRef.current!.value).valid)return
        if(!passwordValidation(passwordInputRef.current!.value).valid)return
        if(passwordInputRef.current!.value !== reEnerPasswordInputRef.current!.value){
            return setFormErrorMessage("Passwords did not match")
        }
    }
    return (
        <form className='flex flex-col' onSubmit={(e) => handleSubmit(e)}>
            <div className='flex flex-col gap-2 px-8'>
                <FullName refValue={nameInputRef} valid={nameValid} setter={setNameValid}/>
                <EmailValidation refValue={emailInputRef} valid={emailValid} setter={setEmailValid}/>
                <PasswordValidation refValue={passwordInputRef} valid={passwordValid} setter={setPasswordValid}/>
                <ReEnterPasswordValidation refValue={reEnerPasswordInputRef} valid={reEnterpasswordValid} setter={setReEnterPasswordValid}/>
            </div>
            <Checkbox title={'Sign up to our newletter'} ref={newletterCheckbox} className='mx-auto mt-2 gap-4'/>
            <div className='mx-auto font-semibold text-sm text-red-600 h-4'>{formErrorMessage}</div>
            <button type='submit' className='bg-black text-white text-xl font-bold py-2 w-[85%] mt-4 mx-auto rounded-md'>Register</button>
        </form>
    )
}

export default SignUpForm