let btn1 = document.querySelector('#btn1');
// // btn1.onclick = () => {
// //     console.log("hello");
// //     let a = 25;
// //     a++;
// //     console.log(a);
// // }
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
    
// }
// // btn1.onclick = () => {
// //     console.log("hi");
// //     let a = 50;
// //     a++;
// //     console.log(a);
// // }
// let div1 = document.querySelector('#div1');
// div1.onmouseover = () => {
//     console.log('mouse-hover');
// }
let event3 =() => {
    console.log("hiiiiiiiiiii-3");
}
btn1.addEventListener('click', () => {
    console.log("hiiiiiiiiiii");
})
btn1.addEventListener('click', () => {
    console.log("hiiiiiiiiiii-2");
})
btn1.addEventListener('click', event3);
btn1.addEventListener('click', () => {
    console.log("hiiiiiiiiiii-4");
})

btn1.removeEventListener('click', event3);
