# Better to do after day14

# `prototype` vs `__proto__` (Dunder Proto)

## Core Difference

**prototype** belongs to **constructor functions/classes** and defines the **blueprint** for future instances.  
\***\*proto\*\*** exists on **all objects** and points to the **actual prototype object** they inherit from.

**In short:**

- `prototype` → the blueprint used to create new objects
- `__proto__` → the live link an object uses to look up properties in the inheritance chain

---

## 🔍 Direct Comparison

| Aspect          | `prototype`                                                             | `__proto__`                                          |
| --------------- | ----------------------------------------------------------------------- | ---------------------------------------------------- |
| **What is it?** | A standard property on functions and classes                            | An accessor property on all objects                  |
| **Purpose**     | Defines what the instance’s `__proto__` will be when created with `new` | The active link used to traverse the prototype chain |
| **Example**     | `Array.prototype`, `Person.prototype`                                   | `myArray.__proto__`, `john.__proto__`                |
| **Status**      | Fully standard, core to JS                                              | Deprecated; kept for legacy compatibility            |

---

## 🔗 How They Work Together

```js
function Person(name) {
  this.name = name;
}

// 1. Add a method to the constructor's prototype
Person.prototype.sayHello = function () {
  return `Hello, I'm ${this.name}`;
};

// 2. Create an instance
const alice = new Person("Alice");

// 3. Instance's __proto__ points to Person.prototype
console.log(alice.__proto__ === Person.prototype); // true
```

When you call `alice.sayHello()`, JavaScript checks:

1. Is sayHello on alice directly?
2. If not, follow alice.**proto**
3. Find Person.prototype.sayHello
4. Execute it

✅ Modern Best Practices
Direct use of **proto** is discouraged due to performance and security issues.
Use modern, standard methods instead:

**Get prototype** and **Set prototype:** :

```JS
Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, newProto);
```
