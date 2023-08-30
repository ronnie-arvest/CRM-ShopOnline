'use strict';

alert("Добро пожаловать в игру 'Угадай число'!");
alert("Я загадал число от 1 до 100. Попробуй угадать!");

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

while (true) {
  guess = prompt("Введите ваш вариант числа:");

  if (guess === null) {
    alert("Игра завершена.");
    break;
  }

  const parsedGuess = parseInt(guess);

  if (isNaN(parsedGuess)) {
    alert("Введи число!");
    continue;
  }

  attempts++;

  if (parsedGuess < secretNumber) {
    alert("Больше!");
  } else if (parsedGuess > secretNumber) {
    alert("Меньше!");
  } else {
    alert(`Правильно! Вы угадали число ${secretNumber} за ${attempts} попыток.`);
    break;
  }
}