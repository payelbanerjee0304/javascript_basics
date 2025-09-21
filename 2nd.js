// arithmetic operators
let a = 10;
let b = 5;

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

// //unary operator;
// a++;
// console.log(a);
// b--;
// console.log(b);

// console.log("a++", a++); //a=10
// console.log("++a", ++a); //a= 11

//assignment operators
let m = 2;
let n = 5;

// n = m;
// console.log("n = ", n);

// n += m;
// console.log("n = ", n);

// n -= m;
// console.log("n = ", n);

// n *= m;
// console.log("n = ", n);
// n /= m;
// console.log("n = ", n);
// n %= m;
// console.log("n = ", n);

// n **= m; //n = n**m (5^2)
// console.log("n = ", n);

//Comparison operators
let x = 5;
let y = 2;

// console.log("x == y", x == y); //false

// console.log("x!= y", x != y); //true

// console.log("x === y", x === y);
// console.log("x !== y", x !== y);
// console.log("x < y", x < y);
// console.log("x > y", x > y);
// console.log("x >= y", x >= y);
// console.log("x <= y", x <= y);

// let cond1 = x > y;
// let cond2 = x == 6;
// console.log("cond1 && cond2 = ", cond1 && cond2); //false
// console.log("cond1 || cond2 = ", cond1 || cond2); //true
// console.log("!(cond1 == cond2) = ", !(cond1 == cond2)); //true

let age = 18;

//if statement
// if (age >= 18) {
//   console.log("you can vote");
// }
// if (age <= 18) {
//   console.log("you cannot vote");
// }

//if-else statement
// if (age > 18) {
//   console.log("you can vote");
// } else if (age == 18) {
//   console.log("Great! you can start voting");
// } else {
//   console.log("you connot vote");
// }

//ternary operator
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

//switch statement
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("This is orange");
    break;
  case "Mangoes":
    console.log("This is mango");
    break;
  case "Papayas":
    console.log("This is papayas");
    break;
  default:
    console.log("Not registered");
}
