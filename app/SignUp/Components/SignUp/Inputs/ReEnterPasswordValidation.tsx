'use client'

import { InputValid } from '@/typings'
import { OnChangeValidate, debounce, requiredValidate } from '@/utils/Validation/clientSideValidationFuncions'
import { Validation, emailValidation } from '@/utils/Validation/clientsideInputValidation'
import ErrorMessage from '@/utils/components/InputsMain/ErrorMessage'
import InputIcon from '@/utils/components/InputsMain/InputIcon'
import TextInput from '@/utils/components/InputsMain/TextInput'
import TextInputLabel from '@/utils/components/InputsMain/TextInputLabel'
import ValidationConfirmation from '@/utils/components/InputsMain/ValidationConfirmation'
import { useCallback, useRef, useState } from 'react'

const ReEnterPasswordValidation = ({refValue}: {refValue: any}) => {
    const [passwordValid, setPasswordValid] = useState<InputValid>({ valid: null, message: '' })
    let onchangeDebounce = useCallback(debounce((input: string, validationFunc: (input: string) => Validation, setter: React.Dispatch<React.SetStateAction<InputValid>>, valid: InputValid) => OnChangeValidate(input, validationFunc, setter, valid), 200), [])
    return (
        <div className='flex flex-col relative'>
            <TextInputLabel HtmlId={'FullName'} className='text-lg font-bold'>Re-enter Password</TextInputLabel>
            <TextInput HtmlId='FullName' ref={refValue} valid={passwordValid.valid} variant={'primary'}
                    className='flex-1 pl-9 bg-gray-100 text-lg'
                    onChange={(e: any) => onchangeDebounce(e.target.value, emailValidation, setPasswordValid, passwordValid)} 
                    onBlur={(e:any) => requiredValidate(e.target.value, setPasswordValid, passwordValid, emailValidation)}>
                <ValidationConfirmation valid={passwordValid.valid} className='right-0 translate-y-[-50%] top-[50%]'/>
                <ErrorMessage valid={passwordValid.valid} message={passwordValid.message} variant={'topRight'}/>
                <InputIcon variant={'insideLeft'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </InputIcon>
            </TextInput>
        </div>
    )
}

export default ReEnterPasswordValidation