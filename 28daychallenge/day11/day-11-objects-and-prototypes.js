//task1
const user = {
  name: "Manju",
  age: 40,
  isActive: true,
};

console.log(user.name);
console.log(user["age"]);

const propertyName = "isActive";
console.log(user[propertyName]);

console.log(user.address);

user.city = "Melbourne";
user.age = 31;
delete user.isActive;

console.log(user);

// Task 2 — Objects Are References

const user1 = {
  name: "John",
};

const user2 = user1;
user2.name = "Peter";

console.log(user1.name);
console.log(user2.name);
console.log(user1 === user2);

//Task 3 — Shallow Copy

const user1S = {
  name: "John",
  age: 30,
};

const user2S = { ...user1S };

user1S.name = "John1";
console.log(user1S.name);
console.log(user2S.name);
//My take for this task when compared to task2
// spread operator creates anthr variable

//Task 4 — Nested Object Reference Trap
/* related to above. though above spread operator creates
another {}, that happens only for 1st level . Inner {}s hold same references*/

const userNestedObj = {
  name: "Manju",
  age: 33,
  address: {
    city: "melbourne",
  },
};

const userNestedObj2 = { ...userNestedObj };
userNestedObj2.name = "manju1";
userNestedObj2.address.city = "sydney";
console.log(userNestedObj);
console.log(userNestedObj2);

// My take
/*
 If u notice inner {} i.e address both objects holds same "reference". So
 when i updated "city" in "userNestedObj2" to "Sydney", userNestedObj's city 
 also got updated to "Sydney". However for "name" it didnt happen (both were separate {}s).
 So takeway is that nested inner {} holds same references in spread operator
*/

//task5 — Object Method + this

const userO = {
  name: "Manju",
  showName: function () {
    console.log(this.name);
  },
};

userO.showName();
const showNameVar = userO.showName; //prints 'Manju'
showNameVar(); //prints undefined

//task6

const parent = {
  country: "Australia",
};
const userPro = Object.create(parent);
userPro.name = "Manju";
console.log(userPro.name);
console.log(userPro.country);
console.log(parent);
console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("country"));

//task7 (closely related to task 6)
function UserFn(name) {
  this.name = name;
}

UserFn.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};

const userFn1 = new UserFn("Manju");
const userFn2 = new UserFn("John");

userFn1.greet();
userFn2.greet();

//task 8 and task 9

const animal = {
  eat() {
    // method shorthand syntax in {}.
    // Cr a regular (non-arrow)
    // function without writing the function
    console.log("Eating");
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Barking");
};
dog.bark();
dog.eat();
dog.hasOwnProperty("bark");
dog.hasOwnProperty("eat");

console.log("bark" in dog);
console.log("eat" in dog);

console.log(dog.hasOwnProperty("bark"));
console.log(dog.hasOwnProperty("eat"));

//task 10
const userPrototype = {
  describe: function () {
    console.log(this.name);
    console.log(this.role);
  },
};

const user10 = Object.create(userPrototype);
user10.name = "John";
user10.role = "Developer";
user10.describe();
const user10a = Object.create(userPrototype);
user10a.name = "Sarah";
user10a.role = "Tester";
user10a.describe();

console.log(user10.describe === user10a.describe); // true
console.log(user10.hasOwnProperty("describe")); // false

//Task 11 — Inspect the Prototype
const parent11 = {
  country: "Australia",
};

const user11 = Object.create(parent11);

user11.name = "Manju";

console.log(Object.getPrototypeOf(user11));
console.log(Object.getPrototypeOf(parent11)); // Object.getPrototypeOf(parent) is Object.prototype

//task12
const person = {
  name: "Person",
  greet() {
    console.log(this.name);
  },
};

const employee = Object.create(person);

employee.name = "Employee";

employee.greet();
