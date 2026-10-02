// task1 - ctor fn

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("John", 30);
const user2 = new User("Sarah", 25);
console.log(user1.name, user1.age); // John 30
console.log(user2.name, user2.age); // Sarah 25
console.log(user1 === user2); //false Each new User(...) call creates a separate object, so user1 and user2 are not the same objec

// task2 - understand new

console.log(Object.getPrototypeOf(user1) === User.prototype); // true
console.log("Constructor prototype:", User.prototype); // { constructor: [Function: User] } (display varies by console)
console.log(
  "user1 inherits from User.prototype:",
  Object.getPrototypeOf(user1) === User.prototype,
); // user1 inherits from User.prototype: true
console.log(
  "user2 inherits from User.prototype:",
  Object.getPrototypeOf(user2) === User.prototype,
); // user2 inherits from User.prototype: true

console.log(Object.getPrototypeOf(User));
// One important distinction: User.prototype is the prototype used by User instances;
// it is not the same as Object.getPrototypeOf(User), which is the prototype of the constructor function itself.
// Object.getPrototypeOf(User) returns Function.prototype, because User is a function object.
// In Node.js, console.log typically displays it as:
// [Function (anonymous)]

//task 3 add prototype method

User.prototype.greet = function (loc) {
  console.log("hello", loc);
  console.log(this);
};
const user3 = new User("manju", 25);
const user4 = new User("Us", 28);
user3.greet("Mel");
user4.greet("Dub");
User.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};

user3.greet(); // Hello, manju
user4.greet(); // Hello, Us

console.log(user3.hasOwnProperty("greet")); // false
console.log(user4.hasOwnProperty("greet")); // false
console.log(user3.greet === user4.greet); // true

//task 4  Constructor Data vs Prototype Behaviour

User.prototype.IsAdult = function () {
  return this.age > 18;
};

const user5 = new User("manju", 15);
const user6 = new User("Us", 20);

console.log(user5.name + " is " + (user5.IsAdult() ? "Adult" : "Not Adult")); // manju is Not Adult
console.log(user6.name + " is " + (user6.IsAdult() ? "Adult" : "Not Adult")); // Us is Adult

//Task 5 inspect prototype chain
console.log(Object.getPrototypeOf(user5)); //User.prototype
console.log(Object.getPrototypeOf(user5) === User.prototype); //true
console.log(Object.getPrototypeOf(user5) === Object.getPrototypeOf(User)); //false
console.log(Object.getPrototypeOf(User.prototype)); // Object's prototype

//task6
// Task 6 — Final Constructor + Prototype Challenge

// Regular constructor function.
// Each call with `new` creates a separate employee object.
function Employee(name, role, salary) {
  this.name = name; // Own property
  this.role = role; // Own property
  this.salary = salary; // Own property
}

// Shared method: stored once on Employee.prototype.
Employee.prototype.describe = function () {
  console.log(`${this.name} is a ${this.role}`);
};

// Choose $100,000 as the senior-salary threshold.
Employee.prototype.isSenior = function () {
  return this.salary >= 100000;
};

// Create two employees with different values.
const employee1 = new Employee("Manju", "Software Developer", 120000);
const employee2 = new Employee("Alex", "Designer", 85000);

// Each call uses the employee before the dot as `this`.
employee1.describe(); // Manju is a Software Developer
employee2.describe(); // Alex is a Designer

console.log(employee1.isSenior()); // true
console.log(employee2.isSenior()); // false

// Check which properties belong directly to employee1.
console.log(employee1.hasOwnProperty("name")); // true
console.log(employee1.hasOwnProperty("describe")); // false — inherited from Employee.prototype

// Both employees use the same shared describe function.
console.log(employee1.describe === employee2.describe); // true

// `new Employee(...)` connects each employee's prototype to Employee.prototype.
console.log(Object.getPrototypeOf(employee1) === Employee.prototype); // true
