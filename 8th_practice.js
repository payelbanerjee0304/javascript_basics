let btn = document.querySelector('#btn');
let body = document.querySelector('body');

// btn.addEventListener('click', () => {
//     console.log('btn');
//     body.style.backgroundColor= '#000';
// });
// btn.addEventListener('dblclick', () => {
//     console.log('btn');
//     body.style.backgroundColor= '#fff';
// });
let mode = 'light';
btn.addEventListener('click', () => {
    // console.log();
    if (mode == "light") {
        mode = "dark";
        // body.style.backgroundColor = "#000";
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        mode = "light";
        // body.style.backgroundColor = "#fff";
        body.classList.add('light');
        body.classList.remove('dark');
    }
    console.log(mode);
});

let div = document.querySelector('#spanJS');
let hover = 'hover';
div.addEventListener('mouseover', () => {
    // div.classList.remove('spanJs');
    if (hover == "hover") {
        hover = "not-hover";
        console.log(hover);
        div.style.backgroundColor = "green";
    } else {
        hover = "hover";
        console.log(hover);
        div.style.backgroundColor = "rgb(187, 151, 105)";
    }
});