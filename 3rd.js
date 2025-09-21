//FOR Loop
// for (let i = 1; i <= 5; i++) {
//   console.log("payel");
// }

// //calculate sum of 1 to 5
// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//   sum += i;
// }
// console.log("Sum = ", sum);

// for (var i = 1; i <= 5; i++) {
//   console.log("i= ", i);
// }
// console.log(i); //prints only if use var

//WHILE Loop
// let i = 1;
// while (i <= 5) {
//   console.log("payel");
//   i++;
// }

//Do-While Loop
// let i = 20;

// do {
//   console.log("payel");
//   i++;
// } while (i <= 10);

//for-of loop

// let str = "payel";
// let size = 0;
// for (let i of str) {
//   console.log("i= ", i);
//   size++;
// }
// console.log("size of the string = ", size);

//for-in loop
// let student = {
//   name: "payel",
//   age: 19,
//   cgpa: 90,
//   isPass: true,
// };
// for (let i in student) {
//   console.log("key =", i, "value = ", student[i]);
// }

//String
// let str = "Payel";
// let str2 = "Banerjee";
// console.log(str.length); //string length
// console.log(str[4]); //position access

// //tempate literals
// let sentence = `this is a template literal`;
// console.log(typeof sentence);
// let obj = {
//   item: "pen",
//   price: 10,
// };
// console.log("The cost of", obj.item, "is", obj.price); //normal string process
// console.log(`The cost of ${obj.item} is ${obj.price}`); //using template literal
// console.log(`this is an example ${1 + 2 + 3}`);
// console.log("Payel\nBanerjee");
// console.log("Payel\tBanerjee");
// strn = "Payel\nBanerjee";
// console.log(strn.length);
//string methods in js
//upper case
// let str3 = "Ms Banerjee";
// let newStr3 = str3.toUpperCase();
// console.log(str3);
// console.log(newStr3);
//lower case
// let str4 = str3.toLowerCase();
// console.log(str4);
//trim method
// str5 = " payel  banerjee    ";
// console.log(str5.trim());
//slice method
// str6 = "Payel Banerjee";
// console.log(str6.slice(0, 3));
//concatination method
// str1 = "hello";
// str2 = "world";
// console.log(str1.concat(str2)); //helloworld
// console.log(str1 + str2);//hello world
//replace method
// str = "hello lolo";
// console.log(str.replace("lo", "p")); //help lolo
// str1 = "hello hello he";
// console.log(str1.replaceAll("he", "a"));//allo allo a

//charAt method
str = "I love JS";
console.log(str.charAt(0)); //I
