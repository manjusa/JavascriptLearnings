# `this` Cheat Sheet for Non-Class JavaScript

This cheatsheet covers how `this` behaves in plain functions, object methods, nested functions, arrow functions, callbacks, and bound functions.

## 1. Plain Function Call

A regular function called by itself receives the global object in a browser's non-strict mode. In strict mode or an ES module, `this` is `undefined`.

```javascript
function plainFunction() {
  console.log("plainFunction this:", this);
}

plainFunction();
```

## 2. Object Method: Method Shorthand

When a method is called as `obj.method()`, `this` refers to the object before the dot.

```javascript
const obj1 = {
  method() {
    console.log("obj1.method this:", this);
  },
};

obj1.method(); // this = obj1
```

## 3. Object Method: Function Expression

This is an older syntax for defining an object method. Its `this` behavior is the same as method shorthand.

```javascript
const obj2 = {
  method: function () {
    console.log("obj2.method this:", this);
  },
};

obj2.method(); // this = obj2
```

## 4. Nested Regular Function

A nested regular function does not automatically inherit `this` from its outer function. It is called as a plain function here.

```javascript
function outer1() {
  console.log("outer1 this:", this);

  function inner() {
    console.log("inner this:", this);
  }

  inner(); // plain call
}

outer1();
```

## 5. Nested Arrow Function

An arrow function does not create its own `this`. It inherits `this` from the surrounding function.

```javascript
function outer2() {
  console.log("outer2 this:", this);

  const inner = () => {
    console.log("inner arrow this:", this);
  };

  inner(); // inherits outer2's this
}

outer2();
```

Arrow functions are useful for nested helpers and callbacks when you want to preserve the surrounding `this`. They are usually not suitable as object methods when the method needs the object as `this`.

## 6. Callback to an Array Method

The callback below is a regular function. The array method does not automatically provide the object as `this`.

```javascript
const arr = [1, 2, 3];

arr.map(function (number) {
  console.log("callback this:", this);
  return number * 2;
});
```

The result may be the global object or `undefined`, depending on strict mode and the runtime.

## 7. Callback with `thisArg`

Some array methods accept a second argument that becomes `this` inside a regular callback.

```javascript
arr.map(
  function (number) {
    console.log("callback with thisArg this:", this);
    return number * 2;
  },
  { label: "ctx" },
);
```

## 8. Bound Function

`bind()` creates a new function with a permanently fixed `this` value.

```javascript
function showThis() {
  console.log("bound this:", this);
}

const bound = showThis.bind({ name: "boundObj" });
bound();

// this = { name: "boundObj" }
```

# Object Method Declaration Variations

Each example includes a `name` property so that `this.name` can be inspected.

## 1. Method Shorthand

```javascript
const x1 = {
  name: "x1",
  testInsideObject() {
    console.log("shorthand method", this);
    console.log("name:", this.name);
  },
};

x1.testInsideObject();
```

## 2. Function Expression

```javascript
const x2 = {
  name: "x2",
  testInsideObject: function () {
    console.log("function expression", this);
    console.log("name:", this.name);
  },
};

x2.testInsideObject();
```

## 3. Arrow Function

An arrow function used as an object property does not receive the object as `this`.

```javascript
const x3 = {
  name: "x3",
  testInsideObject: () => {
    console.log("arrow function method", this);
    console.log("name:", this?.name);
  },
};

x3.testInsideObject();
```

## 4. Named Function Expression

```javascript
const x4 = {
  name: "x4",
  testInsideObject: function testInsideObject() {
    console.log("named function expression", this);
    console.log("name:", this.name);
  },
};

x4.testInsideObject();
```

## 5. Add a Method After Object Creation

```javascript
const x5 = {
  name: "x5",
};

x5.testInsideObject = function () {
  console.log("added later", this);
  console.log("name:", this.name);
};

x5.testInsideObject();
```

## 6. Define a Method with `Object.assign`

```javascript
const x6 = Object.assign(
  {
    name: "x6",
  },
  {
    testInsideObject() {
      console.log("Object.assign + shorthand", this);
      console.log("name:", this.name);
    },
  },
);

x6.testInsideObject();
```

## 7. Define a Method with `Object.defineProperty`

```javascript
const x7 = {
  name: "x7",
};

Object.defineProperty(x7, "testInsideObject", {
  value: function () {
    console.log("defineProperty", this);
    console.log("name:", this.name);
  },
});

x7.testInsideObject();
```

## 8. Computed Method Name

```javascript
const methodName = "testInsideObject";

const x8 = {
  name: "x8",
  [methodName]() {
    console.log("computed method name", this);
    console.log("name:", this.name);
  },
};

x8.testInsideObject();
```

## Quick Rules

| Call style                | `this` value                                |
| ------------------------- | ------------------------------------------- |
| `plainFunction()`         | Global object or `undefined` in strict mode |
| `object.method()`         | `object`                                    |
| `nestedRegularFunction()` | Determined by its own call site             |
| Arrow function            | Inherits `this` from its surrounding scope  |
| `function.bind(value)`    | Permanently bound to `value`                |

## Q) What is difference between method and function and function epxression

a) Function

- is reusable block of code (declared with function)
- can be called before its definition due to hoisting

```JS
function greet() {
  return "hello";
} //call like greet()

```

b) Method

- is a function that belongs to an {}.

```JS
const obj = {
greet() {
return "hello";
},
}; // call like obj.greet();
```

c) Function expression

- is a function written as a value and assigned to a variable or object property.
- useful when passing functions around
- not hoisted same way (cheatsheet-hoisting-day8)

```JS
  const greet = function () {
  return "hello";
  };
  // You can also use it in an object:

const obj = {
greet: function () {
return "hello";
},
};
```

// Set Timeout trap - look at day8 task5
