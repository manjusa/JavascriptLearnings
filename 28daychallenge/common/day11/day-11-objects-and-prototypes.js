const user = {
  name: "Manju",
  age: 32,
  isActive: true,
};
console.log(user.name);
console.log(user["age"]);
var propertyName = "isActive";
console.log(user[`propertyName`]);
console.log(user.address);
const user1 = { ...user, city: "melbourne" };
console.log(user1);
user = { ...user, age: 31 };
console.log(user);
