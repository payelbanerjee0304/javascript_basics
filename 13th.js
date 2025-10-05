const url = "https://dogapi.dog/api/v2/breeds";
// let promise = fetch(url);
// console.log(promise);
let type = document.querySelector("#type");
let btn = document.querySelector("#btn");

//async-await
const getFacts = async () => {
  console.log("getting data");
  let response = await fetch(url);
  console.log("success", response.status);
  console.log("success", response);
  let data = await response.json();
  console.log(data.data[0].type);
  type.innerText = data.data[0].type;
};
//promise
// function getFacts() {
//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       type.innerText = data.data[0].type;
//     });
// }
btn.addEventListener("click", getFacts);
// getFacts();
// (async () => {
//   console.log("getting data");
//   let response = await fetch(url);
//   console.log("success", response);
// })();
