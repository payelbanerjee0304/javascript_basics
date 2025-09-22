let div = document.querySelector("div");
console.log(div);
console.log(div.getAttribute("id"));
console.log(div.getAttribute("name"));
div.setAttribute("id", "box1");
console.log(div);
div.style.backgroundColor = "green";
// div.style.visibility = "hidden";

// append el
let newBtn = document.createElement("button"); //create
newBtn.innerText = "click";
div.append(newBtn);
//prepend el
let head = document.createElement("h1");
head.innerText = "This is my heading";
head.style.color = "white";
div.prepend(head);
console.log(newBtn.innerText);
// console.log(newBtn.innerText);

// append el
let firstBtn = document.createElement("button"); //create
firstBtn.innerText = "open";
div.after(firstBtn);
//prepend el
let topHead = document.createElement("h3");
topHead.innerText = "This is my topHeading";
topHead.style.color = "orange";
div.before(topHead);

//remove el
let para = document.querySelector("#para");
para.remove();
