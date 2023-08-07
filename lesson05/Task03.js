'use strict';

const stroka = (str) => {
  return str.split('').reverse().join('');
}

const cons = stroka('Привет мир');
console.log(cons);