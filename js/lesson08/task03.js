'use strict';

function generateRandomArrayWithRangeAndType(count, n, m, type = 'all') {
  const randomArrayThree = Array.from({ length: count }, () => Math.floor(Math.random() * (m - n + 1)) + n);
  
  if (type === 'even') {
    return randomArrayThree.filter(number => number % 2 === 0);
  } else if (type === 'odd') {
    return randomArrayThree.filter(number => number % 2 !== 0);
  } else {
    return randomArrayThree;
  }
}

const arrayLengthThree = 100;
const n = -50;
const m = 50;
const type = 'even'; // можем установить сюда значения even или odd

const randomArrayThree = generateRandomArrayWithRangeAndType(arrayLengthThree, n, m, type);

console.log('Массив случайных чисел в диапазоне от', n, 'до', m, 'с типом', type + ':', randomArrayThree);
