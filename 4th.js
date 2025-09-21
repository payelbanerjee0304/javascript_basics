// let marks_student1 = 97;
// let marks_student2 = 85;
// //obj type storewz
// let marks = {
//   stu1: 97,
//   stu2: 85,
// };
// let mark = [97, 85, 45, 65, 54];
// console.log(mark);
// console.log(mark.length);
// console.log(mark[3]);
// mark[0] = 93;
// console.log(mark);

// let names = ["payel", "ankita", "harish", "asutosh", "pinki"];
//for loop
// for (let idx = 0; idx < names.length; idx++) {
//   console.log(names[idx]);
// }
// //for-of loop
// for (let el of names) {
//   //el=>element
//   console.log(el);
// }
// let cities = ["delhi", "kolkata", "mumbai", "chennai", "hydrabad"];
// for (let city of cities) {
//   console.log(city.toUpperCase());
// }
// for (let city of cities) {
//   console.log(city.toLowerCase());
// }
//Methods of array
let foods = ["potato", "apple", "tomato", "cold-drinks"];
//push methods
// foods.push("chips", "paneer", "pan");
// console.log(foods); //(7) ['potato', 'apple', 'tomato', 'cold-drinks', 'chips', 'paneer', 'pan']
//pop methods
// let deletedFood = foods.pop();
// console.log(foods); //(6) ['potato', 'apple', 'tomato', 'cold-drinks', 'chips', 'paneer']
// console.log("Deleted food =", deletedFood);
//toString method
// console.log(foods.toString());
// console.log(foods);

// let cars = ["alto", "maruti", "skoda", "honda", "hundai"];
// let flowers = ["rose", "lotus", "sunflower"];
// //concatination mathod
// console.log(foods.concat(cars, flowers));
//unshift method
// foods.unshift("chips");
// console.log(foods);
//shift method
// deletedFoods = foods.shift();
// console.log(foods);
// console.log(deletedFoods);
//slice method
// console.log(foods.slice(1, 3)); //(2) ['apple', 'tomato']
// console.log(foods.slice(1));//(3) ['apple', 'tomato', 'cold-drinks']
//splice method
let numaric = [1, 2, 3, 4, 5, 6, 7];
// console.log(numaric);
// numaric.splice(2, 2, 100, 101);
// console.log(numaric);//(7) [1, 2, 100, 101, 5, 6, 7]
// foods.splice(2, 0, "pan"); //no need to delete
// console.log(foods);
// (5)[("potato", "apple", "pan", "tomato", "cold-drinks")];
// flowers.splice(1, 1);
// console.log(flowers); //(2) ['rose', 'sunflower']
// numaric.splice(3, 1, 101);
// console.log(numaric); //(7) [1, 2, 3, 101, 5, 6, 7]
deletednumaric = numaric.splice(4);
console.log(numaric);
console.log("deleted = ", deletednumaric);
