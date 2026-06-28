import { users } from "../common/sample-users";

//users

//task1
/*
function trimString(name) {
  return name.trim();
}

function toUpperCase(name) {
  return name.toUpperCase();
}

function addGreeting(name) {
  return `Hello ${name}`;
}

const result = addGreeting(toUpperCase(trimString("   john   ")));*/

// console.log(result);
//Task 2 – Create a Pipe Function

// const pipe = (name) =>{
//    return addGreeting(name){
//      return toUpperCase(name){
//        return trimString(name){
//          return name;
//        }
//      }
//    };

const pipe = (...fns) => {
  return (value) => {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
};

function trimString(name) {
  return name.trim();
}

function toUpperCase(name) {
  return name.toUpperCase();
}

function addGreeting(name) {
  return "Hello " + name;
}

//const transform = pipe(trimString, toUpperCase, addGreeting);

//transform("  john  ");

//task3
const compose = (...fns) => {
  const reverseArgs = fns.reverse();
  return (value) => {
    return reverseArgs.reduce((acc, fn) => fn(acc), value);
  };
};

const transform = compose(addGreeting, toUpperCase,trimString);
// transform("  john  ");

//task4- pipeline that - Filter active users; full names;uppercase;Sorts alphabetically

// task 4 - pipeline that: filter active users -> full names -> uppercase -> sorts alphabetically

const filterActiveUsers = (users) =>
  users.filter((user) => user.isActive);

const fullNameOfUser = (users) =>
  users.map((user) => [user.firstName, user.lastName].filter(Boolean).join(" "));

const upperCase = (names) =>
  names.map((name) => name.toUpperCase());

const sortAlphabetically = (names) =>
  [...names].sort((a, b) => a.localeCompare(b));

const newPipe = (...fns) => {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
};

const processUsers = newPipe(
  filterActiveUsers,
  fullNameOfUser,
  upperCase,
  sortAlphabetically
);

// processUsers(users);

//  Task 5 – Price Processing Pipeline const price = 100;
// Cr fn: add GST;apply discount;round result. Connect using "pipe" & "compose"


const addGST = (price)=>{
  return price + price * 0.1; // add 10% GST
}


const applyDiscount = (price)=>{
 return price - price * 0.2; // apply 20% discount
}

const roundResult = (price)=>{
  return Math.round(price)
}

const priceProcessingPipe= (...fns)=>{
  return (value) => fns.reduce((acc,fn)=>fn(acc),value) 
}

const process=priceProcessingPipe(addGST,applyDiscount,roundResult);
process(2500);

/* compose for Task5*/
const composePipe = (...fns) => {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
};



