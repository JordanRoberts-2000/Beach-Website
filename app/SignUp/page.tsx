import React from 'react'
import EmailValidation from './Components/SignUp/Inputs/EmailValidation'
import FirstName from './Components/SignUp/Inputs/FullNameValidation'
import PasswordValidation from './Components/SignUp/Inputs/PasswordValidation'
import ReEnterPasswordValidation from './Components/SignUp/Inputs/ReEnterPasswordValidation'
import Checkbox from '@/utils/components/Inputs/CheckInput'
import SignUpForm from './Components/SignUp/SignUpForm'

const page = () => {
  return (
    <div className='h-[85vh] flex flex-col'>
        <h3 className=' translate-y-[calc(-100%-8px)] mx-auto text-3xl font-[600] z-50 font-playfairDisplay'>Register</h3>
        <div className='flex flex-col'>
            <SignUpForm/>
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
            <div className='mt-6 mx-auto flex gap-2 items-center'>
                <div className='text-lg font-bold'>Already have an account?</div>
                <div className='text-xl font-bold translate-y-[-2px] text-blue-600'>Sign in</div>
            </div>
        </div>
    </div>
  )
}

export default page