'use client'

import { InputValid } from '@/typings'
import { OnChangeValidate, debounce, requiredValidate } from '@/utils/Validation/clientSideValidationFuncions'
import { Validation, fullNameValidation } from '@/utils/Validation/clientsideInputValidation'
import ErrorMessage from '@/utils/components/InputsMain/ErrorMessage'
import InputIcon from '@/utils/components/InputsMain/InputIcon'
import TextInput from '@/utils/components/InputsMain/TextInput'
import TextInputLabel from '@/utils/components/InputsMain/TextInputLabel'
import ValidationConfirmation from '@/utils/components/InputsMain/ValidationConfirmation'
import { useCallback, useRef, useState } from 'react'

type Props = {
    refValue: React.RefObject<HTMLInputElement>,
    valid: InputValid,
    setter: React.Dispatch<React.SetStateAction<InputValid>>
}

const FullName = ({refValue, valid, setter}: Props) => {
    let onchangeDebounce = useCallback(debounce((input: string, setter: React.Dispatch<React.SetStateAction<InputValid>>, valid: InputValid, validationFunc?: (input: string) => Validation) => OnChangeValidate(input, setter, valid, validationFunc), 200), [])
    return (
        <div className='flex flex-col relative'>
            <TextInputLabel HtmlId={'FullName'} className='text-lg font-bold'>Full Name</TextInputLabel>
            <TextInput HtmlId='FullName' ref={refValue} valid={valid.valid} variant={'primary'}
                    className='flex-1 pl-9 bg-gray-100 shadow shadow-teal-500'
                    onChange={(e: any) => onchangeDebounce(e.target.value, setter, valid, fullNameValidation)} 
                    onBlur={(e:any) => requiredValidate(e.target.value, setter, valid, fullNameValidation)}>
                <ValidationConfirmation valid={valid.valid} className='right-0 translate-y-[-50%] top-[50%]'/>
                <ErrorMessage valid={valid.valid} message={valid.message} variant={'topRight'}/>
                <InputIcon variant={'insideLeft'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </InputIcon>
            </TextInput>
        </div>
    )
}

export default FullName