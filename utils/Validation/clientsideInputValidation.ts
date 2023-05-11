export type Validation = {
    valid: boolean,
    error: string
}

export const usernameValidation = (username: string) => {
    const spaceCheck = username.match(/\s/)
    if(spaceCheck)return {valid: false, error: 'Cannot use spaces'}
    const valid = username.match(/^\d*[a-zA-Z][a-zA-Z\d]*$/)
    if(!valid)return {valid: false, error: 'Only letters and numbers are valid'}
    if(username.length < 6)return {valid: false, error: 'Username is too short'}
    return {valid: true, error: ''}
}

export const textValidation = (username: string) => {
    const valid = username.match(/^[a-zA-Z]+$/)
    if(!valid)return {valid: false, error: 'Only letters and numbers are valid'}
    return {valid: true, error: ''}
}

export const urlValidation = (url: string) => {
    const valid = url.match(/(https?:\/\/.*\.(?:png|jpg|jpeg|webp))/i)
    if(!valid)return {valid: false, error: 'Invalid Url'}
    return {valid: true, error: ''}
}

export const emailValidation = (email:string) => {
    const valid = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    if(valid)return {valid: true, error: ''}
    return {valid: false, error: 'Email is invalid'}
}

export const singleNameValidation = (name: string) => {
    const spaceCheck = name.match(/\s/)
    if(spaceCheck)return {valid: false, error: 'Cannot use spaces'}
    const valid = name.match(/^[a-zA-Z]+$/)
    if(!valid)return {valid: false, error: 'Only letters are valid'}
    if(name.length < 3)return {valid: false, error: 'Name is too short'}
    return {valid: true, error: ''}
}

export const fullNameValidation = (name: string) => {
    const valid = name.replace(' ', '').match(/^[a-zA-Z\s]*$/)
    if(!valid)return {valid: false, error: 'Only letters are valid'}
    const secondName = name.match(/([^\s]+\s)+[^\s]+/g)
    if(!secondName)return {valid: false, error: 'Only one name, 2 required'}
    if(name.length < 3)return {valid: false, error: 'Name is not full'}
    return {valid: true, error: ''}
}

export const passwordValidation = (password: string) => {
    const capitalFound = password.match(/[A-Z]/)
    if(!capitalFound)return {valid: false, error: 'Needs atleast one capital letter'}
    const numberFound = password.match(/\d/)
    if(!numberFound)return {valid: false, error: 'Needs atleast one number'}
    const specialFound = password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)
    if(!specialFound)return {valid: false, error: 'Needs atleast one special character'}
    if(password.length < 8)return {valid: false, error: 'Password is too short'}
    return {valid: true, error: ''}
}