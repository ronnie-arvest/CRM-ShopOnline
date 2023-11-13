'use strict';

const startGame = (function () {
  let userScore = 0;
  let computerScore = 0;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getComputerMove() {
    const moves = ['камень', 'ножницы', 'бумага'];
    const randomIndex = getRandomIntInclusive(0, 2);
    return moves[randomIndex];
  }

  function getRoundWinner(userMove, computerMove) {
    if (!userMove || !['камень', 'ножницы', 'бумага'].includes(userMove.toLowerCase())) {
      return 'Некорректный ввод пользователя';
    }

    if (userMove === computerMove) {
      return 'Ничья';
    } else if (
      (userMove === 'камень' && computerMove === 'ножницы') ||
      (userMove === 'ножницы' && computerMove === 'бумага') ||
      (userMove === 'бумага' && computerMove === 'камень')
    ) {
      userScore++;
      return 'Вы победили!';
    } else {
      computerScore++;
      return 'Победил компьютер';
    }
  }

  function game() {
    const userMove = prompt('Камень, ножницы или бумага?');

    if (userMove === null) {
      const confirmExit = confirm('Хотите выйти?');
      if (confirmExit) {
        alert(`Ваши очки: ${userScore}\nОчки компьютера: ${computerScore}`);
        return;
      }
    }

    const computerMove = getComputerMove();

    const roundResult = getRoundWinner(userMove, computerMove);
    alert(`Вы: ${userMove}\nКомпьютер: ${computerMove}\n${roundResult}`);

    game();
  }

  return {
    game: game,
  };
})();
