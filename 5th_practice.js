//practice #ques 1
// function vowelsFind(word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (
//       word[i] == "a" ||
//       word[i] == "e" ||
//       word[i] == "i" ||
//       word[i] == "o" ||
//       word[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// vowelsFind(prompt("Put a string in lowercase"));

// let arrowVowelFind = (word) => {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (
//       word[i] == "a" ||
//       word[i] == "e" ||
//       word[i] == "i" ||
//       word[i] == "o" ||
//       word[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };

// arrowVowelFind(prompt("Put a string in lowercase"));

//practice #ques 2
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((val) => {
//   console.log(val ** 2);
// });

// let calSqr = (val) => console.log(val ** 2);

// arr.forEach(calSqr);

//practice ques #3
// let marks = [23, 56, 98, 43, 90, 89, 12, 91];
// let newArr = marks.filter((val) => {
//     return val >= 90;
// });
// console.log(newArr);
//practice ques #4
// let n = prompt('Enter a Number');
// let initial = [];
// for (let i =1; i <= n; i++) {
//     initial.push(i);
// }
// console.log(initial);

// let sum = initial.reduce((res,val) => {
//     return res = res + val;
// });
// console.log(sum);

// let mul = initial.reduce((res,val) => {
//     return res = res * val;
// });
// console.log(mul);