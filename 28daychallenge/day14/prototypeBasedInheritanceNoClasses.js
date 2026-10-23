//task1

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hi, I am " + this.name);
};

function Developer(name) {
  Person.call(this, name);
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const developer = new Developer("Manju");

console.log(developer instanceof Developer); // true
console.log(developer.constructor.name); // Developer
developer.greet(); // Hi, I am Manju

//task2 - Add Child-Specific Behaviour

function Person1(name) {
  this.name = name;
}

Person1.prototype.greet = function () {
  console.log("name is", this.name);
};

function Developer1(name, lang) {
  Person1.call(this, name);
  this.programmingLanguage = lang;
}

Developer1.prototype = Object.create(Person1.prototype);
Developer1.prototype.constructor = Developer1;

Developer1.prototype.code = function () {
  console.log("lang is", this.programmingLanguage);
};

const developer1 = new Developer1("Manju", "C#");

developer1.greet(); // name is Manju
developer1.code(); // lang is C#

//task3 already taken care in task2
//task4
console.log(developer1.__proto__); //points to Developer1's prototype
console.log(Object.getPrototypeOf(developer1)); //points to Developer1's prototype -better way to get __proto__
console.log(Object.getPrototypeOf(developer1) === Developer1.prototype); //true
console.log(Object.getPrototypeOf(Developer1.prototype) === Person1.prototype); //true
console.log(Object.getPrototypeOf(Person1.prototype) === Object.prototype); //true

//task5 - cr copies of person1 and developer1 and cr new {}s i.Peron2 and Developer2 (just for task simplicity)

function Person2(name) {
  this.name = name;
}

Person2.prototype.greet = function () {
  console.log("name is", this.name);
};

function Developer2(name, lang) {
  Person2.call(this, name);
  this.programmingLanguage = lang;
}

Person2.prototype.describe = function () {
  console.log("Am person2", this.name);
};

Developer2.prototype = Object.create(Person2.prototype);
Developer2.prototype.constructor = Developer2;

Developer2.prototype.describe = function () {
  console.log("Am Developer2", this.name);
};

const person2 = new Person2("manju2");
person2.describe();

const developer2 = new Developer2("manjudev2", "c#");
developer2.describe();
