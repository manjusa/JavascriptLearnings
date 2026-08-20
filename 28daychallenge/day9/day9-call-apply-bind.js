
//task1-method on one {}. Invoke it using `call` and `apply` so that it operates on the second object
const obj1 ={
  name:"manju1",
  helloWorld(){
    console.log("insode",this.name);
  }   
}

const obj2 = {
  name:"manju2",
  tryCall(){
    obj1.helloWorld.apply(obj2);
  }
}

//obj2.tryCall() // prints "inside manju2"

//task2 -Arguments: `call` vs `apply`. Write a fn that takes args. Call it with "call" & "apply" n see how args passed

const T2obj1 ={
  helloWorld(separator){
    console.log("inside",this.name, separator , this.age);
  }   
}
const person = {
  name: "manju",
  age:12
};

T2obj1.helloWorld.apply(person,[","]);
T2obj1.helloWorld.call(person, ",");


//task3 -Arguments: 'bind'. permantely fixes this

const T3Person1 ={
  name:"Manju",
  helloWorld(sep){
    console.log("hello person1 ",this.name,sep)
  }  
}
const T3Person2 ={
  name:"Manju1",
  helloWorld(sep){
    console.log("hello person2 ",this.name,sep)
  }  
}

const newFn=T3Person2.helloWorld.bind(T3Person1);
newFn("nice");

//task4- Callback rescue

const user = {
  name: 'Ava',
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

// Passing the method directly loses `this`
setTimeout(user.greet, 0);

// Fix: bind the method to the object
setTimeout(user.greet.bind(user), 0);

// Task 5 – Partial Application

function add(a, b, c) {
  return a + b + c;
}

// Partial application with bind:
const add10 = add.bind(null, 10);      // pre-supply a = 10
const add10and20 = add.bind(null, 10, 20); // pre-supply a = 10, b = 20

console.log(add10(2));        // 12
console.log(add10and20(3));   // 33

// Currying version:
const curriedAdd = a => b => c => a + b + c;

const add10C = curriedAdd(10);
const add10and20C = add10C(20);

console.log(add10C(2)(3));      // 15
console.log(add10and20C(3));    // 33


