'use strict'

{
const rain = Math.round(Math.random());
console.log('Число:', rain);

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!'); 
} else {
  console.log('Дождя нет!');
}
}

{
const matematika = prompt('Введите кол-во баллов по математике:');
const numberMath = Number(matematika);
const russkiy = prompt('Введите кол-во баллов по русскому языку:');
const numberRus = Number(russkiy);
const informatika = prompt('Введите кол-во баллов по информатике:');
const numberInfo = Number(informatika);

const totalScore = Number(matematika) + Number(russkiy) + Number(informatika);

if (totalScore >= 265) {
  console.log('Поздравляю, вы поступили на бюджет!');
} else {
  console.log('К сожалению, вы не набрали достаточно баллов для поступления на бюджет.');
}

// {
// const value = prompt('Укажите сумму для снятия');
// const valueNumber = Number(value);

// if (isNaN(valueNumber)) {
//   console.log('Введены некорректные данные');
// };

// const minimalValue = 100 + ' рублей';

// if (valueNumber <= minimalValue) {
//   console.log(`Минимальная сумма выдачи: ${minimalValue}`);
// } else {
//   console.log('Успешно!');
// };
// }

const value = prompt('Укажите сумму для снятия');
const valueNumber = Number(value);

const minimalValue = 100;

if (isNaN(valueNumber)) {
  console.log('Введены некорректные данные');
} else if (valueNumber >= minimalValue) {
  console.log('Успешно!');
} else {
  console.log(`Минимальная сумма выдачи: ${minimalValue} рублей`);
};

}