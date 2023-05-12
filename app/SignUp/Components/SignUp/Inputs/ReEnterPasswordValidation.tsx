'use client'

import { InputValid } from '@/typings'
import { OnChangeValidate, debounce, requiredValidate } from '@/utils/Validation/clientSideValidationFuncions'
import { Validation, passwordValidation } from '@/utils/Validation/clientsideInputValidation'
import ErrorMessage from '@/utils/components/InputsMain/ErrorMessage'
import InputIcon from '@/utils/components/InputsMain/InputIcon'
import TextInput from '@/utils/components/InputsMain/TextInput'
import TextInputLabel from '@/utils/components/InputsMain/TextInputLabel'
import ValidationConfirmation from '@/utils/components/InputsMain/ValidationConfirmation'
import { useCallback, useState } from 'react'

type Props = {
    refValue: React.RefObject<HTMLInputElement>,
    valid: InputValid,
    setter: React.Dispatch<React.SetStateAction<InputValid>>
}

const ReEnterPasswordValidation = ({refValue, valid, setter}: Props) => {
    const [hidden, setHidden] = useState(true)
    let onchangeDebounce = useCallback(debounce((input: string, validationFunc: (input: string) => Validation, setter: React.Dispatch<React.SetStateAction<InputValid>>, valid: InputValid) => OnChangeValidate(input, validationFunc, setter, valid), 200), [])
    return (
        <div className='flex flex-col relative'>
            <TextInputLabel HtmlId={'FullName'} className='text-lg font-bold'>Re-enter Password</TextInputLabel>
            <TextInput HtmlId='FullName' ref={refValue} valid={valid.valid} variant={'primary'} inputType={hidden ? 'password' : ''}
                    className='flex-1 pl-9 bg-gray-100 shadow shadow-teal-500'
                    onChange={(e: any) => onchangeDebounce(e.target.value, passwordValidation, setter, valid)} 
                    onBlur={(e:any) => requiredValidate(e.target.value, setter, valid, passwordValidation)}>
                <ValidationConfirmation valid={valid.valid} className='right-0 translate-y-[-50%] top-[50%]'/>
                <ErrorMessage valid={valid.valid} message={valid.message} variant={'bottomMiddle'} className='whitespace-nowrap mt-[2px]'/>
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
        </div>
    )
}

export default ReEnterPasswordValidation