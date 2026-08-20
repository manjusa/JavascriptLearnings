# 📅 Day 1 – Mastering `map` (Real-World Usage)

## 🎯 Goal

Use `map` effectively in real scenarios—not just basic transformations.

---

## 📂 File Name

`day1-map.js`

---

## 🧠 Problem Statement

You are given an array of users:

- Each user has:
  - firstName
  - lastName
  - age
  - isActive

Your task is to transform this data into a **UI-friendly format**.

---

## ⚙️ Requirements

Using ONLY `map` (no loops):

Create a new array where each element:

- Combines first + last name into `fullName`
- Adds a new field:
  - `status`: "Active" or "Inactive"

- Keeps age as is

---

## 🧩 Hints

- Think of `map` as a **shape transformer**
- Return a **new object** for each item
- Avoid mutating original objects

---

## ⚠️ Edge Cases

- Missing fields (e.g., no lastName)
- Null or undefined values
- Empty array

---

## 🧪 Test Yourself

Try variations:

- Only return full names
- Convert all names to uppercase
- Add an `id` field based on index

---

## 🧠 Deep Thinking

- Why is `map` preferred over `forEach` here?
- What happens if you mutate the object inside `map`?
- When should you NOT use `map`?

---

## 🚀 Stretch Goal

- Chain with `filter`:
  - Only include active users

- Think: should filter come before or after map? Why?

---

## 🔗 Real-World Connection

- This is exactly what you do in:
  - React components (props transformation)
  - API response shaping
  - View model creation

---

## ✅ Expected Outcome

By the end, you should:

- Use `map` fluently without thinking
- Avoid common mistakes (mutation, misuse)
- Write cleaner, more readable transformations

## Day1 - my submission

```JS
users.map((x,y)=> {
return {

      "fullName":x.firstName,
      "age":x.age,
       "status":x.isActive?"Active":"Inactive"
}} )

## Day1 -sln as in day1-map.js or below

```

## Day1 - real ans

```JS

const transformedUsers = users.map((user) => {
  const firstName = user.firstName ?? "";
  const lastName = user.lastName ?? "";

  // Build fullName safely
  const fullName = [firstName, lastName]
    .filter(Boolean)           // removes "", null, undefined
    .join(" ") || "Unknown";   // fallback if both missing


  return {
    id:user.id,
    fullName,
    age: user.age ?? "N/A",
    status: user.isActive ? "Active" : "Inactive"
  };
});
```
