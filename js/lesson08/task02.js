'use strict';

function generateRandomArrayWithRange(count, n, m) {
  const randomArrayTwo = Array.from({ length: count }, () => Math.floor(Math.random() * (m - n + 1)) + n);
  return randomArrayTwo;
}

const arrayLengthTwo = 100;
const n = -50;
const m = 50;

const randomArrayTwo = generateRandomArrayWithRange(arrayLengthTwo, n, m);

console.log('Массив случайных чисел в диапазоне от', n, 'до', m + ':', randomArrayTwo);
