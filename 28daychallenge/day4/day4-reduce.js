import { users } from "../common/sample-users";

users

//Task 1 – Active User Names
/*
Return an array containing:
- only active users
- transformed into full names

Expected shape:

js
[
  "John Doe",
  "Sam"
]

*/
const activeFullNameUsers = users.filter((user) => user.isActive).reduce((acc:string[], user) => {
    const firstName = user.firstName ?? "";
    const lastName = user.lastName ?? "";
    const fullName=[firstName,lastName].filter(Boolean).join(" ");
    acc.push(fullName);
    return acc;
  }, []);

// activeFullNameUsers;

/*
# 🔹 Task 2 – Average Age of Active Users
Calculate:
- average age of only active users(also ignore invalid ages)

Hints:- filter and then reduce
*/
const activeUsersWithAge = users.filter(
  (user) => user.age != null && user.isActive
);

const avgAge =
  activeUsersWithAge.reduce((acc, user) => acc + user.age, 0) /
  activeUsersWithAge.length;

avgAge;

// Task 3 – Dashboard Summary Object
/*

i didnt implement this..better to do each one separately.Easier that way
*/

// Task 3 – Dashboard Summary Object
/*

i didnt implement this..better to do each one separately.Easier that way
*/

// # Task 4 – Uppercase Names of Adults
/*

```js
[
  "JANE SMITH",
  "EMILY"
]
```
*/

const filterUser = users.filter((user)=>  user.age > 30);
const capsFullNames = filterUser.map((u)=>{
 const firstName= u.firstName;
 const lastName=u.lastName;
 const fullName = [firstName,lastName].filter(Boolean).join(" ");
 return fullName.toUpperCase();
 });
capsFullNames

/*
# 🔹 Task 5 – Sorted Active Users

Return:
- only active users;sorted by age ascending

Important:
- avoid mutating original array
---
*/

const sortedActiveUsers= users.filter((user)=>user.isActive)
                               .sort((a,b) => a.age - b.age);
sortedActiveUsers


