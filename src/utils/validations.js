export function required(value ) {
    return value != null && value !== ""
}

export function fieldValidation(value, custom, regex) {
    
    const email = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    let result = ''
    if(custom == 'email') {
        result =  email.test(value)
    } else {
        const expr = new RegExp(regex)
        result =  expr.test(value)
    }

    console.log(result)
    return result
}