'use strict';

const cart = {
  items: [],
  totalPriceValue: 0,
  count: 0,
  get totalPrice() {
    return this.totalPriceValue;
  },
  add(productName, price, count) {
    const newItem = {
      productName: productName,
      price: price,
      count: count,
    };
    this.items.push(newItem);
    this.totalPriceValue += price * count;
    this.count += count;
  },
  calculateItemPrice() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  },
  increaseCount(number) {
    this.count += number;
  },
  clear() {
    this.items = [];
    this.totalPriceValue = 0; // Обнуляем новое свойство
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items, null, 2));
    console.log("Общая стоимость корзины:", this.totalPrice);
    console.log("Общее количество товаров:", cart.count);
  }
};

cart.add('Монитор', 30000, 2);
cart.add('Студийный монитор', 25000, 2);
cart.add('Микрофон', 18000, 1);
cart.add('Наушники', 10000, 1);
cart.add('Клавиатура', 3000, 1);
cart.add('Мышь', 4500, 1);
cart.add('Звуковая карта', 17000, 1);
cart.add('Системный блок', 70000, 1);
cart.add('Компьютерный стол', 13000, 1);
cart.add('Компьютерный стул', 17000, 1);

cart.increaseCount(0);

cart.print();

// console.log("Общая стоимость корзины:", cart.calculateItemPrice());
// console.log(cart.items)

// cart.clear()
// console.log("Очистка корзины:",cart.getTotalPrice());
// console.log(cart.items);