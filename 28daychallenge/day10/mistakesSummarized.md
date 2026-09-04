#Mistakes

| Task       | ❌ Mistake                                                                             | ✅ Fix                                                                                     |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Task 1** | Missing `globalFunction()` wrapper - only had 2-level nesting                          | Created 3-level hierarchy: globalFunction → outerFunction → innerFunction                  |
| **Task 2** | Used `testVar = "inner"` (reassignment) instead of `let testVar = "inner"` (shadowing) | Changed to `let` declarations in each scope so JavaScript finds the closest variable first |

| Task       | Mistake / Observation                                                                                                                        | What I Learned                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Task 3** | I tried to log `let` and `const` variables outside the `if` block. This causes a `ReferenceError` because they only exist inside that block. | `var` is function-scoped, so a `var` declared in an `if` block can still be accessed elsewhere in the same function. `let` and `const` are block-scoped, so they cannot be accessed outside the `{ }` block where they are declared. |
| **Task 3** | Variables declared inside `task3TestScope()` cannot be logged outside the function.                                                          | `var`, `let`, and `const` declared inside a function are all limited to that function and are unavailable in global scope.                                                                                                           |
| **Task 3** | A `ReferenceError` stops the function at the first invalid `console.log`.                                                                    | Comment out intentional error examples so the valid logs can run and Quokka can show the output.                                                                                                                                     |

| Task | Mistake / Observation | What I Learned |
| ---- | --------------------- | -------------- |

## Task5 - My Submission

```JS
const user = {
  name: "manju",
  showName() {
    console.log(this.name);
    nestedInnerFunction();
    //console.log(name);//
    function nestedInnerFunction() {
      // console.log(name);
      console.log(this.name);
    }
  },
};
console.log("user is:", user.showName());//shouldnt do instead just call user.showName();
```

## Task5 - Correct

```JS
const user = {
  name: "manju",

  showName() {
    console.log("showName - this.name:", this.name); // "manju"
    // console.log(name); // ReferenceError: no lexical variable named name

    function nestedInnerFunction() {
      // console.log(name); // ReferenceError: no lexical variable named name
      console.log("nested function - this.name:", this.name); // usually undefined
    }

    this.nestedInnerFunction();
  },
};

user.showName();
```

| **Task 5** | I expected the nested regular function to use the same `this` as `showName()`. However, it is called as a plain function, so it gets its own `this` value instead of inheriting `user`. | `this` depends on how a regular function is called. `user.showName()` makes `this` equal to `user`, but `nestedInnerFunction()` does not. |
| **Task 5** | I considered using `name` directly, but `name` is an object property, not a variable in lexical scope. | `name` is not available by itself and produces a `ReferenceError`. Use `this.name` to access the object's property from `showName()`. |
