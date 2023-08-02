'use strict';

{
const title = 'Холодильник Candy';
console.log('Наименование товара: ', title);

const count = 5;
console.log('count: ', typeof count);

const category = 'Холодильники и морозильные камеры';

const price = 29990;
console.log('price: ', typeof price);

const totalPrice = (count * price);

console.log('Общая сумма товара:', count * price);
console.log(`На складе ${count} единиц товара "${title}" на сумму ${count * price}`);
}

{
// const titleName = prompt('Наименование товара');

const countOfProduct = prompt('Количество товара');

if (countOfProduct == Number(countOfProduct)) {

} else {
  console.log('Вы ввели некорректные данные');
}


// const categoryOfProduct = prompt('Категория товара');

const priceProduct = prompt('Цена товара');

if (priceProduct == Number(priceProduct)) {

} else {
  console.log('Вы ввели некорректные данные');
}
}