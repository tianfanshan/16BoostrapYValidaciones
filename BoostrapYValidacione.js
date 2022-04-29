'use strict';
////////////////////////////////////////////////////////////////////////////////
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
const usersList = document.getElementById('users-list');


////////////////////////////////////////////////////////////////////////////////
// System Functions
/**
 * Hides List section and shows Form section.
 * It uses bootstrap class 'd-none' to hide the section.
 * Adds/removes the class to/from the section as appropriate
 */
const showForm = () => {
    sectForm.classList.remove('d-none');
    sectList.classList.add('d-none');
};


/**
 * Hides Form section and shows List section.
 * It uses bootstrap class 'd-none' to hide the section.
 * Adds/removes the class to/from the section as appropriate
 */
const showList = () => {
    showUsersList();
    sectForm.classList.add('d-none');
    sectList.classList.remove('d-none');
};


/**
 * Saves a new user with form data after checking validity.
 */
const saveNewUser = (ev) => {

    ev.preventDefault();

    // Validations
    if (validateFormData()) {  // All data is valid
        // Save user

        // 1. Get and parse data from localStorage
        let database = JSON.parse(localStorage.getItem('bs_users')) || [];

        // 2. Create new user
        let user = {
            name: formName.value,
            email: formEmail.value,
            password: formPassword1.value
        }

        // 3. Push new user into 'database' array
        database.push(user)

        // 4. Stringifies and saves data into localStorage
        localStorage.setItem('bs_users', JSON.stringify(database))

        // 5. Shows 'successful' alert
        showAlert('New user succesfully created.', 0, 'success');

        // 6. Jump to Users List
        showList();
    }
}


const showUsersList = () => {
    // 1. Delete current list
    usersList.innerHTML = '';

    // 2. Get and parse data from localStorage
    let database = JSON.parse(localStorage.getItem('bs_users')) || [];

    // 3. Loop over database to show every user
    for(let i = 0 ; i < database.length ; i++) {
        const user = database[i];
        usersList.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                Usuario ${i+1}
            </div>
          <div class="card-body">
            <h5 class="card-title">Name: ${user.name}</h5>
            <p class="card-text">Email: ${user.email}</p>
          </div>
        </div>`;
    }
};

// Util functions //////////////////////////////////////////////////////////////

/**
 * Gets data from four inputs and returns an object with four strings.
 *
 * @returns Object with four strings from input data
 */
const getFormData = () => {

    // Get values from 'input' elements
    const name = formName.value;
    const email = formEmail.value;
    const password1 = formPassword1.value;
    const password2 = formPassword2.value;

    // Return an object with shorthand propertie names
    return { name, email, password1, password2 };
};


/**
 * Create a new element for the alert and put it in the alert box with a delay.
 *
 * @param text      String to show in the alert
 * @param plusDelay Miliseconds of added delay (default 0).
 * @param kind      Kind of message (default 'danger').
 */
const showAlert = (text, plusDelay = 0, kind = 'danger') => {

    // Create new 'div' element for the alert
    const newAlert = document.createElement('div');
    // Add BootStrap classes to element: 'alert' and 'alert-...' with the kind
    //  of alert.
    newAlert.classList.add('alert', `alert-${kind}`);
    // Add alert text to element.
    newAlert.innerText = text;

    // Add element to DOM in the alertBox. Now it's shown.
    alertBox.appendChild(newAlert);

    // Delete after 3 seconds plus added delay
    setTimeout(() => { newAlert.remove() }, 3000 + plusDelay);
}


// Validation functions ////////////////////////////////////////////////////////

/**
 * Receives four string parameters and returns true if all of them have some text.
 * @returns true or false, according to the check.
 */
const noneIsEmpty = (txt1, txt2, txt3, txt4) => {
    return txt1 !== "" && txt2 !== "" && txt3 !== "" && txt4 !== "";
};
// Another (more advanced) version of the 'noneIsEmpty' function:
// const noneIsEmpty = (...fields) => fields.every(elem => elem.trim() !== "");


/**
 * Check if the string complies with the regexp expression (is a valid email).
 * @param email String to check
 * @returns     true or false, if email is valid or not
 */
const isEmailValid = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);


/**
 * Check if password complies some conditions
 * @param   password    String to check.
 * @returns             true or false, is password complies conditions or not.
 */
const isPasswordValid = (password) => {
    // Adapted from https://stackoverflow.com/a/19605207
    // This regex will enforce these rules:
    //     At least one upper case English letter, (?=.*?[A-Z])
    //     At least one lower case English letter, (?=.*?[a-z])
    //     Minimum eight in length .{4,} (with the anchors)
    return /^(?=.*?[A-Z])(?=.*?[a-z]).{4,}$/.test(password);
};


/**
 * Check four validations. Store errors, if any. Show errors if any.
 *
 * @returns true or false, if all validations pass or not.
 */
const validateFormData = () => {

    // Get four consts from 'getFormData()' using destructuring
    const { name, email, password1, password2 } = getFormData();

    // Prepare an empty array to store potential errors
    let errors = [];

    // First validation: all fields must have some text
    if (!noneIsEmpty(name, email, password1, password2)) {
        errors.push('Please, fill in all fields.');
    }

    // Second validation: email is valid
    if (!isEmailValid(email)) {
        errors.push('Please, use a valid email.');
    }

    // Third validation: passwords match
    if (password1 !== password2) {
        errors.push('Passwords don\'t match.');
    }

    // Fourth validation: password complies with requirements
    if (!isPasswordValid(password1)) {
        errors.push('Password is not valid: At least one upper case letter, at least one lower case letter, minimum four in length.');
    }

    // errors.length is the number of errors found. If 0, it means there are no errors
    if (errors.length === 0) {

        return true;  // No errors where found

    } else {
        // Show an alert for every error.
        // Delay 2 seconds more every error, to ahve enough time to read it
        for (let i = 0; i < errors.length; i++) {
            showAlert(errors[i], i * 2000);
        }
        return false;  // Some errors where found
    }
};



////////////////////////////////////////////////////////////////////////////////
// Listeners
navBtnForm.addEventListener('click', showForm);
navBtnList.addEventListener('click', showList);
btnNewUser.addEventListener('click', saveNewUser);


////////////////////////////////////////////////////////////////////////////////
// Advanced functions
// (please, don't worry about this part)

// Tiny Simple Hash
// by bryc, from https://stackoverflow.com/a/52171480
const tinySimpleHash = s => {
    for (var i = 0, h = 9; i < s.length;) {
        h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
    }
    return h ^ h >>> 9
};

const getInsecureSalt = () => {
    return Math.random().toString(36).substring(2);
}

const insecureSaltHash = pass => {
    const insecureSalt = getInsecureSalt();
    return insecureSalt + '.' + tinySimpleHash(insecureSalt+pass);
}

////////////////////////////////////////////////////////////////////////////////
// Init

