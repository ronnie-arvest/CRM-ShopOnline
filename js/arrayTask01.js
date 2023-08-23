'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filterPassed = (allStudents, failedStudents) => {
  const passedStudents = allStudents.filter(student => !failedStudents.includes(student));
  return passedStudents;
}

const passedStudents = filterPassed(allStudents, failedStudents);
console.log(passedStudents);