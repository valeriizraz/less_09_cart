'use strict'

const number = 2; // Добавить количество товара

const cart = {
  
  str: '',

  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() { // получить общую стоимость товаров
    return this.totalPrice;
  },

  add(prodName, prodPrice, prodQuant) { // добавить товар
    let obj = {};
    console.log(obj);
    
    obj.prod = prodName;
    obj.price = prodPrice;
    obj.quantity = prodQuant;
    
    return this.items.push(obj);
  },

  increaseCount(num) { // увеличить количество товаров
    if (number > 0) {
      this.count = cartItems.quantity + num;
      cartItems.quantity = this.count;
    }
    return this.count, cartItems.quantity;
  },

  calculateItemPrice() { // посчитать общую стоимость товаров
    const obj1 = this.items[0];
    this.str = obj1.prod;
    
    console.log(obj1);

    this.totalPrice = obj1.price * this.count;
    return this.totalPrice, this.str;
  }, 

  clear() { // очистить корзину
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;

    return this.items, this.totalPrice, this.count;
  },

  print() { // распечатать корзину
    return console.log(`Ваш заказ ${this.str} ${this.count}шт. на сумму ${this.totalPrice}`);
  },
};

cart.add('table', 135, 1);
const cartItems = cart.items[0];
console.log(cart.increaseCount(number));
console.log(cartItems);
console.log(cart.calculateItemPrice());
cart.print();

