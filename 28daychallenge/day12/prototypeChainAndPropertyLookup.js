// task1
const animal = {
  type: "Animal",
};

const dog = Object.create(animal);

dog.name = "Buddy";
console.log(dog.name); // Buddy
console.log(dog.type); // Animal

console.log(Object.getPrototypeOf(dog));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(dog)));

// task2 - Property Shadowing

const animal1 = {
  name: "Buddy",
  type: "Dog",
};

const dog1 = Object.create(animal1);
dog1.name = "Budd1111";
console.log(dog1.name); // Budd1111
console.log(animal1.name); // Buddy

delete dog1.name;

console.log(dog1); // Buddy gets rid of 'Budd1111'. name now comes up 'animal1'

// Task 3 — The Same Property at Multiple Levels

const grandparent = {
  value: "grandparent",
};

const parent = Object.create(grandparent);

parent.value = "parent";

const child = Object.create(parent);

child.value = "child";

console.log(child.value); //child
delete child.value;
console.log(child.value); //parent

// Task 4 — Object.prototype

const user = {
  name: "Manju",
};

console.log(user.toString); // the function
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("toString")); //false
console.log(Object.getPrototypeOf(user)); // Object

// Task 5 — in vs hasOwnProperty
/*
hasOwnProperty() checks only the object itself. The in operator checks the object and its prototype chain.
*/

const animal5 = {
  type: "dog",
};

const dog5 = Object.create(animal5);
dog5.name = "Buddy55";
console.log(animal5.hasOwnProperty("type")); // true
console.log(dog5.hasOwnProperty("name")); // true
console.log(dog5.hasOwnProperty("type")); // false
console.log("type" in dog5); // true — found in prototype chain

//Task6

const person = {
  species: "Human",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

const employee = Object.create(person);

employee.name = "Manju";

console.log(employee.name);
console.log(employee.species);

employee.greet();

console.log(employee.hasOwnProperty("name"));
console.log(employee.hasOwnProperty("species"));

console.log("name" in employee);
console.log("species" in employee);

console.log(Object.getPrototypeOf(employee) === person);
