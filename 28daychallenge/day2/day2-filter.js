import {users} from "../common/sample-users"


const activeUsers =users.filter((user)=>user.isActive);

//activeUsers //task1
const adultsOnly =users.filter((user)=> user.age>=30);
// adultsOnly //task2

const newArray = users.filter((user)=> user.firstName!=null && 
                              user.firstName.length>0);
// newArray //task3


const complexDS =users.filter((user)=>user.isActive && user.age>=25 && user.firstName!=null && user.firstName.length>0);

complexDS //task4


