//function basic
// function myFunction() {
//   console.log("hello");
//   console.log("world");
// }
// myFunction();
// myFunction();

// function myNewFunction(msg) {
//   console.log(msg);
// }

// myNewFunction("payel");
// myNewFunction("banerjee");

//2numbers sum
// function sumCalculate(m, n) {
//   console.log("Sum is: ", m + n);
// }
// sumCalculate(20, 14);
// sumCalculate(80, 114);
// sumCalculate(87, 78);

//return from function
// function sumCalculate(m, n) {
//   s = m + n;
//   console.log("before return");
//   return s;
//   console.log("after return");
// }
// let val = sumCalculate(1, 2);
// console.log(val);

//arrow function
// const sumCalculate = (a, b) => {
//   return a + b;
// };
// let val = sumCalculate(3, 4);
// console.log(val);

// const multiply = (m, n) => {
//   return m * n;
// };
// let mulVal = multiply(5, 8);
// console.log(mulVal);

// const helloPrint = () => {
//   console.log("hello");
// };
// helloPrint();
// const helloPrint2 = () => console.log("hello world");
// helloPrint2();

// function abc() {
//   console.log("hello");
// }
// function myFunction(abc) {
//   return abc;
// }
// let val = myFunction("qwerty");
// console.log(val);
//foreach method
let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//   //value at each index
//   console.log(val);
// });
arr.forEach((val) => {
  console.log(val);
});
arr.forEach((val, idx, arr) => {
  console.log(val.toString(), idx, arr);
});
