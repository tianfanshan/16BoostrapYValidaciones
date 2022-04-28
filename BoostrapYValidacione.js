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

////////////////////////////////////////////////////////////////////////////////
// Listeners
navBtnForm.addEventListener('click', showForm);
navBtnList.addEventListener('click', showList);

////////////////////////////////////////////////////////////////////////////////
// Init

