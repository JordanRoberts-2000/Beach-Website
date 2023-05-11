'use client'

import { InputValid } from '@/typings'
import { OnChangeValidate, debounce, requiredValidate } from '@/utils/Validation/clientSideValidationFuncions'
import { Validation, emailValidation } from '@/utils/Validation/clientsideInputValidation'
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

const EmailValidation = ({refValue, valid, setter}: Props) => {
    let onchangeDebounce = useCallback(debounce((input: string, validationFunc: (input: string) => Validation, setter: React.Dispatch<React.SetStateAction<InputValid>>, valid: InputValid) => OnChangeValidate(input, validationFunc, setter, valid), 200), [])
    return (
        <div className='flex flex-col relative'>
            <TextInputLabel HtmlId={'First Name'} className='text-lg font-bold'>Email</TextInputLabel>
            <TextInput HtmlId='First Name' ref={refValue} valid={valid.valid} variant={'primary'}
                    className='flex-1 pl-9 bg-gray-100 text-lg'
                    onChange={(e: any) => onchangeDebounce(e.target.value, emailValidation, setter, valid)} 
                    onBlur={(e:any) => requiredValidate(e.target.value, setter, valid, emailValidation)}>
                <ValidationConfirmation valid={valid.valid} className='right-0 translate-y-[-50%] top-[50%]'/>
                {/* <Tooltip/> */}
                <ErrorMessage valid={valid.valid} message={valid.message} variant={'topRight'}/>
                <InputIcon variant={'insideLeft'}>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </InputIcon>
            </TextInput>
        </div>
    )
}

export default EmailValidation