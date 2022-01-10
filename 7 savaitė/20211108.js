// pirma uzd - tik mygtuko sukurimas
// const button = document.getElementById("btn");
//
// button.addEventListener("click", myFunction);
//
// function myFunction(){
//     document.getElementById("btn").innerHTML = "Upsss";
//     console.log("Paspaustas");
// }
//
// //kitaip - trumpiau
// button.onclick = () => {
//     console.log("Paspaustas again");
// }


////////////////////////////////////////////////////////////
const btn = document.querySelectorAll("button");
const btn1 = document.getElementById("firstButton");
const btn2 = document.getElementsByClassName("myButton")[0]; // getElementsByClassName grazina visa masyva (array) -
// jei butu daugiau tokiu klasiu, siuo atveju, tai tik viena ir yra
const head = document.querySelectorAll("h1");

btn[1].onclick = () => {
    btn[1].innerHTML = "Su querySelector";
    console.log("Paspaustas0");
}

btn1.addEventListener("click", clicked);

function clicked() {
    btn1.innerHTML = "getElementById";
    console.log("Paspaustas1");
}


console.log(btn2);
btn2.addEventListener("click", clicked2);

function clicked2() {
    btn2.innerHTML = "getElementsByClassName";
    console.log("Paspaustas2");
}

/////////////////////////////////////////
const btn10 = document.querySelectorAll("button");
const h10 = document.querySelectorAll("h1");
const box = document.querySelectorAll("div");
//console.log(btn10)
//console.log(h10)


btn10[4].onclick = () => {
    h10[1].innerText = "Labas rytas";
    // h10[1].style.backgroundColor = "darkgrey";
    box[0].style.backgroundColor = "#ee8caa";
    box[0].style.borderRadius = "20%";
}

btn10[5].onclick = () => {
    h10[2].innerText = "Laba diena";
    box[2].style.backgroundColor = "green";
    box[1].style.borderRadius = "50%";
}

btn10[6].onclick = () => {
    h10[3].innerText = "Labas vakaras";
    box[1].style.backgroundColor = "yellow";
    box[2].style.borderRadius = "8%";
}

//<button onClick="history.go(0);">Refresh Page</button>
//mygtukas, refreshinantis puslapi ji paspaudus

btn[0].onclick = () => {
    window.location.reload();
}

const lastBox = document.getElementById("boxLast");
const word = document.querySelector("span");

btn[7].onclick = () => {
    h10[4].innerHTML = h10[4].innerHTML.replace('L', '<span style="color: green;">L</span>');
}

btn[8].onclick = () => {
    h10[4].innerHTML = h10[4].innerHTML.replace('B', '<span style="color: red;">B</span>');
}

btn[9].onclick = () => {
    h10[4].innerHTML = h10[4].innerHTML.replace('S', '<span style="color: blue;">S</span>');
}

const turnOn = document.getElementById("littleBox2");
const text = document.querySelector("h4");
const littleBox = document.getElementById("littleBox3");



let bool = true;

    turnOn.onclick = () => {
        bool = !bool;
        if (bool) {
            text.innerText = "Turn off";
            littleBox.style.background = "none";
        } else {
            text.innerText = "Turn on";
            littleBox.style.background = "green";
            //   window.location.reload();
        }
    }
