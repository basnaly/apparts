const validatePassword = (password) => {

    const validationError = 'The password must contain lower and upper case letters, numbers and symbols, 8-12 letters';
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*-_])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*-_]{8,12}$/;
    
    const found = password.match(regularExpression);  
    if (!found) {
        throw new Error(validationError);
    }
};

export default validatePassword
