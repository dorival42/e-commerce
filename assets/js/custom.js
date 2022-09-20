'use strict';

// modal variables

const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay  = document.querySelector('[data-modal-overlay]');

// modal function

const modalCloseFunc = function() { modal.classList.add('closed')}

// modal eventListener

modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click',  modalCloseFunc);

//Notification toast variables

const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

//Notification Function 
const notificationToastFunc = function() {
    notificationToast.classList.add('closed')};

// Notification toast evenlistener

toastCloseBtn.addEventListener('click', notificationToastFunc);

