// Модуль игры
const gameModule = (function () {
  let playerBalls = 5;
  let botBalls = 5;

  function isEven(num) {
      return num % 2 === 0;
  }

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function makeMove() {
      // Ход игрока
      let playerGuess = prompt(`У вас ${playerBalls} шариков. Введите число от 1 до ${playerBalls} или нажмите "Отмена" для завершения:`);

      // Проверка ввода игрока и обработка отмены
      if (playerGuess === null) {
          console.log("Игра завершена. Результат:");
          console.log(`У вас осталось ${playerBalls} шариков. У бота ${botBalls} шариков.`);
          return;
      }

      playerGuess = parseInt(playerGuess);

      // Проверка ввода игрока
      while (isNaN(playerGuess) || playerGuess < 1 || playerGuess > playerBalls) {
          playerGuess = prompt(`Неверный ввод. Введите число от 1 до ${playerBalls} или нажмите "Отмена" для завершения:`);

          // Проверка отмены
          if (playerGuess === null) {
              console.log("Игра завершена. Результат:");
              console.log(`У вас осталось ${playerBalls} шариков. У бота ${botBalls} шариков.`);
              return;
          }

          playerGuess = parseInt(playerGuess);
      }

      // Ход бота
      let botGuess = getRandomInt(1, botBalls);

      // Определение, угадал ли бот
      if (isEven(playerGuess) === isEven(botGuess)) {
          // Бот угадал
          console.log(`Бот угадал! Берет ${botGuess} шариков.`);
          botBalls += botGuess;
          playerBalls -= playerGuess;
      } else {
          // Бот не угадал
          console.log(`Бот не угадал. Вы берете ${playerGuess} шариков.`);
          botBalls -= botGuess;
          playerBalls += playerGuess;
      }

      // Вывод текущего состояния игры
      console.log(`У вас осталось ${playerBalls} шариков. У бота ${botBalls} шариков.`);

      // Проверка на окончание игры
      if (playerBalls <= 0) {
          console.log("Вы проиграли! У вас закончились шарики.");
      } else if (botBalls <= 0) {
          console.log("Вы выиграли! У бота закончились шарики.");
      } else {
          // Продолжение игры
          makeMove();
      }
  }

  // Начало игры
  function startGame() {
      console.log("Добро пожаловать в игру!");
      makeMove();
  }

  // Возвращаем метод для начала игры
  return {
      startGame: startGame,
  };
})();

// Запуск игры
gameModule.startGame();
