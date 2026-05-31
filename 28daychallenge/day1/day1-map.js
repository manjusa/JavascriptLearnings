import {users} from "../common/sample-users"


/*

users.map((x,y)=> {
return {
    
      "fullName":x.firstName,
      "age":x.age,
       "status":x.isActive?"Active":"Inactive"
}} )
*/
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

transformedUsers

