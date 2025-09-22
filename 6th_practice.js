// document.querySelector("h2").innerText = "Hello JavaScript From Apna College Students";
h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " From Apna College Students";
console.log(h2.innerText);

let divs = document.querySelectorAll('.box');
// divs[0].innerHTML = "<h4>abc</h4>";
// divs[1].innerHTML = "<h4>def</h4>";
// divs[2].innerHTML = "<h4>ghi</h4>";
let idx = 1;
for (let div of divs) {
    div.innerHTML = `new div is with ${idx} box`;
    idx++;
}
// console.log(divs);