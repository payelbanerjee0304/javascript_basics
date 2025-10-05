console.log("hello");

let body = document.querySelector("body");
let newBtn = document.createElement("button");
newBtn.textContent = "click";

newBtn.style.color = "red";
newBtn.style.backgroundColor = "white";
body.prepend(newBtn);

let para = document.querySelector("p");
// para.setAttribute('class', 'newPara');
para.classList.add("newPara");
console.log(para.classList); //DOMTokenList(2) ['paragraph', 'newPara', value: 'paragraph newPara']
