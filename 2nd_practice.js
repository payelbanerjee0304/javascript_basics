//Question #1
// alert("hello"); //one-time pop-up
// const input = prompt("enter a number"); //one time pop with input
// let result =
//   input % 5 === 0
//     ? "- this no. is multiple with 5"
//     : "- this no. isn't multiple with 5";
// console.log(input, result);

//Question #2
const mark = prompt("Enter your mark");
let grade;
if (mark >= 80 && mark <= 100) {
  grade = "A";
} else if (mark >= 70 && mark <= 79) {
  grade = "B";
} else if (mark >= 60 && mark <= 69) {
  grade = "C";
} else if (mark >= 50 && mark <= 59) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Your grade is :", grade);
