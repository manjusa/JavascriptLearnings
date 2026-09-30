# Day 12 — Prototype Chain & Property Lookup

## Goal

Today you will understand:

- How the prototype chain works
- How JavaScript searches for properties
- Property shadowing
- `Object.prototype`
- `Object.getPrototypeOf()`
- How the chain eventually ends at `null`
- Why inherited methods such as `toString()` work

**Important:** Do NOT use `class` syntax today.

For functions used as methods, use regular functions/method syntax unless the task says otherwise.

---

# Task 1 — Follow the Prototype Chain

Start with:

```js
const animal = {
  type: "Animal",
};

const dog = Object.create(animal);

dog.name = "Buddy";
```

Predict:

```js
console.log(dog.name);
console.log(dog.type);
```

Then investigate:

```js
console.log(Object.getPrototypeOf(dog));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(dog)));
```

Answer:

1. Where is `name` found?
2. Where is `type` found?
3. What is the prototype of `dog`?
4. What is the prototype of `animal`?

### Hint

Think about the chain:

```text
dog
 ↓
animal
 ↓
Object.prototype
 ↓
null
```

When JavaScript looks for a property, it starts with the object and moves upward.

---

# Task 2 — Property Shadowing

Use:

```js
const animal = {
  type: "Animal",
  name: "Generic Animal",
};

const dog = Object.create(animal);

dog.name = "Buddy";
```

Predict:

```js
console.log(dog.name);
console.log(animal.name);
```

Now change:

```js
dog.name = "Max";
```

Predict again.

Then delete the property:

```js
delete dog.name;
```

Predict:

```js
console.log(dog.name);
```

### Hint

The important question is:

> Does `dog` have its own `name` property?

If yes, JavaScript stops looking.

If no, it continues up the prototype chain.

This is called **property shadowing**.

---

# Task 3 — The Same Property at Multiple Levels

Create:

```js
const grandparent = {
  value: "grandparent",
};

const parent = Object.create(grandparent);

parent.value = "parent";

const child = Object.create(parent);

child.value = "child";
```

Now predict:

```js
console.log(child.value);
```

Then:

```js
delete child.value;

console.log(child.value);
```

Then:

```js
delete parent.value;

console.log(child.value);
```

Answer:

1. Why does the result change?
2. Which `value` does JavaScript find first?
3. What happens when the property is deleted from one level?

### Hint

Draw:

```text
child
 └── value: "child"
       ↓
parent
 └── value: "parent"
       ↓
grandparent
 └── value: "grandparent"
```

Property lookup starts at the **closest object**.

---

# Task 4 — `Object.prototype`

Consider:

```js
const user = {
  name: "Manju",
};
```

Now run:

```js
console.log(user.toString);
console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("toString"));
```

Then:

```js
console.log(Object.getPrototypeOf(user));
```

Answer:

1. Did you define `toString()` yourself?
2. Why does `user.toString()` still work?
3. Is `toString` an own property of `user`?
4. Where does `toString` come from?

### Hint

Most normal JavaScript objects eventually inherit from:

```js
Object.prototype;
```

Think:

```text
user
 ↓
Object.prototype
 ↓
null
```

Methods such as `toString()` are inherited from `Object.prototype`.

---

# Task 5 — `in` vs `hasOwnProperty`

**hasOwnProperty() checks only the object itself. The in operator checks the object and its prototype chain.**
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

Predict all four:

```js
console.log("bark" in dog);
console.log("eat" in dog);

console.log(dog.hasOwnProperty("bark"));
console.log(dog.hasOwnProperty("eat"));
```

Then explain the difference.

Another eg

```js
console.log(animal5.hasOwnProperty("type")); // true
console.log(dog5.hasOwnProperty("name")); // true
console.log(dog5.hasOwnProperty("type")); // false — inherited, not own
console.log("type" in dog5); // true — found in prototype chain
```

### Expected mental model:

```text
dog
 ├── bark        ← own
 │
 ↓
animal
 └── eat         ← inherited
```

---

# Task 6 — Final Prototype Chain Challenge

**Do NOT run this until you've predicted everything.**

```js
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
```

Predict every output.

Then answer:

### 1. Where is `name`?

```text
employee
```

or:

```text
person
```

### 2. Where is `species`?

### 3. Where is `greet()`?

### 4. Why does `this.name` inside `greet()` return `"Manju"`?

### 5. Is `species` an own property?

### 6. Is `species` still accessible?

### 7. What does this prove?

```js
Object.getPrototypeOf(employee) === person;
```

### Hint

Keep these two concepts separate:

**Property lookup**

```text
employee
   ↓
person
   ↓
Object.prototype
   ↓
null
```

**`this`**

```js
employee.greet();
```

means:

```text
this === employee
```

---

# Deep Questions

Answer these in your own words.

### 1. What exactly is the prototype chain?

Explain it without using the phrase "it's just inheritance."

### 2. When JavaScript evaluates:

```js
object.someProperty;
```

what is the lookup process?

### 3. What is property shadowing?

Give your own example.

### 4. Why can this be true?

```js
"toString" in user;
```

while this is also true:

```js
user.hasOwnProperty("toString") === false;
```

### 5. What happens when JavaScript reaches `null`?

For example:

```text
object
 ↓
prototype
 ↓
Object.prototype
 ↓
null
```

What happens if the requested property hasn't been found?

---

# Stretch Challenge — Draw the Chain

Create this structure:

```text
grandparent
    ↓
parent
    ↓
child
```

Where:

- `grandparent` has `country`
- `parent` has `role`
- `child` has `name`

Then prove that:

```js
child.name;
child.role;
child.country;
```

all work.

But also prove:

```js
child.hasOwnProperty("name"); // true
child.hasOwnProperty("role"); // false
child.hasOwnProperty("country"); // false
```

Finally draw the complete lookup chain.

---

# Day 12 Mental Model

When you see:

```js
child.someProperty;
```

think:

```text
1. Check child
       ↓
   Found?
   ├── YES → return value
   └── NO
       ↓
2. Check child's prototype
       ↓
   Found?
   ├── YES → return value
   └── NO
       ↓
3. Continue up the prototype chain
       ↓
4. Eventually reach null
       ↓
5. Property not found
```

The most important distinction from Day 11:

### Day 11

You learned:

> Objects can delegate property/method lookup to their prototype.

### Day 12

You are learning:

> **Exactly how JavaScript walks that chain and what happens when the same property exists at multiple levels.**

Keep this mental model — it will make **Day 13 (constructor functions + prototype methods)** much easier.
