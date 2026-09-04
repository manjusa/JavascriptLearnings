// ========== TASK 1: SCOPE CHAIN ==========
// Three-level nested function hierarchy

function globalFunction() {
  var globalVar = "I am from global function";
  console.log("globalFunction - globalVar:", globalVar);

  function outerFunction() {
    var outerVar = "I am from outer function";
    console.log("outerFunction - outerVar:", outerVar);
    console.log("outerFunction - can access globalVar:", globalVar);

    function innerFunction() {
      var innerVar = "I am from inner function";
      console.log("innerFunction - innerVar:", innerVar);
      console.log("innerFunction - can access outerVar:", outerVar);
      console.log("innerFunction - can access globalVar:", globalVar);
      // ❌ Cannot access: variables declared inside innerFunction from outer functions
    }
    return innerFunction;
  }
  return outerFunction;
}

console.log("=== TASK 1 OUTPUT ===");
var globalFunc = globalFunction();
var outerFunc = globalFunc();
outerFunc();

// ========== TASK 2: VARIABLE SHADOWING ==========
// Each scope declares its own testVar and shadows the outer one

console.log("\n=== TASK 2 OUTPUT ===");

let testVar = "Global testVar";
console.log("Global scope - testVar:", testVar);

function task2Outer() {
  let testVar = "Outer testVar"; // Shadows global testVar
  console.log("Outer scope - testVar:", testVar);

  function task2Inner() {
    let testVar = "Inner testVar"; // Shadows outer testVar
    console.log("Inner scope - testVar:", testVar);
  }

  task2Inner();
}

task2Outer();

//task3

function task3TestScope() {
  var fnScopedVarVariable = "fnVarManju";
  let fnScopedletVariable = "fnLetManju";
  const fnScopedConstVar = "fnConstManju";

  if (true) {
    var blockScopedVarVariable = "blkVarManju";
    let blockScopedletVariable = "letManju";
    const blockScopedConstVar = "constManju";
  }

  console.log(fnScopedVarVariable);
  console.log(fnScopedletVariable);
  console.log(fnScopedConstVar);
  console.log(blockScopedVarVariable);
  console.log(blockScopedletVariable); //cant access -ref error
  console.log(blockScopedConstVar); //cant access -ref error
}

// console.log(fnScopedVarVariable);
// console.log(fnScopedletVariable);
// console.log(fnScopedConstVar);

//task3TestScope();

// Task 4: Execution Context

function global() {
  const globalVar = "global";

  console.log("inside global");
  functionA();

  function functionA() {
    const functionAVar = "funcA";

    console.log("inside functionA - globalVar:", globalVar);
    console.log("inside functionA - functionAVar:", functionAVar);

    function functionB() {
      const functionBVar = "funcB";

      console.log("inside functionB - globalVar:", globalVar);
      console.log("inside functionB - functionAVar:", functionAVar);
      console.log("inside functionB - functionBVar:", functionBVar);
    }

    functionB();
  }
}

//global();

// Task 5: Execution Context

const user = {
  name: "manju",

  showName() {
    console.log("showName - this.name:", this.name); // "manju"
    // console.log(name); // ReferenceError: no lexical variable named name

    function nestedInnerFunction() {
      // console.log(name); // ReferenceError: no lexical variable named name
      console.log("nested function - this.name:", this.name); // usually undefined
    }

    nestedInnerFunction();
  },
};

user.showName();
