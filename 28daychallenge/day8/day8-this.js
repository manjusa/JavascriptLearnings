// task1

// global function
function test() {
  console.log("global", this);
}

// test(); //this is window in browser runtime.

const x = {
  testInsideObject() {
  //  console.log("inside obj", this);
  },
};

x.testInsideObject();//// Here this is x, because the function is called as a method of x.

function testNestedGlobalEg() {
  console.log("outside nested", this);

  nested();

  function nested() {
    console.log("inside nested", this);
  }
}

//testNestedGlobalEg();//Inside nested(), this is not inherited from testNestedGlobalEg.Because nested() is called as a plain function, its this is window in browser runtime

const obj = {
  testNestedGlobalEg1() {
   // console.log("outside nested**", this);

    const nested = () => {
    //  console.log("inside nested**", this);
    };

    nested();
  },
};

obj.testNestedGlobalEg1();


//task2 - {} with 1 method and prop. call method normally

const obj1= {
  name: 'manju',
  test2() {
  //  console.log(this);
  }  
}
obj1.test2();//obj 
//task2 - assign the same method to a variable and call it again.
const obj1a = {
  name: "manju",
  externalName() {
 //   console.log(this); // this = obj1a
  },
};
const fn = obj1a.externalName;
//fn(); // this = window (browser)

// Task 3 – Arrow Function vs Regular Function
const obj3 = {
  name:"manju",
  normalFunction(){
    console.log("this is normal fn",this);
  },
  arrowFunction: ()=>{
    console.log("this is arrow fn",this);
  }
}
//obj3.normalFunction();//prints obj3
//obj3.arrowFunction();//prints window arrowFunction does not get its own thisit captures this from where the object literal is created, which in browser runtime is typically window.this comes from the outer scope

// Task 4 – Callback Trap ??
const obj4 = {
  name: "manju",
  numbers: [3, 2, 6, 9],

  normalFunction() {
    this.numbers.forEach(function (x) {
      console.log("regular callback this:", this);
      console.log("value:", x);
    });
  },

  arrowFunction() {
    this.numbers.forEach((x) => {
      console.log("arrow callback this:", this);
      console.log("value:", x);
    });
  },
};

// obj4.normalFunction();
// obj4.arrowFunction();

//# 🔹 Task 5 – setTimeout Trap

// const obj5 = {
//   name: "manju",
//   setTimeoutTrap(){
//     setTimeout(()=>console.log("inside",this),5000)
//   }
// }
// obj5.setTimeoutTrap();

const obj5 = {
  name: "manju",

  trapArrow() {
    setTimeout(() => {
      console.log("arrow:", this);// this is obj5
    }, 1000);
  },

  trapSelf() {//Old-style but common:
   
    const self = this;
    setTimeout(function () {
      console.log("self:", self);// self is obj5
    }, 2000);
  },

  trapBind() {
    setTimeout(function () {
      console.log("bind:", this);// this is obj5
    }.bind(this), 3000);
  },

  trapNormal() {
    setTimeout(function () {
      console.log("normal:", this);//this is usually window in browser, or undefined in strict mode / some environments
    }, 4000);
  },
};

obj5.trapArrow();
obj5.trapSelf();
obj5.trapBind();
obj5.trapNormal();

