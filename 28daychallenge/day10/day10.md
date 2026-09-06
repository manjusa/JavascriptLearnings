#prompt Going forward keep the entire challenge in a single .md block, and put the hints immediately under each task so you can attempt the task without having to search through the document.

# 📅 Day 10 – Execution Context & Lexical Scope

## 🎯 Goal

Understand the mechanisms behind JavaScript execution:

- Execution Context
- Global Execution Context
- Function Execution Context
- Lexical Scope
- Scope Chain
- `var` vs `let` vs `const`
- `this`
- Closures

The goal is NOT to memorize terminology.

The goal is to be able to look at JavaScript code and mentally determine:

1. Which variables are accessible?
2. Where does JavaScript look for a variable?
3. What is the value of `this`?
4. Why can a function access variables from its outer scope?

---

## 📂 File Name

`day10-execution-context.js`

---

# 🔹 Task 1 – Scope Chain

Create **three regular functions** using the `function` keyword:

- `globalFunction()`
- `outerFunction()`
- `innerFunction()`

The relationship should be:

globalFunction()
↓
outerFunction()
↓
innerFunction()

Do NOT use:

- arrow functions
- objects
- classes

The purpose of this task is to test **lexical scope and the scope chain**, not `this`.

Inside each function, create a variable with a different value.

Your task is to determine:

1. Which variables can `innerFunction()` access?
2. Which variables can `outerFunction()` access?
3. Can `outerFunction()` access variables declared inside `innerFunction()`?
4. Can `innerFunction()` access variables declared in `outerFunction()`?

### 🧩 Hint

For a variable such as:

    someVariable

ask:

    "Where was this variable declared?"

Then move outward through the scope chain.

---

# 🔹 Task 2 – Variable Shadowing

Create:

```js
let name = "Global";
```

Then create nested scopes where each scope declares its own:

```js
let name;
```

For example:

```text
Global
  name = "Global"

Outer
  name = "Outer"

Inner
  name = "Inner"
```

Predict what `name` will contain when referenced from:

- Global scope
- Outer scope
- Inner scope

### 🧩 Hint

JavaScript uses the **closest matching declaration**.

Think:

```text
inner scope
    ↓
Does name exist here?
    ↓ no
outer scope
    ↓
Does name exist here?
    ↓ no
global scope
```

## Correct code for Task1 and Task2

```JS
//Task1
function globalFunction() {
  var globalVar = "I am from global function";
  console.log("globalFunction - globalVar:", globalVar);

  function outerFunction() {
    var outerVar = "I am from outer function";
    console.log("outerFunction - outerVar:", outerVar);
    console.log("outerFunction - can access globalVar:", globalVar);

    function innerFunction() {
      var innerVar = "I am from inner function";
      console.log("innerFunction - innerVar:", innerVar);
      console.log("innerFunction - can access outerVar:", outerVar);
      console.log("innerFunction - can access globalVar:", globalVar);
      // ❌ Cannot access: variables declared inside innerFunction from outer functions
    }
    return innerFunction;
  }
  return outerFunction;
}

console.log("=== TASK 1 OUTPUT ===");
var globalFunc = globalFunction();
var outerFunc = globalFunc();
outerFunc();

// ========== TASK 2: VARIABLE SHADOWING ==========
// Each scope declares its own testVar and shadows the outer one

console.log("\n=== TASK 2 OUTPUT ===");

let testVar = "Global testVar";
console.log("Global scope - testVar:", testVar);

function task2Outer() {
  let testVar = "Outer testVar"; // Shadows global testVar
  console.log("Outer scope - testVar:", testVar);

  function task2Inner() {
    let testVar = "Inner testVar"; // Shadows outer testVar
    console.log("Inner scope - testVar:", testVar);
  }

  task2Inner();
}

task2Outer();


```

---

# 🔹 Task 3 – `var` vs `let` vs `const`

Create examples using:

- `var`
- `let`
- `const`

Test them inside:

```js
if (...) {
   // ...
}
```

and inside a function.

Determine which variables can be accessed outside:

- the `if` block
- the function

### 🧩 Hint

Remember:

```text
var   → function scoped
let   → block scoped
const → block scoped
```

Don't just memorize this.

Prove it by writing small examples.

## Task 3 – My Submission

```JS

function task3TestScope() {

        var fnScopedVarVariable = "fnVarManju";
        let fnScopedletVariable = "fnLetManju";
        const fnScopedConstVar = "fnConstManju";

        if (true) {
        var blockScopedVarVariable = "blkVarManju";
        let blockScopedletVariable = "letManju";
        const blockScopedConstVar = "constManju";
        }

        console.log(fnScopedVarVariable);
        console.log(fnScopedletVariable);
        console.log(fnScopedConstVar);
        console.log(blockScopedVarVariable);
       // console.log(blockScopedletVariable); //cant access -ref error
       // console.log(blockScopedConstVar); //cant access -ref error

}

// console.log(fnScopedVarVariable);
// console.log(fnScopedletVariable);
// console.log(fnScopedConstVar);

```

## task3TestScope();

# 🔹 Task 4 – Execution Context

Create a function that calls another function:

```text
Global Execution Context
        ↓
      functionA()
        ↓
      functionB()
```

Inside each function:

- define a local variable
- access variables from the outer function
- log something to show the execution order

Before running the code, predict the order in which things execute.

### 🧩 Hint

Think about the **call stack**:

```text
Global
  ↓
functionA()
  ↓
functionB()
```

When `functionB()` finishes, where does JavaScript return?

---

# 🔹 Task 5 – Scope vs `this`

Create an object:

```js
const user = {
  name: "John",

  showName() {
    // your code
  },
};
```

Inside `showName()`:

- access `name`
- access `this.name`

Then create a nested regular function inside `showName()`.

Try accessing:

```js
name;
```

and:

```js
this.name;
```

from the nested function.

### 🧩 Hint

This task is about separating two concepts:

```text
Variable lookup
      ↓
Lexical Scope

this
      ↓
Call-site / function invocation rules
```

Don't assume they behave the same way.

---

# 🔹 Task 6 – Regular Function vs Arrow Function

Inside an object, create:

- one regular function
- one arrow function

Both should try to access:

```js
this.name;
```

Call both functions.

Predict the result before running the code.

### 🧩 Hint

Remember the key difference:

```text
Regular function
→ has its own `this`

Arrow function
→ does NOT create its own `this`
→ inherits `this` from surrounding lexical context
```

Ask:

> "Where does the arrow function get its `this` from?"

---

# 🔹 Task 7 – Closure Connection

Create a function that returns another function.

The outer function should contain a variable.

The returned function should access that variable.

Conceptually:

```text
outer()
  |
  |-- private variable
  |
  └── returns inner()

inner()
  |
  └── accesses private variable
```

Then call the returned function after the outer function has finished.

### 🧩 Hint

Think about Day 6.

Ask:

> "If `outer()` has already finished executing, why can `inner()` still access the variable?"

The answer involves:

- lexical environment
- scope
- closure

---

# 🧠 Task 8 – Execution Context Mental Model

Take one of your examples and draw the execution flow.

For example:

```text
Global Execution Context
        ↓
createCounter()
        ↓
count = 0
        ↓
returns increment()
        ↓
createCounter() finishes
        ↓
increment() is called
        ↓
increment() accesses count
```

Explain in your own words why `count` is still accessible.

### 🧩 Hint

Don't say:

> "JavaScript keeps the variable alive."

Explain **why** it remains reachable.

Think:

```text
inner function
      ↓
lexical environment
      ↓
outer variable
```

---

# 🧠 Deep Thinking Questions

Answer these in your own words.

## 1. What is an Execution Context?

---

## 2. What is the Scope Chain?

---

## 3. What is Lexical Scope?

Why is it called "lexical"?

---

## 4. What is the difference between Function Scope and Block Scope?

---

## 5. Is `this` determined by lexical scope?

Compare:

- regular functions
- arrow functions

---

## 6. How are closures related to lexical scope?

---

## 7. What happens when JavaScript cannot find a variable?

---

# 🚀 Stretch Goal

Take your Day 6 counter:

```js
createCounter();
```

and explain it using all three concepts:

```text
Execution Context
        +
Lexical Scope
        +
Closure
```

Then explain why the following works:

```js
const counter = createCounter();

counter();
counter();
counter();
```

even though `createCounter()` has already finished executing.

---

# 🔗 Connection to Previous Days

You should now be able to connect:

```text
Day 6
Closures
    ↓
Day 8
this
    ↓
Day 9
call / apply / bind
    ↓
Day 10
Execution Context
+
Lexical Scope
+
Scope Chain
```

These concepts are related, but they are NOT the same thing.

---

# ⚠️ Important Rule for Today

Don't try to memorize JavaScript behavior.

For every example, ask:

```text
Where was the variable declared?
        ↓
What is the current scope?
        ↓
Where will JavaScript look next?
        ↓
Is `this` involved?
        ↓
How was the function called?
```

---

# ✅ Expected Outcome

By the end of Day 10, you should be able to:

- trace variable lookup
- explain lexical scope
- distinguish function scope from block scope
- explain closures
- distinguish scope from `this`
- understand regular vs arrow functions
- mentally trace basic execution contexts
- explain WHY JavaScript behaves the way it does
