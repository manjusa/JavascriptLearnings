//Task1 -Counter Using Closure
const counterFunc = () => {
  let count=0;
  return function counter1() {
      count= count+1;
     return count;
  }
}
const counter=counterFunc();
counter();
counter();

// Task 2 – Function Factory

/*
Eg
const sayHi = createGreeting("Hi");
const sayHello = createGreeting("Hello");
sayHi("John") //prints Hi John
*/

const createGreeting = (greeting)=>{  
  return function (name){
    console.log(greeting+" "+ name);
  }
}
const sayHi = createGreeting("Hi");
sayHi("John");

const sayHello = createGreeting("Hello");
sayHello("John");

// Task 3 – Currying 
/*
Convert sum(a, b, c)  into sum(a)(b)(c)
*/

function sum(a,b,c){
  return a+b+c;
}
sum(10,12,1);
function sum(a){
  return function sum(b){
    return function sum(c){
      return a+b+c;
    }
  }  
}
sum(10)(12)(5)

// Task 4 – Tax Calculator (Practical Currying)- Give amount and add GST

const createTaxCalculator=(taxPercentage)=>{
  
  return function (amount){
    return amount+taxPercentage * amount;
  }
  
}
const gstCalculator = createTaxCalculator(0.1);
gstCalculator(100)

// Task 5 – Delayed Logger
/*
Cr () 
- remembers a message
- logs it later

(Hint: `setTimeout`) - since we need async behaviour and closure retatining data
*/
const delayLogger = (message)=>{
 const id = setTimeout(()=>{
    console.log("this is message "+message)
  },4000)
  
}
delayLogger("nice")
delayLogger("nice22")