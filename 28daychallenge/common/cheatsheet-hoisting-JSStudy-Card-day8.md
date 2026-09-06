# JavaScript Hoisting — Function Declarations vs Function Expressions

## Q) What do you mean by "hoisting is not done the same way"?

We read about hoisting in **`cheatsheet-this-day8`**.

The important difference is between:

- Function declarations
- Function expressions

---

## A) Function Declaration

A function declaration is **fully hoisted**.

The entire function is available before the line where it appears.

```js
sayHi(); // Works because function declarations are hoisted.
// The whole function is available before the code line where it appears.

function sayHi() {
  console.log("hi");
}
```

So this works:

```text
sayHi()
  ↓
JavaScript already knows the complete function
  ↓
"hi"
```

---

## B) Function Expression

A function expression behaves differently.

```js
sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function () {
  console.log("hi");
};
```

Here:

- The variable `sayHi` is hoisted.
- But its value (the function) is **not assigned yet**.
- Because `sayHi` uses `const`, it is in the **Temporal Dead Zone (TDZ)** until execution reaches the declaration.

Think of it as:

```text
sayHi → exists
        ↓
        but has not been initialized
        ↓
        cannot be accessed yet
```

So:

```js
sayHi();
```

causes:

```text
ReferenceError:
Cannot access 'sayHi' before initialization
```

---

# One More Example

Consider `var`:

```js
console.log(a); // undefined

var a = 10;
```

With `var`:

- The variable is hoisted.
- It is automatically initialized with `undefined`.

Conceptually:

```js
var a;

console.log(a); // undefined

a = 10;
```

---

## But with `const`

```js
console.log(b); // ReferenceError

const b = 10;
```

`b` exists in the scope, but it is in the **Temporal Dead Zone (TDZ)** until execution reaches:

```js
const b = 10;
```

Therefore, you cannot access it before that point.

---

# For Functions — Same Idea

The same distinction applies to function declarations and function expressions.

## Short Version

| Type                             | Can be called before its line? |
| -------------------------------- | ------------------------------ |
| Function declaration             | ✅ Yes                         |
| Function expression with `const` | ❌ No                          |
| Function expression with `let`   | ❌ No                          |
| Function expression with `var`   | ❌ No                          |

### Mental model

**Function declaration:**

> The function itself is fully hoisted and can be called before its line.

**Function expression:**

> The variable is hoisted according to whether it uses `var`, `let`, or `const`, but the function value is only assigned when execution reaches the assignment.

---

# Q) Hoisting Quick Reference

## 1. Function Declaration

```js
declarationFn();

function declarationFn() {
  console.log("function declaration");
}
```

✅ Works.

The entire function declaration is hoisted.

---

## 2. Function Expression with `const`

```js
// expressionConst(); // ReferenceError

const expressionConst = function () {
  console.log("function expression with const");
};

expressionConst();
```

❌ Calling it before the declaration causes a `ReferenceError`.

Why?

```text
expressionConst
      ↓
hoisted
      ↓
TDZ
      ↓
const expressionConst = function () {}
      ↓
initialized with function
      ↓
can now be called
```

---

## 3. Function Expression with `var`

```js
expressionVar(); // TypeError: expressionVar is not a function

var expressionVar = function () {
  console.log("function expression with var");
};
```

This one is interesting.

`expressionVar` is hoisted and initialized to:

```js
undefined;
```

Conceptually, JavaScript treats it roughly like:

```js
var expressionVar;

expressionVar(); // undefined()

expressionVar = function () {
  console.log("function expression with var");
};
```

Therefore:

```text
expressionVar()
      ↓
expressionVar is undefined
      ↓
undefined()
      ↓
TypeError: expressionVar is not a function
```

---

## 4. `var` Variable

```js
console.log(varValue); // undefined

var varValue = 10;
```

`varValue` is:

```text
hoisted
   ↓
initialized to undefined
   ↓
10 assigned when execution reaches the declaration
```

---

## 5. `let` Variable

```js
// console.log(letValue); // ReferenceError

let letValue = 20;
```

`letValue` is hoisted but **not initialized**.

It remains in the **Temporal Dead Zone (TDZ)** until execution reaches:

```js
let letValue = 20;
```

---

## 6. `const` Variable

```js
// console.log(constValue); // ReferenceError

const constValue = 30;
```

Same basic rule as `let`:

- Hoisted
- Not initialized
- In the TDZ until the declaration is executed

---

# Quick Explanation

### Function declaration

```js
function declarationFn() {}
```

- Fully hoisted
- Function can be called before its declaration

```js
declarationFn();

function declarationFn() {}
```

✅ Works.

---

### `const` / `let`

```js
const x = 10;
let y = 20;
```

- Hoisted
- Not initialized
- Cannot be accessed before declaration
- They are in the **Temporal Dead Zone (TDZ)**

```js
console.log(x); // ReferenceError
```

---

### `var`

```js
var x = 10;
```

- Hoisted
- Initialized to `undefined`

```js
console.log(x); // undefined
```

---

# Important Difference

Consider:

```js
var expressionVar = function () {};
```

Only the variable declaration is hoisted:

```js
var expressionVar;
```

The function assignment is **not** hoisted:

```js
expressionVar = function () {};
```

So before execution reaches the assignment:

```js
expressionVar === undefined;
```

Therefore:

```js
expressionVar();
```

fails with:

```text
TypeError: expressionVar is not a function
```

### Remember

> **With a function expression, the variable is hoisted, but the function value is not assigned until execution reaches the assignment.**

---

# JavaScript Study Card

## Function Declaration

```js
function fn() {}
```

---

## Function Expression

```js
const fn2 = function () {};
```

---

## Arrow Function

```js
const fn3 = () => {};
```

---

## Object Method Shorthand

```js
const obj1 = {
  fn() {},
};
```

---

## Object Method with Function Expression

```js
const obj2 = {
  fn: function () {},
};
```

---

## Callback

```js
[1, 2, 3].map((n) => n * 2);
```

---

# Hoisting

## Function Declaration

```js
declaredFn(); // works

function declaredFn() {}
```

---

## Function Expression

```js
// exprFn(); // ReferenceError

const exprFn = function () {};
```

---

# `this`

```js
const obj3 = {
  name: "manju",

  fn() {
    console.log(this.name); // "manju"
  },
};

obj3.fn();
```

Here:

```text
obj3.fn()
   ↓
fn() is called as a method of obj3
   ↓
this === obj3
   ↓
this.name === "manju"
```

---

# Final Mental Model

```text
FUNCTION DECLARATION
        ↓
Entire function is hoisted
        ↓
Can call before declaration


FUNCTION EXPRESSION + const/let
        ↓
Variable is hoisted
        ↓
TDZ
        ↓
Function assigned when execution reaches assignment
        ↓
Can call only after assignment


FUNCTION EXPRESSION + var
        ↓
Variable is hoisted
        ↓
Initialized to undefined
        ↓
Function assigned when execution reaches assignment
        ↓
Calling before assignment → TypeError
```

## The One Rule to Remember

> **Function declarations are fully hoisted. Function expressions are not — only the variable declaration is hoisted; the function value is assigned during normal execution.**
