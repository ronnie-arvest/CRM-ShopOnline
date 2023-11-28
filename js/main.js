'use strict';

function createRow(object) {
  const row = document.createElement('tr');
  row.classList.add('main-content__trr');

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const cell = document.createElement('td');
      cell.classList.add('main-content__tdd')
      cell.textContent = object[key];
      row.appendChild(cell);
    }
  }

  return row;
}

function renderGoods(goodsArray) {
  let table = document.querySelector('.main-content__table-list');

  const rows = goodsArray.map(createRow);

  rows.forEach(row => {
    table.appendChild(row);
  });
}

const goodsArray = [
  {
    "id": 246016548,
    "title": "Навигационная система Soundmax",
    "category": "Техника для дома",
    "units": "шт",
    "count": 5,
    "price": '$100',
    "total": '$500',
  },
  {
    "id": 937295527,
    "title": "Настольная игра На 4-х ногах",
    "category": "Настольные игры",
    "units": "шт",
    "count": 12,
    "price": '$14',
    "total": '$168',
  },
];

renderGoods(goodsArray);
console.log('goodsArray: ', goodsArray);
