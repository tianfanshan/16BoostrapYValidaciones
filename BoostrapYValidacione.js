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

const nombre = document.getElementById('name')
const correo = document.getElementById('email')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
const btn = document.getElementById('btn')





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

const guardarInformacion = () => {
    
    let database = JSON.parse(localStorage.getItem('myForm')) || [];

    let information ={
        nombre:nombre.value,
        correo:correo.value,
        password:password1.value
    }
    
    database.push(information)

    localStorage.setItem('myForm', JSON.stringify(database))
}



////////////////////////////////////////////////////////////////////////////////
// Listeners
navBtnForm.addEventListener('click', showForm);
navBtnList.addEventListener('click', showList);
btn.addEventListener('click', guardarInformacion);

////////////////////////////////////////////////////////////////////////////////
// Init

