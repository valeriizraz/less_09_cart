'use strict';

const cart = {

  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() { // получить общую стоимость товаров
    return this.totalPrice;
  },

  add(prodName, prodPrice, prodAmount) { // добавить товар
    const item = {};
    console.log(item);

    item.prodName = prodName;
    item.prodPrice = this.increaseCount(prodPrice);
    item.prodAmount = prodAmount;

    this.items.push(item);
  },

  increaseCount(num) { // увеличить количество товаров
    this.count += num;
  },

  calculateItemPrice() { // посчитать общую стоимость товаров
    this.totalPrice = this.items.reduce((acc, curr) =>
    acc.prodPrice + (acc.prodPrice * curr.prodAmount), 0);
  },

  clear() { // очистить корзину
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() { // распечатать корзину
    return console.log(`Ваш заказ ${this.str} ${this.count}шт. на сумму ${this.totalPrice}`);
  },
};

cart.add('table', 135, 1);
cart.add('mobil', 390, 1);
cart.add('televisor', 180, 1);
console.log(cart.items);
console.log(cart.increaseCount());
// cart.print();
console.log(cart.totalPrice);
console.log(cart.calculateItemPrice());