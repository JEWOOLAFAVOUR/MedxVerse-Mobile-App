import { sendToast } from "./utilis";

export const makeSecurity = (type, data) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    const phonePattern = /^0\d{10}$/;

    const errors = [];

    if (type === 'login') {
        const { email, password } = data;
        if (!email || email.trim() === "") {
            errors.push("Enter a Valid Email Address");
        } else if (!emailPattern.test(email)) {
            errors.push("Enter a Valid Email Address");
        }

        if (!password || password.trim() === "") {
            errors.push("Enter a Valid Password");
        }
    }

    if (type === 'phone') {
        const { phone } = data;
        if (!phone || phone.trim() === "") {
            errors.push("Enter a Valid Phone Number");
        } else if (!phonePattern.test(phone)) {
            errors.push("Invalid Phone Number Format");
        }
    }

    if (type === 'register') {
        const { email, firstName, lastName } = data;
        if (!firstName || firstName.trim() === "") {
            errors.push("Enter a Valid FirstName");
        }

        if (!lastName || lastName.trim() === "") {
            errors.push("Enter a Valid LastName");
        }

        if (!email || email.trim() === "") {
            errors.push("Enter a Valid Email Address");
        } else if (!emailPattern.test(email)) {
            errors.push("Enter a Valid Email Address");
        }
    }

    if (type === 'password') {
        const { password, confirmPassword } = data;

        if (!password || password.trim() === "") {
            errors.push("Enter a Valid Password");
        }

        if (!confirmPassword || confirmPassword.trim() === "") {
            errors.push("Enter a Valid Confirm Password");
        } else if (confirmPassword !== password) {
            errors.push("Password must be same");
        }
    }

    if (type === 'email') {
        const { email } = data;

        if (!email || email.trim() === "") {
            errors.push("Enter a Valid Email Address");
        } else if (!emailPattern.test(email)) {
            errors.push("Enter a Valid Email Address");
        }
    }


    return errors;
};