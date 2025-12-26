const validateLogin = (email: string, password: string, fullName?: string): string | null => {
    const testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const testPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(fullName) {
        const testFullName = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(fullName);
        if(!testFullName) return "Please enter your Full Name";
    }
    if(!testEmail) return "Email Id not valid";
    if(!testPassword) return "Password not valid, requires atleast 1 uppercase, 1 lowercase, 1 special character 1 numrical";
    return null;
};

export default validateLogin;