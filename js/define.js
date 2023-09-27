'use strict';

const car = {
  car: 'mini',
  model: 'cooper',
  price: 30000,
  get comment() {
    return this.trueComment;
  },
  set comment(val) {
    if (typeof val === 'string') {
      this.trueComment = val;
    }
  },
  trueComment: 'not',
};

console.log(car.comment);

console.log(car);

// Object.defineProperty(car, 'model', {
//   configurable: true,
//   enumerable: true,
//   writable: true,
// })

// car.model = 'electric';
// delete car.model;

// ОБЪЕКТ DEFINE.PROPERTY НИЖЕ

// Object.defineProperty(car, 'fullName', {
//   get() {
//     return `${this.car} ${this.model}`
//   },
//   set(val) {
//     if (typeof val === 'string') {
//     this.comment = val;
//   }
//   }
// });

// console.log(car.fullName);

// car.fullName = 'Норм машина!';

// console.log(car);