# 📅 Day 6 – Closures & Currying in JavaScript

## 🎯 Goal

Understand:
- closures
- lexical scope
- function factories
- currying
- partial application

Today is where JavaScript starts becoming:
# truly powerful

This is foundational for:
- React
- event handlers
- debouncing
- memoization
- middleware
- functional programming

---

# 📂 File Name

`day6-closures-currying.js`

---

# 🧠 Problem Statement

Your goal today is to understand:
# functions that remember data

even after execution finishes.

You will also learn how:
# one function can return another function

---

# 🔹 Task 1 – Counter Using Closure

Create a function that:
- maintains private count state
- increments count every time function is called

Expected behavior idea:

```js
counter(); // 1
counter(); // 2
counter(); // 3
```

Important:
- count should NOT be directly accessible

---

# 🔹 Task 2 – Function Factory

Create a reusable function that generates:
- greeting functions

Example idea:

```js
const sayHi = createGreeting("Hi");
const sayHello = createGreeting("Hello");
```

Then:

```js
sayHi("John")
```

should produce:
```js
"Hi John"
```

---

# 🔹 Task 3 – Currying Basics

Convert a normal function:

```js
sum(a, b, c)
```

into:

```js
sum(a)(b)(c)
```

---

# 🔹 Task 4 – Tax Calculator (Practical Currying)

Create reusable tax calculators.

Example thinking:

```js
const gstCalculator = createTaxCalculator(0.1);
```

Then:

```js
gstCalculator(100)
```

should calculate:
- amount with tax

---

# 🔹 Task 5 – Delayed Logger

Create a function that:
- remembers a message
- logs it later

Think:
- closure retaining data
- asynchronous behavior

(Hint: `setTimeout`)

---

# ⚠️ Important Thinking

A closure happens when:
# a function remembers variables from its outer scope

even after outer function has finished executing.

---

# 🧩 Hints

## Hint 1 – Closures

Think:

```js
function outer() {
  let value = 0;

  return function inner() {
    value++;
  };
}
```

Why does `value` still exist?

---

## Hint 2 – Currying

Instead of:

```js
sum(1, 2, 3)
```

think:

```js
sum(1)(2)(3)
```

Each function returns:
- another function

until final result.

---

## Hint 3 – Function Factories

One function can create:
- customized functions

This is heavily used in:
- React handlers
- middleware
- configuration systems

---

# ⚠️ Common Mistakes

## ❌ Confusing closure with copy

Closures do NOT copy values.

They keep:
- references to variables

---

## ❌ Global Variables

Avoid solving tasks using globals.

Goal is:
# encapsulated private state

---

## ❌ Forgetting Returned Functions

This:

```js
createGreeting("Hi")
```

returns:
- a function

Not final value.

---

# 🧪 Test Yourself

Try building:

- private bank balance
- click counter
- configurable logger
- reusable multiplier

Example idea:

```js
const double = multiplyBy(2);
const triple = multiplyBy(3);
```

---

# 🧠 Deep Thinking Questions

## 1. Why are closures important in JavaScript?

---

## 2. Why can closures sometimes cause memory leaks?

---

## 3. What is the difference between:
- closure
- currying
- partial application

---

## 4. Why is currying useful in functional programming?

---

# 🚀 Stretch Goal

Create a configurable validator.

Example idea:

```js
const minLength5 = minLengthValidator(5);
```

Then:

```js
minLength5("hello")
```

returns:
```js
true
```

---

# 🔗 Real-World Connection

Closures and currying are heavily used in:
- React hooks
- event listeners
- debounce/throttle
- Redux middleware
- authentication wrappers
- configuration-based systems

---

# ✅ Expected Outcome

By the end, you should:
- understand lexical scoping deeply
- know how functions retain state
- create reusable function factories
- understand currying fundamentals
- think more functionally in JavaScript