// task1

// global function
function test() {
  console.log("global", this);
}

// test(); //this is window in browser runtime.

const x = {
  testInsideObject() {
    console.log("inside obj", this);
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
    console.log("outside nested**", this);

    const nested = () => {
      console.log("inside nested**", this);
    };

    nested();
  },
};

obj.testNestedGlobalEg1();
