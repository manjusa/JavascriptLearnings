# 📅 Day 5 – Immutability & Reference Behavior in JavaScript

## 🎯 Goal

Understand:
- mutation vs immutability
- object references
- array references
- shallow copy vs deep copy

This is one of the most important JavaScript concepts for:
- React
- Redux
- frontend debugging
- state management
- avoiding hidden bugs

---

# 📂 File Name

`day5-immutability.js`

---

# 🧠 Problem Statement

You are given a `users` array.

Your task is to perform updates WITHOUT mutating:
- the original array
- original objects

You must use:
- spread operator
- map
- filter
- modern JavaScript syntax

(No loops)

---

# 🔹 Task 1 – Update One User Safely

Update:
- only one user’s age

Requirements:
- original `users` array must remain unchanged
- only target user should have updated age

---

# 🔹 Task 2 – Toggle Active Status

Create a new array where:
- one specific user's `isActive` value is toggled

Example:
```js
true → false
false → true
```

Do NOT mutate original objects.

---

# 🔹 Task 3 – Add New Property

Add:
```js
isAdult
```

based on:
```js
age >= 18
```

Return:
- new transformed array
- original objects untouched

---

# 🔹 Task 4 – Remove One User

Remove:
- a user by `id`

Requirements:
- original array should remain unchanged

Hint:
- this is a filtering problem

---

# 🔹 Task 5 – Nested Object Mutation Trap

Use this dataset:

```js
const users = [
  {
    id: 1,
    name: "John",
    address: {
      city: "Melbourne"
    }
  }
];
```

Now:
- create a copied array
- update city in copied version

Question:
> Did original array change too?

Why?

---

# ⚠️ Important Thinking

JavaScript objects and arrays are:
# reference types

Meaning:

```js
const a = obj;
const b = a;
```

Both variables point to:
- same memory reference

---

# 🧩 Hints

## Hint 1 – Spread Operator

```js
{ ...user }
```

creates:
- shallow copy

NOT deep copy.

---

## Hint 2 – Arrays

```js
[...users]
```

copies:
- array structure

BUT:
- nested objects still share references

---

## Hint 3 – Nested Objects

This is where shallow copy breaks.

Think carefully:
- what exactly gets copied?

---

# ⚠️ Common Mistakes

## ❌ Direct Mutation

Avoid:

```js
user.age = 40
```

inside transformations.

---

## ❌ Assuming spread creates deep copy

This is FALSE:

```js
const copied = { ...original }
```

Nested objects are still shared.

---

## ❌ Mutating after filter/map

Even if:
```js
const newUsers = users.map(...)
```

objects inside may still share references.

---

# 🧪 Test Yourself

Try:
- updating nested arrays
- copying arrays of objects
- modifying copied objects
- checking reference equality

Example ideas:

```js
user1 === user2
```

and:

```js
user1.address === user2.address
```

---

# 🧠 Deep Thinking Questions

## 1. Why is immutability important in React?

---

## 2. Why are mutation bugs difficult to debug?

---

## 3. What is the difference between:
```js
=== 
```

for:
- primitives
- objects

---

## 4. Why is deep cloning expensive?

---

# 🚀 Stretch Goal

Implement a safe nested update.

Example:
- update only city
- without mutating original address object

---

# 🔗 Real-World Connection

Immutability is critical in:
- React state updates
- Redux reducers
- caching systems
- undo/redo systems
- frontend rendering optimization

---

# ✅ Expected Outcome

By the end, you should:
- clearly understand references
- stop accidentally mutating objects
- understand shallow vs deep copy
- write safer React-style updates