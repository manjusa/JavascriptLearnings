# 📅 Day 9 – `call`, `apply`, and `bind`

## 🎯 Goal

Learn how to explicitly control the value of `this` and understand when each method is appropriate.

---

## 📂 File Name

`day9-call-apply-bind.js`

---

## 🔹 Task 1 – Method Borrowing

Create two objects. Define a method on one object and invoke it using `call` and `apply` so that it operates on the second object.

---

## 🔹 Task 2 – Arguments: `call` vs `apply`

Write a function that accepts multiple arguments. Invoke it once with `call` and once with `apply`, observing the difference in how arguments are passed.

---

## 🔹 Task 3 – Persistent Binding

Use `bind` to create a new function whose `this` value is permanently fixed. Verify that assigning the bound function to another variable does not change its behavior.

---

## 🔹 Task 4 – Callback Rescue

Pass an object method as a callback to `setTimeout` (or another API that invokes callbacks). Observe the issue with `this`, then solve it using `bind`.

---

## 🔹 Task 5 – Partial Application

Use `bind` to pre-supply one or more arguments to a function. Compare this technique with the currying you practiced on Day 6.

---

## 🧠 Deep Thinking Questions

1. Why does `bind` return a new function while `call` and `apply` invoke immediately?
2. When would an arrow function be preferable to `bind`?
3. Why can excessive use of `bind` make code harder to follow?

---

## ✅ Expected Outcome

By the end of today, you should be comfortable:
- changing `this` deliberately,
- choosing between `call`, `apply`, and `bind`,
- preserving context in callbacks, and
- recognizing when an arrow function or closure is the simpler solution.