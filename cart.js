'use strict';

const cart = {

  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() { // получить общую стоимость товаров
    return this.totalPrice;
  },

  add(title, price, amount = 1) { // добавить товар
    const item = {title, price, amount};

    this.items.push(item);
    this.increaseCount(amount);
    this.calculateItemPrice();
  },

  increaseCount(num) { // увеличить количество товаров
    this.count += num;
  },

  calculateItemPrice() { // посчитать общую стоимость товаров
    this.totalPrice = this.items.reduce((acc, item) => acc += item.price * item.amount, 0);
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


