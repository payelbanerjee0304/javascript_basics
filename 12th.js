// console.log("one");
// console.log("two");

// function hello() {
//   console.log("hello");
// }
// setTimeout(hello, 4000);

// console.log("three");

// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }
// calculator(2, 3, sum);

//callback function
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log(dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// //callback hell
// getData(123, () => {
//   console.log("getting data 2");
//   getData(456, () => {
//     console.log("getting data 3");
//     getData(789, () => {
//       console.log("getting data 4");
//       getData(432243432423432);
//     });
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   // resolve("success"); //Promise {<fulfilled>: 'success'}
//   reject("some error, we got"); //Promise {<rejected>: 'some error, we got'}[[Prototype]]Promise[[PromiseState]"rejected"[[PromiseResult]]"some error, we got"
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(dataId);
//       // resolve("success");
//       reject("error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// } //let promise = getData(123)undefined promise Promise {<pending>}12th.js:49 123 promise Promise {<fulfilled>: 'success'}

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("this is a promise");
//     resolve("success");
//     // reject("network error");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log(res);
//   console.log("promise fulfilled");
// });

// promise.catch((err) => {
//   console.log(err);
//   console.log("rejected");
// });

function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 4000);
  });
}
function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 4000);
  });
}
// console.log("fetching data1");
// let p1 = new asyncFun1();
// p1.then((res) => {
//   console.log(res);
// });
// console.log("fetching data2");
// let p2 = new asyncFun2();
// p2.then((res) => {
//   console.log(res);
// });

//PROMISE CHAINING
// console.log("fetching data1");
// let p1 = new asyncFun1();
// p1.then((res) => {
//   console.log(res);
//   console.log("fetching data2");
//   let p2 = new asyncFun2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });
// console.log("fetching data1");
// asyncFun1().then((res) => {
//   console.log(res);
//   console.log("fetching data2");
//   asyncFun2().then((res) => {
//     console.log(res);
//   });
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       // reject("error");
//     }, 5000);
//   });
// }

//using promise chain

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//async await
// async function hello() {
//   console.log("hello");
// }

// console.log(hello());//hello Promise {<fulfilled>: undefined}
// //It gives a promise if async writes

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 3000);
  });
}
async function getWeatherData() {
  await api(); //1st call
  await api(); //2nd call
}

//using async-await
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      // reject("error");
    }, 2000);
  });
}

// async function getDataInfo() {
//   console.log("getting data 1");
//   await getData(1);
//   console.log("getting data 2");
//   await getData(2);
//   console.log("getting data 3");
//   await getData(3);
// }
// console.log(getDataInfo()); //getting data 1 data 1 188 getting data 2 178 data 2 190 getting data 3 178 data 3
//IIFE
(async function () {
  console.log("getting data 1");
  await getData(1);
  console.log("getting data 2");
  await getData(2);
  console.log("getting data 3");
  await getData(3);
})();
