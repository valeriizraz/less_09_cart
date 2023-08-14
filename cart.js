'use strict';

const cart = {

  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(title, price, amount = 1) { // добавить товар
    const item = {title, price, amount};

    this.items.push(item);
    this.increaseCount(amount);
  },

  increaseCount(num) { // увеличить количество товаров
    this.count += num;
  },

  calculateItemPrice() { // посчитать общую стоимость товаров
    const res = this.items.reduce((acc, item) =>
      acc += item.price * item.amount, 0);
    return res;
  },

  clear() { // очистить корзину
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() { // распечатать корзину
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },

};

cart.add('table', 3, 1);
cart.add('mobil', 5, 2);
cart.add('televisor', 3, 10);
cart.print();


