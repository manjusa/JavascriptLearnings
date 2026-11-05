# Day 16 — Grouping, Deduplication & Nested Data

## Goal

Practise working with arrays containing repeated values, nested arrays, and objects that need grouping.

Today focuses on:

- Grouping objects using `reduce()`
- Aggregating values by category
- Removing duplicates using `Set`
- Flattening nested arrays
- Combining array methods
- Avoiding accidental mutation

---

## Sample Data

Use this data for Tasks 1, 2 and 5.

```js
const employees = [
  { name: "John", department: "IT", salary: 90000 },
  { name: "Sarah", department: "HR", salary: 75000 },
  { name: "Peter", department: "IT", salary: 95000 },
  { name: "Mary", department: "Finance", salary: 85000 },
  { name: "Alex", department: "HR", salary: 70000 },
];
```

---

## Task 1 — Group Employees by Department

Create an object grouping employees by their department.

Expected structure:

```js
{
  IT: [
    // John and Peter
  ],
  HR: [
    // Sarah and Alex
  ],
  Finance: [
    // Mary
  ]
}
```

Requirements:

- Use `reduce()`.
- Each department should be a key.
- Each key should contain an array of employees.
- Preserve the original employee objects.

### Hint

Your accumulator will be an object.

For each employee:

1. Check whether the department already exists.
2. If it doesn't, initialise an empty array.
3. Push the employee into that department's array.

Think about this pattern:

```js
if (!acc[employee.department]) {
  // Initialise department
}
```

---

## Task 2 — Department Salary Summary

Calculate the total salary for each department.

Expected output:

```js
{
  IT: 185000,
  HR: 145000,
  Finance: 85000
}
```

Requirements:

- Use `reduce()`.
- Do not hardcode department names.
- Your solution should work if another department is added.

### Hint

Unlike Task 1, your accumulator doesn't need arrays.

It needs to maintain a running total for each department.

Think about:

```js
acc[employee.department];
```

and how you can add the current employee's salary to it.

---

## Task 3 — Remove Duplicate Values

Given:

```js
const skills = ["JavaScript", "C#", "JavaScript", "React", "C#", "SQL"];
```

Return an array containing only unique skill names.

Expected output:

```js
["JavaScript", "C#", "React", "SQL"];
```

Requirements:

- Preserve the original order.
- Do not modify the original array.
- Use `Set`.

### sln (in file task3)

works because:

new Set(skills) removes duplicates
the spread operator ... converts the set back into an array
order is preserved

---

## Task 4 — Flatten Nested Arrays

Given:

```js
const numbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];
```

Return:

```js
[1, 2, 3, 4, 5, 6];
```

Then try this:

```js
const nestedNumbers = [
  [1, 2],
  [3, [4, 5]],
  [6, [7, [8, 9]]],
];
```

Flatten the entire structure.

### Hint

Look at the built-in method:

```js
array.flat();
```

Investigate its depth argument.

Ask yourself:

- What is the default depth?
- What happens when you pass `2`?
- How can you flatten all levels?

---

## Task 5 — Combine Array Methods

Using the original `employees` array, return the names of employees who:

1. Belong to the IT department.
2. Earn at least 90,000.
3. Are sorted alphabetically by name.

Expected output:

```js
["John", "Peter"];
```

Requirements:

- Do not mutate the original `employees` array.
- Use appropriate built-in array methods.
- Keep the solution readable.

### Hint

Think about the sequence:

```text
Filter by department
        ↓
Filter by salary
        ↓
Sort by name
        ↓
Extract employee names
```

Remember: `sort()` mutates the array it operates on.

---

# Deep Questions

Answer these in your own words.

### 1. Why is `reduce()` suitable for grouping?

Could you achieve the same result using `forEach()`? What would be different?

### 2. What is the difference between these two approaches?

```js
const unique = [...new Set(skills)];
```

and:

```js
const unique = skills.filter(...);
```

Think about what each approach is designed to do.

### 3. What happens when you use:

```js
array.flat();
```

versus:

```js
array.flat(Infinity);
```

### 4. Why should you be careful when using `sort()`?

What does it mutate?

### 5. When would you choose `Map` instead of a plain object for grouping data?

You don't need to implement this today. Just understand the distinction.

---

# Day 16 — Key Takeaways

By the end of today, you should be comfortable with:

| Requirement                   | Useful JavaScript feature |
| ----------------------------- | ------------------------- |
| Group objects by a property   | `reduce()`                |
| Calculate totals by category  | `reduce()`                |
| Remove duplicate values       | `Set`                     |
| Flatten nested arrays         | `flat()`                  |
| Select matching objects       | `filter()`                |
| Find a single matching object | `find()`                  |
| Sort values                   | `sort()`                  |

**Important:** Don't force `reduce()` into every problem. Choose the simplest built-in method that expresses the requirement clearly.

## Completion Check

- [ ] Grouped employees by department.
- [ ] Calculated salary totals by department.
- [ ] Removed duplicates using `Set`.
- [ ] Flattened nested arrays.
- [ ] Combined multiple array methods without mutating the original data.
- [ ] Answered the deep questions.
