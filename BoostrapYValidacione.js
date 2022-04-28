'use strict';
/**
 * Exercise Bootstrap and Validation
 *      for     The Bridge
 *      by      Shan & Xavi
 * 2022-04-28
 */

////////////////////////////////////////////////////////////////////////////////
// Constants
const navBtnForm = document.querySelector('#nav-btn-form');
const navBtnList = document.querySelector('#nav-btn-list');
const sectForm = document.querySelector('#form');
const sectList = document.querySelector('#list');

const formName = document.getElementById('name')
const formEmail = document.getElementById('email')
const formPassword1 = document.getElementById('password1')
const formPassword2 = document.getElementById('password2')
const btnNewUser = document.getElementById('btn-new-user')
const alertBox = document.querySelector('#alert-box');


////////////////////////////////////////////////////////////////////////////////
// Functions
const showForm = () => {
    sectForm.classList.remove('d-none');
    sectList.classList.add('d-none');
};

const showList = () => {
    sectForm.classList.add('d-none');
    sectList.classList.remove('d-none');
};

const saveNewUser = (ev) => {

    ev.preventDefault();

    // Validations
    if (validateFormData()) {
        // Save user
        let database = JSON.parse(localStorage.getItem('bs_users')) || [];

        let user = {
            name: formName.value,
            email: formEmail.value,
            password: formPassword1.value
        }

        database.push(user)

        localStorage.setItem('bs_users', JSON.stringify(database))

        showAlert('New user succesfully created.', 0, 'success');

        // Jump to Users List
        showList();
    }
}

// Util functions //////////////////////////////////////////////////////////////

const getFormData = () => {

    const name = formName.value;
    const email = formEmail.value;
    const password1 = formPassword1.value;
    const password2 = formPassword2.value;

    return {name, email, password1, password2};
};

// Create a new element for the alert and put it in the alert box for 3 seconds
const showAlert = (text, plusDelay=0, kind='danger') => {

    // Create element with classes and text
    const newAlert = document.createElement('div');
    newAlert.classList.add('alert', `alert-${kind}`);
    newAlert.innerText = text;

    // Add element to DOM
    alertBox.appendChild(newAlert);

    // Delete after 3 seconds
    setTimeout(()=>{newAlert.remove()}, 3000+plusDelay);
}

// Validation functions ////////////////////////////////////////////////////////

// Returns true if none of parameters is an empty string (after trim)
const noneIsEmpty = (...fields) => fields.every(elem => elem.trim() !== "");

const isEmailValid = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);

const isPasswordValid = (password) => {
    // Adapted from https://stackoverflow.com/a/19605207
    // This regex will enforce these rules:
    //     At least one upper case English letter, (?=.*?[A-Z])
    //     At least one lower case English letter, (?=.*?[a-z])
    //     Minimum eight in length .{4,} (with the anchors)
    return /^(?=.*?[A-Z])(?=.*?[a-z]).{4,}$/.test(password);
};

const validateFormData = () => {

    const {name, email, password1, password2} = getFormData();

    let errors = [];

    if (!noneIsEmpty(name, email, password1, password2)) {
        errors.push('Please, fill in all fields.');
    }
    if (!isEmailValid(email)) {
        errors.push('Please, use a valid email.');
    }
    if (password1 !== password2) {
        errors.push('Passwords don\'t match.');
    }
    if (!isPasswordValid(password1)) {
        errors.push('Password is not valid: At least one upper case letter, at least one lower case letter, minimum four in length.');
    }

    if (errors.length === 0) {
        return true;

    } else {
        for (let i=0; i<errors.length; i++) {
            showAlert(errors[i], i*2000);
        }
        return false;
    }
};



////////////////////////////////////////////////////////////////////////////////
// Listeners
navBtnForm.addEventListener('click', showForm);
navBtnList.addEventListener('click', showList);
btnNewUser.addEventListener('click', saveNewUser);

////////////////////////////////////////////////////////////////////////////////
// Init

