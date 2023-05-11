'use client'

import Checkbox from '@/utils/components/Inputs/CheckInput'
import EmailValidation from './Inputs/EmailValidation'
import FirstName from './Inputs/FullNameValidation'
import PasswordValidation from './Inputs/PasswordValidation'
import ReEnterPasswordValidation from './Inputs/ReEnterPasswordValidation'
import { useRef } from 'react'

const SignUpForm = () => {
    let nameInputRef = useRef<HTMLInputElement>(null)
    let reEnerPasswordInputRef = useRef<HTMLInputElement>(null)
    let newletterCheckbox = useRef(null)
    return (
        <form>
            <div className='flex flex-col gap-2 px-8'>
                <FirstName refValue={nameInputRef}/>
                <EmailValidation/>
                <PasswordValidation/>
                <ReEnterPasswordValidation refValue={reEnerPasswordInputRef}/>
            </div>
            <Checkbox title={'Sign up to our newletter for exciting events and offers'} refValue={newletterCheckbox}/>
            <button type='submit' className='bg-black text-white text-xl font-bold py-2 w-[85%] mt-4 mx-auto rounded-md'>Register</button>
        </form>
    )
}

export default SignUpForm