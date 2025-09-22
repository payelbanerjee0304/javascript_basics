//console directory print
// console.dir(window.document);
// console.dir(window.document.body.childNodes[1]); //h1
// // document.body.style.background = "green"; //background green
// document.body.childNodes[1].innerText = "abcd"; //h1 abcd
// // document.getElementById('heading').innerText = "zzz";
// console.log(document.getElementById('heading').innerText);//abcd
// console.log(document.getElementsByClassName('header')); //HTMLCollection(3) [h1#heading.header, h1.header, h4.header, heading: h1#heading.header]
// console.log(document.getElementsByTagName('p'));
//query selector
// console.log(document.querySelector('p'));
// console.log(document.querySelectorAll('p'));

// const firstElement = document.querySelector('p');
// console.log(firstElement.tagName);
// console.log(firstElement.innerText);
// console.log(document.querySelector('div').children); //HTMLCollection(3) [p, div, span]
// console.dir(document.querySelector('div').innerText); //Fruits\nMango\nAPPLE\nlichi
// console.dir(document.querySelector('div').innerHTML); //<h1>Fruits</h1><ul><li>Mango</li><li>APPLE</li><li>lichi</li></ul>
// document.querySelector('h1').innerHTML = "<h6>Raw Fruits</h6>";
// console.log(document.querySelector('h1').innerHTML);
let heading = document.querySelector("h1");
console.log(heading.textContent);