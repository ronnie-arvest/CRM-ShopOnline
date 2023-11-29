'use strict';

{
const popup = document.querySelector('#popup');
const popupBody = document.querySelector('.product__body');
const openBtn = document.querySelector('.main-content__button');
const closePopup = document.querySelector('.product__close');
const overLay = document.querySelector('.main');
const delBtn = document.querySelector('.main-content__tdd-delete');
const tBody = document.querySelector('.main-content__tbody')
const imgTd = document.querySelector('.main-content__tdd-noimg');

openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (event) => {
  if (!popupBody.contains(event.target)) {
    popup.style.display = 'none';
  }
});

delBtn.addEventListener('click', () => {
  const tableRow = document.querySelectorAll('.main-content__trr');
    tableRow.style.display = 'none';
  });

// tBody.addEventListener('click', e => {
//   const target = e.target;
//   if (target.closest('.main-content__tdd-delete')) {
//     const rowToDelete = target.closest('.main-content__trr');
//     rowToDelete.remove();
//   };
// });

tBody.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('.main-content__tdd-delete')) {
    const rowToDelete = target.closest('.main-content__trr');
    const idToDelete = parseInt(rowToDelete.querySelector('td:first-child').textContent, 10);

    const indexToDelete = goodsArray.findIndex(item => item.id === idToDelete);

    goodsArray.splice(indexToDelete, 1);

    rowToDelete.remove();
  }
});

}
