import { users } from "../common/sample-users";

users;

// WRONG i did -task1

/* const usersWithValidAge= users.filter(user=>user.age !=null && user.age != undefined);
 const totalAge= usersWithValidAge.reduce((x,y)=>x.age+y.age,0);
 totalAge*/

//CORRECT approach

/*The issue in your reduce is with the accumulator and current value usage. You're passing (x, y) => x.age + y.age, but in reduce, the accumulator (x) is the accumulated value, and the second parameter (y) is the current element of the array.

Since you want to sum ages, the accumulator should be a number representing the total so far, and the current should be the user object
*/

const totalAge = users.reduce((total, user) => total + user.age, 0);
//totalAge;

//task2-total number of active users

const totalActiveUsers = users.reduce(
  (total, user) => total + (user.isActive ? 1 : 0),
  0
);
//totalActiveUsers

//task3 Transform users into:
/*
```js
{
  Active: [...],
  Inactive: [...]
}
*/
const groupUsers = users.reduce(
  (acc, user) => {
    if (user.isActive) {
      acc.Active = [...acc.Active, user];
    } else {
      acc.Inactive = [...acc.Inactive, user];
    }
    return acc;
  },
  {
    Active: [],
    Inactive: [],
  }
);
//groupUsers;
//task 3 alternate approach
/*
const groupUsers = users.reduce((acc, user) => {
  const status = user.isActive ? "Active" : "Inactive";
  if (!acc[status]) {
    acc[status] = [];
  }
  acc[status].push(user);
  return acc;
}, {});

console.log(groupUsers);
*/

//task4  Create Name Lookup Object
/*
Transform users into:

```js
{
  John: userObject,
  Jane: userObject
}
```

Key should be:
- `firstName`
ignore invalid firstName
*/

const nameLookup = users.reduce((acc,user)=>{
    if(user.firstName!=null && user.firstName.length>0){      
       if(!acc[user.firstName]){
          acc[user.firstName]=[];
        }
       acc[user.firstName].push(user);
    }
      return acc;
},{});

//nameLookup;

//task 5 oldest valid user


const oldestValidUser= users.reduce((oldest,user)=>{
  if(user.age>oldest){
    oldest=user.age;
  }
  return oldest;
},0);

oldestValidUser;
