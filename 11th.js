const student = {
  fullName: "Payel Banerjee",
  marks: 77,
  printMarks: function () {
    console.log("marks:", this.marks);
  },
};
//prototype new make
const employee = {
  calcTax() {
    console.log("your tax: ", this.salary * 0.1);
  },
};

const payel = {
  salary: 10000,
  calcTax() {
    console.log("your tax2");
  },
};
const riya = {
  salary: 50000,
};

payel.__proto__ = employee; //your tax:  1000
riya.__proto__ = employee; //your tax:  5000

class ToyotaCar {
  // constructor(brand, mileage) {
  //   console.log("creating new object");
  //   this.brandName = brand;
  //   this.mileage = mileage;
  // }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brandName = brand;
  }
}
// let fortuner = new ToyotaCar();
// console.log(fortuner);
let fortuner = new ToyotaCar("fortuner", "10");
// console.log(fortuner);

// let fortunerBrandName = fortuner.setBrand("fortuner");
// console.log(fortunerBrandName);

class Parent {
  hello() {
    console.log("Say hello!");
  }
}
class Child extends Parent {}
let obj = new Child();
// console.log(obj); //obj.hello() Say hello! obj.abc() Uncaught TypeError: obj.abc is not a function

class Person {
  constructor(name) {
    this.species = "home sapiens";
    this.name = name;
  }
  eat() {
    console.log("can eat");
  }
  sleep() {
    console.log("can sleep");
  }
  work() {
    console.log("do nothing");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name); //to invoke parent class constructor
  }
  // constructor(branch) {
  //   super(); //to invoke parent class constructor
  //   this.branch = branch;
  // }
  work() {
    super.eat();
    console.log("solve probs");
  }
}

let payel1 = new Engineer("computer engineer");
let payel2 = new Engineer("payel");
// console.log(payel1);
let p1 = new Person();
// console.log(p1); //Person {species: 'home sapiens'}
let e1 = new Engineer();
// console.log(e1);//Engineer {species: 'home sapiens'}

//error handling
let a = 5;
let b = 10;
// console.log("a+b=", a + c); // stop full process below
try {
  console.log("a+b", a + c);
} catch (err) {
  console.log(err);
} // execute lower process if get an error too
console.log("a-b=", a - b);
