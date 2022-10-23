'use strict';
console.log('Задание 1:')

// Создайте файл cart.js, подключите к html-файлу
// Создайте объект cart — корзина
// Объект будет содержать следующие свойства:
//     1. items = пустой массив - это товары
//     2. totalPrice = 0 - общая стоимость корзины
//     3. count = 0 - количество товаров
//: и методы
//:     1. getTotalPrice - получить общую стоимость товаров
//:     2. add - добавить товар
//:     3. increaseCount - увеличить количество товаров
//:     4. calculateItemPrice - посчитать общую стоимость товаров
//:     5. clear - очистить корзину
//:     6. print - распечатать корзину

// Далее описание каждого метода
// getTotalPrice()
// метод возвращает значение свойства totalPrice

// calculateItemPrice()
// пересчитывает стоимость всей корзины и записывает значение в totalPrice

// increaseCount()
// Принимает один параметр(число)
// Увеличивает свойство count на это число

// add()
// Принимает три параметра:
//     1. название товара
//     2. цену товара
//     3. количество товара (опциональный параметр, по умолчанию 1 товар)
// этот метод формирует объект из полученных параметров и добавляет его в свойство items
// так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные

// clear()
// Очищает полностью нашу корзину, возвращает все значения в изначальные

// print()
// Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины

// Для проверки работы функционала добавить 3 или более товаров в корзину

// После вызвать метод print для вывода информации в консоль

const cart = {
	items: [],
	totalPrice: 0,
	count: 0,
	calculateItemPrice() {
		cart.totalPrice = 0;

		this.items.forEach(item => {
			const itemPrice = item.productPrice * item.productCount;
			cart.totalPrice += itemPrice;
		})

	},
	getTotalPrice() {
		console.log('cart.totalPrice = ', cart.totalPrice);
		return cart.totalPrice;
	},
	add(productName, productPrice, productCount = 1) {

		const newItem = { productName, productPrice, productCount };
		this.items.push(newItem);
		this.increaseCount(productCount);
		this.calculateItemPrice();
		cart.getTotalPrice();
	},

	increaseCount(counter) {
		return this.count += counter;
	},
	print() {
		const resultItems = JSON.stringify(cart.items);
		const resultPrice = JSON.stringify(cart.getTotalPrice());
		console.log(`result: ${resultItems}\ntotalPrice: ${resultPrice}`);
	},
	clear() {

		// this.items = [];
		// this.items.splice(0, cart.items.length);
		this.items.length = 0;
		this.count = 0;
		this.totalPrice = 0;
	},
};

// Performing tests for metheds of cart object:

cart.add('Banana', 100, 2);
cart.add('Apple1', 50, 1);
cart.add('Apple2', 60, 1);
cart.add('Orange', 200, 3);
console.log("🚀 ~ file: cart.js ~ line 60 ~ add ~ items", cart.items);
cart.calculateItemPrice();
cart.print();
cart.clear();




