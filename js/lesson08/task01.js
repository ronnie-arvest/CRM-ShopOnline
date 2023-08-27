'use strict';

function generateRandomArray(count) {
  const randomArray = Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 1);
  return randomArray;
}

const arrayLength = 100;
const randomArray = generateRandomArray(arrayLength);

console.log('Массив случайных чисел:', randomArray);
