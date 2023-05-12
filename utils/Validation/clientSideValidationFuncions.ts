import { Validation } from "./clientsideInputValidation"

type InputValid = {
    valid: null | boolean,
    message: string
}

export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(cb:F, delay:number) => {
    let timeOut:ReturnType<typeof setTimeout>
    return (...args: Parameters<F>) => {
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

export const requiredField = (input: string, setValid: React.Dispatch<React.SetStateAction<InputValid>>, valid: InputValid) => {
    if(valid.message !== 'Required' && input.length === 0)setValid({ valid: null, message: 'Required' })
}

export const requiredValidate = (input: string, setValid: React.Dispatch<React.SetStateAction<InputValid>>, valid: InputValid, validationFunc?: (input: string) => Validation) => {
    if(valid.message !== 'Required' && input.length === 0)return setValid({ valid: false, message: 'Required' })
    if(!validationFunc)return
    const result = validationFunc(input)
    if(!result.valid && valid.valid !== false){
        if(valid.valid){
            setValid({ valid: null, message: valid.message })
            return setTimeout(() => {
                setValid({ valid: false, message: result.error })
            }, 600)
        }
        return setValid({ valid: false, message: result.error })
    }
}

export const OnChangeValidate = (input: string, setter: React.Dispatch<React.SetStateAction<InputValid>>, valid: InputValid, validationFunc?: (input: string) => Validation) => {
    if(!validationFunc){
        if(valid.valid !== null)setter({ valid: null, message: valid.message })
        return
    }
    const result: Validation = validationFunc(input)
    if(result.valid && valid.valid !== true){
            if(valid.valid === false){
                setter({ valid: null, message: valid.message })
                return setTimeout(() => {
                    setter({ valid: true, message: valid.message })
                }, 600)
            }
        return setter({ valid: true, message: valid.message })
    }
    if(valid.valid !== null && !result.valid)setter({ valid: null, message: valid.message })
}