'use strict';

////////////////////////////////////////////////////////////////////////////////
// Constants
const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formPassword1 = document.querySelector('#password1');
const formPassword2 = document.querySelector('#password2');
const alertBox = document.querySelector('#alert-box');

////////////////////////////////////////////////////////////////////////////////
// Functions
const getFormData = () => {

    const name = formName.value;
    const email = formEmail.value;
    const password1 = formPassword1.value;
    const password2 = formPassword2.value;

    return {name, email, password1, password2};
};

// Returns true if none of parameters is an empty string (after trim)
const noneIsEmpty = (...fields) => fields.every(elem => elem.trim() !== "");

const isEmailValid = (email) => /(\w+?@\w+?\x2E.+)/.test(email.value);

const isPasswordValid = (password) => {
    // https://stackoverflow.com/a/19605207
    // This regex will enforce these rules:
    //     At least one upper case English letter, (?=.*?[A-Z])
    //     At least one lower case English letter, (?=.*?[a-z])
    //     At least one digit, (?=.*?[0-9])
    //     At least one special character, (?=.*?[#?!@$%^&*-])
    //     Minimum eight in length .{8,} (with the anchors)
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
};

const validateFormData = () => {

    const {name, email, password1, password2} = getFormData();

    let errors = [];
    if (!noneIsEmpty(name, email, password1, password2)) {
        errors.push('Please, fill in all fields.');
    }
    errors += isEmailValid(email) ? '' : '<li>Please, use a valid email.</li>';
    errors += password1 === password2 ? '' : '<li>Passwords don\'t match</li>';
    errors += isPasswordValid(password1) ? '' : '<li>Password is not valid: At least one upper case letter, at least one lower case letter, at least one digit, at least one special character (?=.*?[#?!@$%^&*-]), minimum eight in length.</li>';
};

// Create a new element for the alert and put it in the alert box for 3 seconds
const showAlert = (text, kind='danger') => {

    // Create element with classes and text
    const newAlert = document.createElement('div');
    newAlert.classList.add('alert', `alert-${kind}`);
    newAlert.innerText = text;

    // Add element to DOM
    alertBox.appendChild(newAlert);

    // Delete after 3 seconds
    setTimeout(()=>{newAlert.remove()}, 3000);
}
