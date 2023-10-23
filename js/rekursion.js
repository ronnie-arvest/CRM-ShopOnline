'use strict';

alert('Добро пожаловать в игру "Угадай число"!');
alert('Я загадал число от 1 до 100. Попробуй угадать!');

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
  let guess = prompt('Введите ваш вариант числа:');

  if (guess === null) {
    alert('Игра завершена.');
    return;
  }

  const parsedGuess = parseInt(guess);

  if (isNaN(parsedGuess)) {
    alert('Введи число!');
    guessNumber();
    return;
  }

  attempts++;

  if (parsedGuess < secretNumber) {
    alert('Больше!');
    guessNumber();
  } else if (parsedGuess > secretNumber) {
    alert('Меньше!');
    guessNumber();
  } else {
    alert(`Правильно! Вы угадали число ${secretNumber} за ${attempts} попыток.`);
    return;
  }
}

guessNumber();

function generateArray(arr = []) {
  const randomNumber = Math.floor(Math.random() * 11);
  arr.push(randomNumber);

  const sum = arr.reduce((acc, current) => acc + current, 0);

  if (sum < 50) {
    return generateArray(arr);
  } else {
    return arr;
  }
}

const resultArray = generateArray();
console.log(resultArray);
