# 📅 Day 2 – Mastering `filter` (Selective Thinking)

## 🎯 Goal
Learn when and how to use `filter` effectively for clean and predictable data selection.

Today is less about syntax and more about:
- selecting data correctly
- avoiding unnecessary work
- writing readable filtering logic

---

## 📂 File Name
`day2-filter.js`

---

## 🧠 Problem Statement

You are given the same `users` array from Day 1.

Your task is to create different filtered datasets using ONLY:
- `filter`
- optional chaining
- modern JavaScript syntax

(No loops)

---

# 🔹 Task 1 – Active Users

Create a new array containing:
- only active users

---

# 🔹 Task 2 – Adults Only

Create a new array containing:
- users whose age is 30 or above

---

# 🔹 Task 3 – Valid Names Only

Create a new array where:
- `firstName` exists
- `firstName` is not null
- `firstName` is not empty

---

# 🔹 Task 4 – Complex Filtering

Create a dataset where:
- user is active
- age is greater than 25
- `firstName` exists

---

# ⚠️ Important Thinking

Filtering should answer:

> “Should this item stay or be removed?”

Your callback should return:
- `true` → keep item
- `false` → remove item

---

# 🧩 Hints

- Think carefully about:
  - `null`
  - `undefined`
  - empty string
- Use optional chaining where useful
- Avoid overly complicated conditions

---

# ⚠️ Common Mistakes

## ❌ Using `map` instead of `filter`

If you return:

```js
undefined
```

inside `map`,
the array length still remains the same.

`filter` actually removes elements.

---

## ❌ Mutating inside filter

Avoid:

```js
user.isActive = true
```

`filter` should not modify data.

---

## ❌ Over-filtering

Sometimes:

```js
users.filter(...).map(...)
```

is better than:

```js
users.map(...).filter(...)
```

Think about performance and readability.

---

# 🧪 Test Yourself

Try filtering:
- users with missing ages
- inactive users
- names starting with "J"
- users younger than 25

---

# 🧠 Deep Thinking Questions

## 1. Why does `filter` usually return fewer items?

## 2. When should you use `find` instead of `filter`?

## 3. Which is better and why?

```js
users.filter(...).map(...)
```

OR

```js
users.map(...).filter(...)
```

---


# 🔗 Real-World Connection

You use filtering constantly in:
- search results
- admin dashboards
- React rendering
- API response cleanup
- permissions systems

---

# ✅ Expected Outcome

By the end, you should:
- instinctively know when to use `filter`
- avoid misuse of `map`
- write cleaner selection logic
- think about readability + performance