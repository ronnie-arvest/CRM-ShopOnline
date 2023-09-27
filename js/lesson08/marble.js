'use strict';

alert("Добро пожаловать в игру 'Марблз'!\nВы начинаете игру с 5 мраморами.");

let playerMarbles = 5;
let botMarbles = 5;

alert("игра")

while (playerMarbles > 0 && botMarbles > 0) {
  // Ход игрока
  let playerChoice = prompt(`У вас ${playerMarbles} мрамор(а). Сколько мраморов вы хотите взять? (1 или 2)`, "1");

  if (playerChoice === "1" || playerChoice === "2") {
    playerMarbles -= parseInt(playerChoice);
  } else {
    alert("Пожалуйста, выберите 1 или 2 мрамора.");
    continue;
  }

  // Проверка, выиграл ли игрок
  if (playerMarbles <= 0) {
    alert("Вы победили! Поздравляем!");
    break;
  }

  // Ход бота
  let botChoice = Math.floor(Math.random() * 2) + 1;
  botMarbles -= botChoice;
  alert(`Бот взял ${botChoice} мрамор(а). У бота осталось ${botMarbles} мрамор(а).`);

  // Проверка, выиграл ли бот
  if (botMarbles <= 0) {
    alert("Бот победил! Попробуйте еще раз.");
    break;
  }
}

alert("Спасибо за игру! Чтобы сыграть снова, обновите страницу.");
