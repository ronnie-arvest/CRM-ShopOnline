'use strict';

const popup = document.querySelector('#popup');
const popupBody = document.querySelector('.product__body');
const openBtn = document.querySelector('.main-content__button');
const closePopup = document.querySelector('.product__close');
const overLay = document.querySelector('.main');

openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', event => {
  event.stopPropagation();
});

popup.addEventListener('click', (event) => {
  if (!popupBody.contains(event.target)) {
    popup.style.display = 'none';
  }
});
