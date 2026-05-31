# Day 4 – Chaining Array Methods Thinking in Data Pipelines
## 🎯 Goal

Learn how to combine:
- `filter`
- `map`
- `reduce`

to build clean and readable data transformation pipelines.

Today is about:
# flowing data step-by-step

instead of writing large procedural logic.

---

# 📂 File Name

`day4-chaining.js`

---

# 🧠 Problem Statement

You are given the same `users` array.

Your task is to solve all problems using:
- chaining
- modern JavaScript methods
- clean readable transformations

(No loops)

---

# 🔹 Task 1 – Active User Names

Return an array containing:
- only active users
- transformed into full names

Expected shape:

```js
[
  "John Doe",
  "Sam"
]
```

---

# 🔹 Task 2 – Average Age of Active Users

Calculate:
- average age
- considering only active users
- ignore invalid ages

Hints:
- filter first
- then reduce

---

# 🔹 Task 3 – Dashboard Summary Object

Build an object like:

```js
{
  totalUsers: 6,
  activeUsers: 3,
  inactiveUsers: 3,
  validNames: 5
}
```

Think carefully:
- should everything be one reduce?
- or multiple readable operations?

---

# 🔹 Task 4 – Uppercase Names of Adults

Return:
- uppercase full names
- only users aged 30+

Expected idea:

```js
[
  "JANE SMITH",
  "EMILY"
]
```

---

# 🔹 Task 5 – Sorted Active Users

Return:
- only active users
- sorted by age ascending

Important:
- avoid mutating original array

---

# ⚠️ Important Thinking

Chaining should feel like:

```text
raw data
   ↓
filtered data
   ↓
transformed data
   ↓
aggregated result
```

Each step should have ONE responsibility.

---

# 🧩 Hints

## Hint 1 – Order Matters

Usually:

```js
filter → map
```

is better than:

```js
map → filter
```

Why?

Because:
- fewer objects transformed
- less unnecessary work

---

## Hint 2 – Mutation Trap

Be careful with:

```js
sort()
```

It mutates arrays.

Think:
- how can you avoid mutating original data?

---

## Hint 3 – Readability Matters

This:

```js
users
  .filter(...)
  .map(...)
  .reduce(...)
```

is good.

But giant unreadable chains are not.

---

# ⚠️ Common Mistakes

## ❌ Over-chaining

Avoid:
- deeply nested callbacks
- unreadable pipelines

---

## ❌ Doing everything in one reduce

Possible?
Yes.

Readable?
Not always.

---

## ❌ Forgetting intermediate intent

Each method should answer:
- `filter` → keep/remove?
- `map` → transform?
- `reduce` → accumulate?

---

# 🧪 Test Yourself

Try creating:

- active users sorted by name
- grouped active/inactive names
- average age by status
- array of valid emails (if emails added)

---

# 🧠 Deep Thinking Questions

## 1. Why is chaining considered more declarative?

---

## 2. When does chaining hurt readability?

---

## 3. Is this always better?

```js
users.filter(...).map(...)
```

vs

```js
for loop
```

Think about:
- readability
- performance
- maintainability

---


# 🔗 Real-World Connection

Chaining is heavily used in:
- React rendering
- API transformation
- reporting systems
- analytics dashboards
- frontend state management

---

# ✅ Expected Outcome

By the end, you should:
- think in transformation pipelines
- combine array methods naturally
- write cleaner declarative code
- understand readability vs performance tradeoffs