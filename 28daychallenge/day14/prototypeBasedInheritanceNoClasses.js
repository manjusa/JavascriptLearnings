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

function Developer1(lang) {
  this.programmingLanguage = lang;
}

Developer1.prototype.code = function () {
  console.log("lang is", this.programmingLanguage);
};

const user1 = new Developer1("C#");
const user1Name = new Person1("manju");
user1.prototype = Object.create(user1Name.prototype);
