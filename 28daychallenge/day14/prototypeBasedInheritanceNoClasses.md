# Day 14 — Prototype-Based Inheritance Without Classes

## Goal

Today you will understand:

- Prototype-based inheritance
- Parent and child constructor functions
- `Object.create()`
- Sharing parent behaviour
- Adding child-specific behaviour
- Calling a parent constructor
- Method overriding
- How `this` behaves with inherited methods

**Important:**

- Do NOT use `class`.
- Use constructor functions with `function`.
- Use regular functions for methods.
- Do not use arrow functions for today's inheritance exercises.

---

# Task 1 — Basic Prototype Inheritance

Create a parent constructor function:

```js
function Person(name) {
  this.name = name;
}
```

Create a method on:

```js
Person.prototype;
```

called:

```text
greet()
```

It should print the person's name.

Then create a child constructor:

```text
Developer
```

A developer should also have a:

```text
name
```

Create:

```js
const developer = new Developer("Manju");
```

Your goal is for this to work:

```js
developer.greet();
```

### Hint

The important relationship is:

```text
Developer instance
       ↓
Developer.prototype
       ↓
Person.prototype
       ↓
Object.prototype
       ↓
null
```

You need to make:

```text
Developer.prototype
```

inherit from:

```text
Person.prototype
```

Think about the `Object.create()` technique from Day 11.

## Task 1 - My Wrong Submission

```JS
function Person(name) {
  console.log("Person", name);
  this.name = name;
}
Person.prototype.greet = () => {
  console.log("print my name", this.name);
};

function Developer(name) {
  console.log("developer", name);
  this.name = name;
}
const user1 = new Person("manju");
const developer = new Developer("Manju");
const newDev = Object.create(Person);

```

## My Q on my wrong submission)i have start the task1 but not sure does it want me to explcitly set prototype of developer to Persons because it says to create a new Developer and also asks to use Object.create..anyway please evaluate and help

A) My wrong code
**Wrong 1)** Why not `Object.create(Person)`?
This is the main confusion.

`Object.create(Person)` means:

- create an object whose prototype is the Person function object itself
  That is not the inheritance chain you want.

You want:

`developer` → `Developer.prototype` → `Person.prototype`

So the correct object for Object.create() is:

```JS
Object.create(Person.prototype)
```

**not**:

```JS
Object.create(Person)
```

**Wrong 2)** My current code has

```JS
Person.prototype.greet = () => {
  console.log("print my name", this.name);
};
```

This is a problem because arrow functions do not get their own `this`. They capture `this` from the surrounding scope, so `this.name` will usually not be the instance you expect.

For prototype methods, use a regular function.

**Wrong3)** Also, `newDev = Object.create(Person);` is not the correct step for Task 1.

## Task 1 - Correct Submission

```JS
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
```

## Task 1 - Explanation of Correct Submission

## Visual representation

```text
developer instance ↓

Developer.prototype
├─ constructor = Developer
└─ [[Prototype]] = Person.prototype

Person.prototype
├─ constructor = Person
├─ greet = function
└─ [[Prototype]] → Object.prototype

Object.prototype
└─ [[Prototype]] → null
```

That means:

- `developer.constructor` usually points to `Developer`
- `Person.prototype.constructor` points to `Person`

## Bit deep dive

### What gets lost after `Developer.prototype = Object.create(Person.prototype)`

Before the assignment, `Developer.prototype` is a normal object created automatically by JavaScript:

```JS
function Developer(name) {
  this.name = name;
}

Developer.prototype
```

That object contains:

```
Developer.prototype.constructor === Developer
```

So initially it looks like this:

```text
Developer.prototype
├─ constructor → Developer
└─ maybe other methods
```

Then this happens

```JS
Developer.prototype = Object.create(Person.prototype);
```

Now you replace the entire object with a new object whose prototype is `Person.prototype`.
So now the object looks like this:

```text
Developer.prototype
└─ [[Prototype]] → Person.prototype
```

and it does not automatically contain:

```
constructor -> Developer
```

because that constructor property was on the old object, which was discarded.

So now the value is effectively inherited from `Person.prototype`:

```
Developer.prototype.constructor === Person
```

because `Person.prototype` has `constructor = Person`. <br>
That is why the assignment is needed:
`Developer.prototype.constructor = Developer;`

# Task 2 — Add Child-Specific Behaviour

Continue with your `Person` and `Developer` setup.

`Person` should have:

```text
name
greet()
```

`Developer` should have:

```text
programmingLanguage
code()
```

For example:

```text
name: "Manju"
programmingLanguage: "C#"
```

The following should work:

```js
developer.greet();
developer.code();
```

Answer:

1. Where is `greet()` defined?
2. Where is `code()` defined?
3. Why can `developer` access both methods?
4. Does `developer` have its own copy of `greet()`?

### Hint

Think of two prototype levels:

```text
Developer.prototype
    └── code()

       ↓

Person.prototype
    └── greet()
```

The child can find behaviour from its own prototype and then continue searching upward.

## Task 2 - My Wrong Submission

```JS

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

```

## My Wrongs

A) `user1.prototype = Object.create(user1Name.prototype);` //big issue

- `user1` is an instance, NOT a ctor().
- `prototype` only exists on ctor()s like Developer1, not on instances.
  The correct line is:

```JS
Developer1.prototype = Object.create(Person1.prototype);
```

B) `Developer1` is not inheriting from `Person1`
You created `Developer1` with only lang, but the requirement says the child should also have `name`.
To use the parent constructor, you need:

```JS
function Developer1(name, lang) {
  Person1.call(this, name);
  this.programmingLanguage = lang;
}
```

C) `code()` will not work as intended unless the instance has `programmingLanguage`
Your current instance is created like this:

```JS
const user1 = new Developer1("C#");
```

But `Developer1` needs both `name` and `lang` to make `greet()` and `code()` meaningful.

## Task 2 - Correct Submission

```JS
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

const developer = new Developer1("Manju", "C#");

developer.greet(); // name is Manju
developer.code();  // lang is C#
```

# Task 3 — Calling the Parent Constructor

Now make the child constructor store both:

```text
name
programmingLanguage
```

For example:

```js
const developer = new Developer("Manju", "C#");
```

You should be able to access:

```js
console.log(developer.name);
console.log(developer.programmingLanguage);
```

### Requirement

Do NOT duplicate the parent constructor's logic unnecessarily.

Use the parent constructor to initialise the parent-related data.

### Hint

Think about:

```js
Person.call(this, name);
```

Ask yourself:

> What does `call()` allow us to control?

And:

> What should `this` refer to when `Person` runs?

This connects directly to your Day 9 work on `call()`.

---

# Task 4 — Prototype Chain Investigation

Using your `Person` → `Developer` setup, investigate:

```js
console.log(Object.getPrototypeOf(developer) === Developer.prototype);
```

Then:

```js
console.log(Object.getPrototypeOf(Developer.prototype) === Person.prototype);
```

Then:

```js
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
```

And finally:

```js
console.log(Object.getPrototypeOf(Object.prototype));
```

Predict all results before running.

### Hint

Your chain should look like:

```text
developer
    ↓
Developer.prototype
    ↓
Person.prototype
    ↓
Object.prototype
    ↓
null
```

This is the main concept of Day 14.

---

# Task 5 — Method Overriding

Add this method to `Person.prototype`:

```text
describe()
```

It should print something about the person.

Then add another `describe()` method to:

```text
Developer.prototype
```

The developer version should print something different.

Call:

```js
person.describe();
developer.describe();
```

Answer:

1. Why does `person` use `Person.prototype.describe()`?
2. Why does `developer` use `Developer.prototype.describe()`?
3. What happens to `Person.prototype.describe()` when looking up the method from `developer`?
4. Is the parent method deleted or replaced?

### Hint

Remember the property lookup rules from Day 12:

```text
developer
   ↓
Developer.prototype
   ↓
Person.prototype
```

If JavaScript finds `describe()` on `Developer.prototype`, it stops looking.

This is another example of **property shadowing**.

---

# Task 6 — Final Challenge: Build an Employee Hierarchy

Build this hierarchy using **constructor functions and prototypes only**:

```text
Person
  │
  ├── name
  └── greet()

       ↓

Employee
  │
  ├── employeeId
  └── describe()

       ↓

Developer
  │
  ├── programmingLanguage
  └── code()
```

## Person

Constructor:

```text
name
```

Prototype method:

```text
greet()
```

---

## Employee

Constructor:

```text
name
employeeId
```

Prototype method:

```text
describe()
```

Employee should inherit from `Person`.

---

## Developer

Constructor:

```text
name
employeeId
programmingLanguage
```

Prototype method:

```text
code()
```

Developer should inherit from `Employee`.

---

Create:

```js
const developer = new Developer("Manju", 101, "C#");
```

The following should all work:

```js
developer.greet();
developer.describe();
developer.code();
```

### Then investigate:

`
