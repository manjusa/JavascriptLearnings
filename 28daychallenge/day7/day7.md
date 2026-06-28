# 📅 Day 7 – Function Composition & Pipe (Building Function Pipelines)

## 🎯 Goal

Learn how to:
- combine small functions into larger operations
- build reusable transformation pipelines
- understand `compose` and `pipe`
- think functionally

Today is less about creating new logic and more about:
# connecting existing logic together

This is the natural progression from:
- map
- filter
- reduce
- closures
- currying

---

# 📂 File Name

`day7-compose-pipe.js`

---

# 🧠 Problem Statement

You have multiple small functions:

Examples:
- trim text
- convert to uppercase
- add prefix
- calculate tax
- apply discount

Instead of calling them manually one after another, create reusable pipelines.

---

# 🔹 Task 1 – Manual Function Chaining

Create 3 small functions:

Example ideas:
- trimString
- toUpperCase
- addGreeting

Use them manually:

```js
addGreeting(
    toUpperCase(
        trimString(name)
    )
)
```

Observe how readability changes as more functions are added.

---

# 🔹 Task 2 – Create a Pipe Function

Build a utility that executes functions:

Left → Right

Example thinking:

```js
pipe(
  trimString,
  toUpperCase,
  addGreeting
)
```

Then:

```js
transform("  john  ")
```

Expected flow:

```text
"  john  "
      ↓
"john"
      ↓
"JOHN"
      ↓
"Hello JOHN"
```

---

# 🔹 Task 3 – Create a Compose Function

Build a utility that executes functions:

Right → Left

Example thinking:

```js
compose(
  addGreeting,
  toUpperCase,
  trimString
)
```

Observe how this differs from `pipe`.

---

# 🔹 Task 4 – User Transformation Pipeline

Using the users dataset:

Create a reusable pipeline that:

1. Filters active users
2. Extracts full names
3. Converts names to uppercase
4. Sorts alphabetically

Expected output:

```js
[
  "JOHN DOE",
  "SAM"
]
```

---

# 🔹 Task 5 – Price Processing Pipeline

Given:

```js
const price = 100;
```

Create functions for:

- add GST
- apply discount
- round result

Connect them using:
- pipe
- compose

Compare readability.

---

# ⚠️ Important Thinking

A good function should:

- do one thing
- be reusable
- be testable

Composition lets you combine many small functions into one larger behavior.

---

# 🧩 Hints

## Hint 1

Think of:

```text
output of function A
becomes
input of function B
```

---

## Hint 2

Pipe usually reads naturally:

```text
Start here
 ↓
Then this
 ↓
Then this
```

---

## Hint 3

Compose is mathematically elegant but can be harder to read.

---

# ⚠️ Common Mistakes

## ❌ Large Functions

Avoid creating one giant function.

Goal:

```text
many small reusable functions
```

---

## ❌ Functions with Side Effects

Prefer:

```js
input → output
```

rather than:

```js
input → modify external variable
```

---

## ❌ Forgetting Return Values

Composition only works when each function returns a value.

---

# 🧪 Test Yourself

Create pipelines for:

- username formatting
- email cleanup
- currency formatting
- product transformation
- report generation

Example idea:

```js
cleanEmailPipeline
```

that:

- trims
- lowercases
- validates

---

# 🧠 Deep Thinking Questions

## 1. Why are small functions easier to maintain?

---

## 2. What is the difference between:

```js
compose()
```

and

```js
pipe()
```

---

## 3. Why is composition preferred over inheritance in many modern JavaScript codebases?

---

## 4. When can composition become harder to debug?

---

# 🚀 Stretch Goal

Create a generic data processing pipeline for users.

Example:

```js
processUsers(users)
```

Internally:

- filter
- map
- sort
- format

The caller should not know how the transformation happens.

---

# 🔗 Real-World Connection

Function composition is heavily used in:

- React
- Redux
- RxJS
- Express middleware
- Functional Programming
- Data transformation libraries

---

# ✅ Expected Outcome

By the end, you should:

- understand composition
- understand pipe vs compose
- build reusable pipelines
- write smaller functions
- start thinking functionally rather than procedurally