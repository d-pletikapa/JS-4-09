'use strict';
console.log('Тренировка:');

const obj1 = new Object();
console.log("🚀 ~ new Object ~ line 5 ~ obj1", obj1)

const obj2 = {};
console.log("🚀 ~ obj2 = {} ~ line 8 ~", obj2)


// Создать абсолютно пустой объект без прототипов
const noPrototypeObject = Object.create(null);
console.log("🚀 ~ Object.create(null); ~ line 12 ~ noPrototypeObject", noPrototypeObject)


// Использование переменных в свойствах и значениях свойст объекта
const firstName = 'Флоид';
const lastName = 'Лоутон';

const user = {
	login: 'Deadshot',
	firstName: firstName,
	lastName,
	'favorite weapon': 'Glock 19',
	cars: ['opel', 'mazda', 'bmw'],
	age: 48,
	status: {
		alive: true,
		wanted: true,
		free: true,
	},
	say() {
		console.log('Меня зовут Флойд')
	},

};


// Ссылки на свойства объекта (2 типа)
const str = 'firstName';

console.log('user.login', user.login);
console.log('user["favorite weapon"];', user['favorite weapon']);

console.log(`str = 'firstName';`, user[str]);

// Методы в объекте
user.say();

// Удаление свойства из объекта
delete user.cars;

//Перезапись свойства объекта
user.login = 'Anonimus';

//Добавить свойство в объект
user.smoke = true;

console.log("🚀 line 43 ~ user", user);

const elem = {
	tagName: 'div',
	className: 'container',
};

elem.className = 'wrapper';
console.log("🚀 ~ file: Theory-practice-objects.js ~ line 58 ~ elem", elem);

const decorObj = obj => {
	obj.prop = 'вот это да!';
};
decorObj(elem);
console.log("🚀 ~elem", elem);

// Перебор объекта с for in
for (const prop in user) {
	console.log(`🚀 ~ file: Theory-practice-objects.js ~ line 68 ~ 
	user.${prop} = ${user[prop]}`);
};

// Запись в переменную через метод прототипа, запись параметров (ключей)
const keys = Object.keys(user);
console.log("🚀 ~ file: Theory-practice-objects.js ~ line 73 ~ keys", keys)

// Перебор ключей
for (const key of keys) {
	console.log(`🚀 ~ file: Theory-practice-objects.js ~ line 68 ~ 
	user.${key} = ${user[key]}`);
};

// Запись в переменную через метод прототипа, запись значений ключей (values)
const values = Object.values(user);
console.log("🚀 ~~ values", values)

// Перебор значений
for (const value of values) {
	console.log(`🚀 ~ file: Theory-practice-objects.js ~ line 68 ~ 
	user.${value} = ${user[value]}`);
};

// Запись в переменную через метод прототипа, запись массива из ключа и значения (entries)
const entries = Object.entries(user);
console.log("🚀 ~~ entries", entries);

// Перебор entries
for (const [key, value] of entries) {
	console.log(`🚀 ~ file: Theory-practice-objects.js ~ line 68 ~ 
	`, key, value);
};

console.log("🚀ARRAY TO OBJ");
console.log("🚀ARRAY TO OBJ");
console.log("🚀ARRAY TO OBJ");


const array = [
	[
		"login",
		"Anonimus"
	],
	[
		"firstName",
		"Флоид"
	],
	[
		"lastName",
		"Лоутон"
	],
	[
		"favorite weapon",
		"Glock 19"
	],
	[
		"age",
		48
	],
	[
		"status",
		{
			"alive": true,
			"wanted": true,
			"free": true
		}
	],
	[
		"say",
		null
	],
	[
		"smoke",
		true
	]
]

// Формирование объекта из массива с помощью Object.fromEntries()
const obj = Object.fromEntries(array);
console.log("🚀 ~ ~ line 144 ~ obj", obj)
console.log("🚀 line 144 ~ obj", obj.hasOwnProperty('age'));

console.log('Тренировка: 2');

const obj3 = {
	a: 1,
	b: {
		a: 2,
	},
	c: 3,
};


const obj4 = {
	c: 5,
	b: {
		d: 4,
	},
};
console.log("🚀 ~ file: Obj assign ~ line 155 ~ obj3", obj3);

// Слияние объектов или создание копии с помощью метода assign Object.assign({}, obj3, obj4);
const obj5 = Object.assign({}, obj3, obj4);
console.log("🚀 ~ file:~ line 166 ~ obj5", obj5)

const obj6 = Object.assign({}, obj3);
console.log("🚀 ~ file: Theory-practice-objects.js ~ line 169 ~ obj6", obj6);
// Spread оператор ...
const obj7 = { ...obj3, foo: 'hi', ...obj4, };
console.log("🚀 ~ file: Theory-practice-objects.js ~ line 173 ~ obj7", obj7);

console.log('Тренировка 3');

const hero2 = {
	login: 'Deadpool',
	firstName: 'Уэйд',
	lastName: 'Уилсон',
	favoriteWeapon: 'katanas',
	otherWEapons: [
		'Mateba Autorevolver',
		'Ingram MAC-10',
		'Desert Eagle Mark XIX',
		'M16',
		'РГД-5',
	],
	transport: {
		cars: {
			family: ['WV', 'Opel', 'Lada'],
			sport: ['BMW', 'Mazda', 'Porsche'],
		}
	},
	active: true,
};

const hero3 = {
	login: 'Deadpool',
	firstName: 'Брэд',
	lastName: 'Пит',
	favoriteWeapon: 'katanas',
	otherWEapons: [
		'Mateba Autorevolver',
		'Ingram MAC-10',
		'Desert Eagle Mark XIX',
		'M16',
		'РГД-5',
	],
	transport: {
		cars: {
			sport: ['BMW', 'Mazda', 'Porsche'],
		}
	},
	active: true,
};

const hero4 = {
	login: 'Deadpool',
	firstName: 'Уэйд',
	lastName: 'Уилсон',
	favoriteWeapon: 'katanas',
	otherWEapons: [
		'Mateba Autorevolver',
		'Ingram MAC-10',
		'Desert Eagle Mark XIX',
		'M16',
		'РГД-5',
	],
	transport: {
	},
	active: true,
	getFullName() {
		return `${this.firstName} ${this.lastName}`; // this.firstName === hero4.firstName
	},
	say() {
		console.log(`Меня зовут ${this.getFullName()}`); // this.getFullName === hero4.getFullName
	},
};

// Деструктуризация объекта
const {
	login: heroName, // Переопределение названия свойства.
	otherWEapons,
	transport: {  // Деструктуризация первый уровень
		cars: {  // Деструктуризация второй уровень
			family,
			sport,
		}
	},
	group = 'Avengers' // Добавить парметр и его значение для вывода в случае отсутствия такого свойства.
} = hero2;

console.log(heroName);
console.log(otherWEapons);
console.log(family, sport);
console.log("🚀 ~ file: Theory-practice-objects.js ~ line 207 ~ group", group)


const heroes = [hero2, hero3, hero4];
heroes.forEach(item => {
	console.log(item?.transport?.cars?.family ?? 'no prop');  // Оператор опциональное последовательности и в конце оператор нулеого слияния(реагирует только на null, undefined).
});

hero4.say();


hero3.getFullName = hero4.getFullName;
console.log("🚀 ~ file: Theory-practice-objects.js ~ line 267 ~ hero3.getFullName", hero3.getFullName());

const hero4Str = JSON.stringify(hero4);
console.log("🚀 ~ file: Theory-practice-objects.js ~ line 286 ~ hero4Str", hero4Str);

const hero4Object = JSON.parse(hero4Str); // Клон	изначального объекта
console.log("🚀 ~ file: Theory-practice-objects.js ~ line 289 ~ hero4Object", hero4Object);
