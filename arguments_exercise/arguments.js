function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

function sum_rest(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
// console.log(sum_rest(1, 2, 3, 4) === 10);
// console.log(sum_rest(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind = function(that, ...args) {
  
  return (...argsSecond) => this.apply(that, args.concat(argsSecond));
};

Function.prototype.myBind_2 = function () {
  let that = arguments[0];
  let outerArguments = [];
  for (let i = 1; i < arguments.length; i++) {
    outerArguments.push(arguments[i]);
  }

  let fThis = this;

  function returnFunction() {
    let myArgs = [];
    for (let i = 0; i < arguments.length; i++) {
      myArgs.push(arguments[i]);
    }
    fThis.apply(that, outerArguments.concat(myArgs));
  }
  return returnFunction;
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum (numArgs) {
  let nums = [];
  let myFunc = function(arg) {
    nums.push(arg);
    if (nums.length === numArgs) {
      // debugger;
      return sum(...nums);
    } else {
      debugger;
      return myFunc;
    }
  };
  return myFunc;
  
  // return function(arg) {
  //   if (nums.length === numArgs) {
  //     return sum(nums);
  //   } else {
  //     nums.push(arg);
  //     return this;
  //   }
  // };
}

const currSum = curriedSum(4);

// let currSum2 = currSum1(5);
// let currSum3 = currSum2(30);
// let currSum4 = currSum3(20);
// let currSum5 = currSum4(1);
// console.log(currSum5);

// currSum(5)(30)(20)(1); // => 56

Function.prototype.curry = function(numArgs) {
  let that = this; 
  let args = [];
  let myFunc = function (arg) {
    args.push(arg);
    if (numArgs === args.length) {
      return that(...args); 
    } else {
      return  myFunc;
    }
  };

  return myFunc;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30

