# Day 11 — Objects & Prototypes

## Goal

Understand:

- Object properties and methods
- Property lookup
- Object references
- `Object.create()`
- Prototypes
- Own properties vs inherited properties
- How methods can be shared through a prototype
- How `this` works when a method comes from a prototype

**Important:** Do NOT use `class` syntax today.

When a task says **regular function**, use `function () {}` — not an arrow function.

---

# Task 1 — Object Property Lookup

Create this object:

```js
const user = {
  name: "Manju",
  age: 40,
  isActive: true,
};
```

Answer by writing code:

1. Access `name` using dot notation.
2. Access `age` using bracket notation.
3. Create a variable called `propertyName = "isActive"` and use it to access the property.
4. Try accessing a property that doesn't exist.
5. Add a new property called `city`.
6. Change `age`.
7. Delete `isActive`.

### Hint

There are two different ideas:

```js
user.name;
```

and:

```js
user["name"];
```

Bracket notation becomes especially useful when the property name is stored in a variable.

## Task 1 Review

| Requirement                         | Your submission                                 | Correct submission                                                       | What was wrong / right approach                                                                                                  |
| ----------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Use a variable to access `isActive` | `console.log(user[\`propertyName\`]);`          | `const propertyName = "isActive";`<br>`console.log(user[propertyName]);` | Your template literal contains the text `propertyName`; it does not use the variable. Use the variable directly inside brackets. |
| Add `city`                          | `const user1 = { ...user, city: "melbourne" };` | `user.city = "Melbourne";`                                               | You created a new object instead of adding the property to `user`, which is what the task requested.                             |
| Change `age`                        | `user = { ...user, age: 31 };`                  | `user.age = 31;`                                                         | `user` is a `const`, **so the variable cannot point to a new object**. Its properties can still be changed.                      |
| Delete `isActive`                   | Not included                                    | `delete user.isActive;`                                                  | The delete step was missing.                                                                                                     |

### Correct Task 1 Submission

```js
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
```

---

# Task 2 — Objects Are References

Use:

```js
const user1 = {
  name: "John",
};

const user2 = user1;
```

Before running the code, predict:

```js
user2.name = "Peter";

console.log(user1.name);
console.log(user2.name);
console.log(user1 === user2);
```

Then answer:

1. Why did changing `user2` affect `user1`?
2. Are `user1` and `user2` two separate objects?
3. What does `===` compare for objects?

### Hint

Think about:

```text
user1 ───────┐
             ↓
          { name: "John" }
             ↑
             │
user2 ───────┘
```

The variables hold a **reference to the object**, not a separate copy of the object.

---

# Task 3 — Shallow Copy

Create:

```js
const user1 = {
  name: "John",
  age: 30,
};
```

Create `user2` as a copy using the spread operator.

Then:

1. Change `user2.name`.
2. Check `user1.name`.
3. Check whether `user1 === user2`.
4. Explain why changing `user2.name` does not change `user1.name`.

### Hint

The spread operator creates a **new object**:

```js
const user2 = { ...user1 };
```

Compare this with Task 2.

---

# Task 4 — Nested Object Reference Trap

Use:

```js
const user1 = {
  name: "John",
  address: {
    city: "Melbourne",
  },
};

const user2 = { ...user1 };
```

Now execute:

```js
user2.address.city = "Sydney";
```

Predict:

```js
console.log(user1.address.city);
console.log(user2.address.city);

console.log(user1 === user2);
console.log(user1.address === user2.address);
```

### Hint

The spread is only a **shallow copy**.

Think about the structure:

```text
user1 ──→ Object
          │
          ├── name
          │
          └── address ──→ Address Object
                              ↑
user2 ──→ Object              │
                              │
                       same address
```

The outer objects are different.

The nested `address` object is shared.

---

# Task 5 — Object Method + `this`

Create this object:

```js
const user = {
  name: "Manju",

  showName: function () {
    console.log(this.name);
  },
};
```

**Requirement:** `showName` must be a regular function.

Call:

```js
user.showName();
```

Then:

1. Explain what `this` refers to.
2. Store the method in another variable:

```js
const fn = user.showName;
```

3. Call:

```js
fn();
```

Predict what happens.

### Hint

Use your Day 8–10 mental model:

> For a regular function, `this` depends on **how the function is called**.

Compare:

```js
user.showName();
```

with:

```js
fn();
```

The function itself hasn't changed.

The **call site** has changed.

---

# Task 6 — Own Property vs Prototype Property

Create:

```js
const parent = {
  country: "Australia",
};

const user = Object.create(parent);

user.name = "Manju";
```

Now check:

```js
console.log(user.name);
console.log(user.country);
```

Then check:

```js
console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("country"));
```

Answer:

1. Where does `name` come from?
2. Where does `country` come from?
3. Why can `user.country` work even though `country` isn't directly inside `user`?

### Hint

JavaScript performs property lookup roughly like:

```text
Does user have the property?
        ↓
      YES → return it

        NO
        ↓
Check user's prototype
        ↓
Does prototype have it?
        ↓
      YES → return it
```

This is the beginning of the **prototype chain**.

---

# Task 7 — Prototype Method

Create:

```js
const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
```

**Requirement:** `greet` must be a regular function.

Now create two objects using `Object.create()`:

```js
const user1 = Object.create(personPrototype);
const user2 = Object.create(personPrototype);
```

Give them different names.

Then call:

```js
user1.greet();
user2.greet();
```

Answer:

1. Where is `greet` actually stored?
2. Does `user1` contain its own copy of `greet`?
3. Does `user2` contain its own copy of `greet`?
4. Why does `this.name` refer to the correct user?

### Hint

The method is shared:

```text
personPrototype
      │
      └── greet()
       ↑          ↑
       │          │
     user1      user2
```

But when you call:

```js
user1.greet();
```

the call site determines:

```js
this === user1;
```

---

# Task 8 — `Object.create()` Mental Model

Create:

```js
const animal = {
  eat() {
    console.log("Eating");
  },
};

const dog = Object.create(animal);

dog.bark = function () {
  console.log("Barking");
};
```

Now call:

```js
dog.bark();
dog.eat();
```

Answer:

1. Why does `dog.bark()` work?
2. Why does `dog.eat()` work?
3. Is `eat` an own property of `dog`?
4. Is `bark` an own property of `dog`?
5. What is the prototype of `dog`?

### Hint

Draw:

```text
dog
 │
 ├── bark
 │
 ↓ prototype
animal
 │
 └── eat
```

---

# Task 9 — `in` vs `hasOwnProperty`

Using the `animal` / `dog` example from Task 8, test:

```js
console.log("bark" in dog);
console.log("eat" in dog);

console.log(dog.hasOwnProperty("bark"));
console.log(dog.hasOwnProperty("eat"));
```

Predict the four results before running the code.

Then explain the difference between:

```js
"eat" in dog;
```

and:

```js
dog.hasOwnProperty("eat");
```

### Hint

`in` asks:

> Can this property be found on the object OR somewhere in its prototype chain?

`hasOwnProperty()` asks:

> Does this object itself own this property?

---

# Task 10 — Prototype + `this` Challenge

Create:

```js
const userPrototype = {
  describe: function () {
    console.log(this.name);
    console.log(this.role);
  },
};
```

**Requirement:** `describe` must be a regular function.

Create two users using `Object.create()`:

```text
User 1
name: "John"
role: "Developer"

User 2
name: "Sarah"
role: "Tester"
```

Both users should share the same `describe()` method through the prototype.

Call:

```js
user1.describe();
user2.describe();
```

Then answer:

> How can the exact same function produce different results?

### Hint

Don't think:

> "The prototype decides what `this` is."

Instead think:

> "The call site decides what `this` is."

---

# Task 11 — Inspect the Prototype

Using:

```js
const parent = {
  country: "Australia",
};

const user = Object.create(parent);

user.name = "Manju";
```

Investigate:

```js
Object.getPrototypeOf(user);
```

Also investigate:

```js
Object.getPrototypeOf(parent);
```

Answer:

1. What does `Object.getPrototypeOf(user)` return?
2. What does `Object.getPrototypeOf(parent)` return?
3. What eventually happens when you keep following prototypes?
4. What is `null` doing at the end?

### Hint

Think of the chain as:

```text
user
  ↓
parent
  ↓
Object.prototype
  ↓
null
```

Don't worry about memorising every detail yet.

The goal is to understand that the chain eventually terminates at `null`.

---

# Task 12 — Predict Before Running

Do NOT run this immediately.

Predict the output:

```js
const person = {
  name: "Person",
  greet() {
    console.log(this.name);
  },
};

const employee = Object.create(person);

employee.name = "Employee";

employee.greet();
```

Then answer:

1. Where is `greet` found?
2. What is `this`?
3. What does `this.name` resolve to?
4. Does JavaScript use `person.name` or `employee.name`?

### Hint

Separate these two mechanisms:

**Prototype lookup**

```text
employee
   ↓
person
   ↓
greet found
```

**`this`**

```text
employee.greet()
       ↑
    this = employee
```

---

# Deep Questions

Try to answer these in your own words:

### 1. What is a prototype?

Don't give a textbook definition. Explain it using:

```text
object → prototype → prototype → ...
```

### 2. Why do prototypes exist?

What problem does sharing methods through a prototype solve?

### 3. What is the difference between:

```js
user.name;
```

and:

```js
user.greet();
```

when both properties might be found through the prototype chain?

### 4. Does JavaScript copy a prototype method into the object?

Explain what actually happens.

### 5. How are these three concepts different?

```text
Scope
this
Prototype
```

You learned the first two in Days 8–10. Today add the third.

### 6. What happens when a property isn't found?

For example:

```js
user.someRandomProperty;
```

Explain the lookup process.

---

# Stretch Challenge — Build Your Own Prototype-Based Users

Create a shared prototype:

```text
userPrototype
    ├── greet()
    └── describe()
```

Create three users using:

```js
Object.create(userPrototype);
```

Each user should have their own:

```text
name
role
```

All users should share the same prototype methods.

Then prove that:

```js
user1.greet === user2.greet;
```

is `true`.

But also prove that:

```js
user1 !== user2;
```

is `true`.

Finally explain **why this is useful**.

---

# Day 11 Mental Model

By the end of today, you should be able to mentally see:

```text
                 Object.prototype
                       ↑
                       │
                personPrototype
                 ┌─────┴─────┐
                 │           │
              user1        user2
              name         name
              role         role
                 │           │
                 └─────┬─────┘
                       │
                  shared methods
```

And when you see:

```js
user1.greet();
```

you should mentally separate:

```text
1. Find "greet"
       ↓
   user1?
       ↓
   prototype?
       ↓
   found!

2. Call the function
       ↓
   this = user1
```

That separation is one of the most important ideas for Days 11–14.
