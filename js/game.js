'use strict';

const gameModule = (function () {
  let playerBalls = 5;
  let botBalls = 5;

  function isEven(num) {
    return num % 2 === 0;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function initializeGame() {
    playerBalls = Math.min(5, 10);
    botBalls = Math.min(5, 10);
  }

  function validateInput(input, maxBalls) {
    let num = parseInt(input);
    return !isNaN(num) && num >= 1 && num <= maxBalls;
  }

  function makeMove() {
    let playerGuess = prompt(`У вас ${playerBalls} шариков. Введите число от 1 до ${playerBalls} или нажмите "Отмена" для завершения:`);

    if (playerGuess === null) {
      console.log("Игра завершена. Результат:");
      console.log(`У вас осталось ${playerBalls} шариков. У бота ${botBalls} шариков.`);
      return;
    }

    playerGuess = parseInt(playerGuess);

    while (!validateInput(playerGuess, playerBalls)) {
      playerGuess = prompt(`Неверный ввод. Введите число от 1 до ${playerBalls} или нажмите "Отмена" для завершения:`);

      if (playerGuess === null) {
        console.log("Игра завершена. Результат:");
        console.log(`У вас осталось ${playerBalls} шариков. У бота ${botBalls} шариков.`);
        return;
      }

      playerGuess = parseInt(playerGuess);
    }

    let botGuess = getRandomInt(1, botBalls);

    if (isEven(playerGuess) === isEven(botGuess)) {
      console.log(`Бот угадал! Забирает у вас ${playerGuess} шариков.`);
      botBalls += playerGuess;
      playerBalls -= playerGuess;
    } else {
      console.log(`Бот не угадал. Вы забираете у бота ${playerGuess} шариков.`);
      botBalls -= playerGuess;
      playerBalls += playerGuess;
    }

    console.log(`У вас осталось ${playerBalls} шариков. У бота ${botBalls} шариков.`);

    if (playerBalls <= 0) {
      console.log("Вы проиграли! У вас закончились шарики.");
    } else if (botBalls <= 0) {
      console.log("Вы выиграли! У бота закончились шарики.");
    } else {
      makeMove();
    }
  }

  function startGame() {
    console.log("Добро пожаловать в игру!");
    initializeGame();
    makeMove();
  }

  return {
    startGame: startGame,
  };
})();

gameModule.startGame();
