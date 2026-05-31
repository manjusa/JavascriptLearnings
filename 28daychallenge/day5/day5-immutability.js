import { users } from "../common/sample-users";

//users

//Task1- Update One User Safely
const updateOneUser = users.map(user =>
  user.firstName === 'Sam'
    ? { ...user, age: 15 }
    : user
);

//toggleActiveForOneUserupdateOneUser;

/*Task 2 – Toggle Active Status

new array where - one specific user's `isActive` value is toggled*/

const toggleActiveForOneUser = users.map(user =>
  user.firstName === 'Sam'
    ? { ...user, isActive: !user.isActive }
    : user
);

// toggleActiveForOneUser;

/* Task 3 – Add New Property  "isAdult" based on "age>-18"
Return: - new transformed array; original objects untouched
*/

const userWithNewProp = users.map(user => ({
  ...user,
  isAdult: user.age >= 18,
}));

//userWithNewProp

/*Task 4 – Remove One User-  a user by `id`
original [] should remain unchanged
*/

const newUsersWithOneUserRemoved = (id)=>{
 return users.filter((user)=>user.id!=id);
}
//newUsersWithOneUserRemoved(5);

/* Task 5 – Nested Object Mutation Trap
- create a copied array; update city in copied version
*/
const users1 = [
  {
    id: 1,
    name: "John",
    address: {
      city: "Melbourne"
    }
  }
];

const users2 = users1.map(user =>
  user.id === 1
    ? {
        ...user,
        address: {
          ...user.address,//copy of address too
          city: "Sydney"
        }
      }
    : user
);

//primitives 
const a=5;
const b=5;
a===b;//checks value




                                                                     
                                                                  