# Day 13 — Constructor Functions & Prototype Methods

## Goal

Today you will learn the older, prototype-based pattern JavaScript uses to create multiple objects with shared behaviour.

You will practise:

- Constructor functions
- The `new` keyword
- `this` inside constructor functions
- Prototype methods
- Shared methods vs object-specific data
- How constructor functions connect to the prototype chain

**Important:**

- Do NOT use `class`.
- Constructor functions must use the `function` keyword.
- Prototype methods should be regular functions.
- Do not use arrow functions for today's constructor/prototype exercises.

---

# Task 1 — Your First Constructor Function

Create a constructor function called `User`.

It should create objects with:

```text
name
age
```

For example:

```js
const user1 = new User("John", 30);
const user2 = new User("Sarah", 25);
```

Both objects should contain their own `name` and `age`.

Then:

```js
console.log(user1.name);
console.log(user1.age);

console.log(user2.name);
console.log(user2.age);
```

Also check:

```js
console.log(user1 === user2);
```

### Hint

A constructor function looks like:

```js
function User(name, age) {
  // ...
}
```

Inside the constructor, think about what `this` refers to when you execute:

```js
new User("John", 30);
```

You should **not** manually create and return an object.

The `new` keyword is doing important work for you.

---

# Task 2 — Understand `new`

Using your `User` constructor from Task 1:

```js
const user1 = new User("John", 30);
```

Before looking anything up, explain what you think `new` does.
Your explanation should include:

1. A new object is created.
2. The new object's prototype is connected to `User.prototype`.
3. The constructor function runs with `this` referring to the new object.
4. The new object is returned.
5. How is User's prototype different from User.prototype

---

# Task 3 — Add a Prototype Method

Take your `User` constructor:

```js
function User(name, age) {
  // ...
}
```

Now add a `greet()` method to:

```js
User.prototype;
```

**Requirement:** `greet` must be a regular function.

For example, you should eventually be able to do:

```js
user1.greet();
user2.greet();
```

and get different names.

Then investigate:

```js
console.log(user1.hasOwnProperty("greet"));
console.log(user2.hasOwnProperty("greet"));
```

Also:

```js
console.log(user1.greet === user2.greet);
```

Predict the results before running them.

### Hint

The important distinction is:

```text
user1
 ├── name
 └── age
       ↓
   User.prototype
       └── greet()
```

`greet()` should **not** be created separately for every user.

Both users should find the same method through their prototype.

---

# Task 4 — Constructor Data vs Prototype Behaviour

Using your `User` constructor, give each user:

```text
name
age
```

Then put these methods on `User.prototype`:

```text
greet()
isAdult()
```

`greet()` should print something using the user's name.

`isAdult()` should return:

```text
true
```

if the user's age is 18 or greater, otherwise:

```text
false
```

Create at least two users with different ages.

Then verify:

```js
user1.isAdult();
user2.isAdult();
```

Answer:

### Which belongs to the individual object?

```text
name
age
```

### Which is shared?

```text
greet()
isAdult()
```

### Hint

A useful design rule is:

```text
Object instance
    ↓
data that is different for each object

Prototype
    ↓
behaviour that can be shared
```

---

# Task 5 — Inspect the Prototype Chain

Using:

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const user = new User("Manju", 40);
```

Investigate these:

```js
console.log(Object.getPrototypeOf(user));
```

```js
console.log(Object.getPrototypeOf(user) === User.prototype);
```

```js
console.log(User.prototype);
```

Then investigate:

```js
console.log(Object.getPrototypeOf(User.prototype));
```

### Hint

Try to draw the chain:

```text
user
 ↓
User.prototype
 ↓
Object.prototype
 ↓
null
```

This should connect directly to what you learned on Day 12.

---

# Task 6 — Final Constructor + Prototype Challenge

Build a small `Employee` model.

### Constructor requirement

Use a **regular constructor function**:

```text
Employee
```

Each employee should have:

```text
name
role
salary
```

### Prototype requirement

Add these methods to `Employee.prototype`:

```text
describe()
isSenior()
```

`describe()` should display something such as:

```text
Manju is a Software Developer
```

`isSenior()` should return `true` when salary is greater than or equal to a threshold you choose.

Create at least two employees with different values.

Then test:

```js
employee1.describe();
employee2.describe();

employee1.isSenior();
employee2.isSenior();
```

Now investigate:

```js
console.log(employee1.hasOwnProperty("name"));
console.log(employee1.hasOwnProperty("describe"));

console.log(employee1.describe === employee2.describe);

console.log(Object.getPrototypeOf(employee1) === Employee.prototype);
```

### Final questions

Answer these in your own words:

1. Why does each employee have its own `name`?
2. Why doesn't each employee need its own `describe()` function?
3. Where is `describe()` actually stored?
4. How does `employee1.describe()` find the method?
5. What does `this` refer to inside `describe()`?
6. Why are `employee1.describe` and `employee2.describe` the same function?

### Hint

Your final structure should conceptually look like:

```text
employee1 ─────────┐
                   │
employee2 ─────────┤
                   ↓
            Employee.prototype
              ├── describe()
              └── isSenior()
                   │
                   ↓
            Object.prototype
                   │
                   ↓
                  null
```

But each employee has its own data:

```text
employee1
 ├── name
 ├── role
 └── salary

employee2
 ├── name
 ├── role
 └── salary
```

---

# Deep Questions

Answer these without looking at your code.

### 1. What is a constructor function?

Explain it in terms of:

```js
new User(...)
```

rather than just saying "a function that creates objects."

### 2. What does `new` actually do?

Give the approximate 4-step process.

### 3. What is `User.prototype`?

Be careful here.

`User.prototype` is **not the prototype of the constructor function itself**.

Think about:

```js
const user = new User();
```

and:

```js
Object.getPrototypeOf(user) === User.prototype;
```

### 4. Why put methods on the prototype?

What advantage does this have compared with defining:

```js
function User(name) {
  this.name = name;

  this.greet = function () {
    // ...
  };
}
```

inside the constructor?

### 5. How do these concepts connect?

Explain the relationship between:

```text
constructor function
        ↓
new
        ↓
instance
        ↓
User.prototype
        ↓
prototype chain
```

---

# Day 13 Mental Model

The key picture for today is:

```text
                 User
                  │
                  │ new
                  ↓
                user1
                  │
                  ↓
            User.prototype
              ├── greet()
              └── isAdult()
                  │
                  ↓
            Object.prototype
                  │
                  ↓
                 null
```

When you write:

```js
const user = new User("Manju", 40);
```

think:

```text
1. new creates an object
2. object → User.prototype
3. User runs with this = object
4. name/age are stored on the object
```

Then when you write:

```js
user.greet();
```

think:

```text
Does user have greet?
       ↓
      NO
       ↓
Check User.prototype
       ↓
    Found!
       ↓
Call it
       ↓
this = user
```

## The big takeaway

By the end of Day 13, you should understand why this works:

```js
user1.greet();
user2.greet();
```

even though there is only **one shared `greet` function** on `User.prototype`.

That is the foundation you need for **Day 14 — inheritance without `class`**.
