const cookie = document.getElementById("cook");
const points = document.getElementById("point");
const firstBox = document.getElementsByClassName("first")[0];
const buttons = document.querySelectorAll("button");
const secondBox = document.getElementById("box");
const lastBox = document.getElementById("last");
const upgrade = document.getElementsByClassName("upg");
const img = document.getElementById("cook");
const result = document.getElementById("allPoints");

let bool = false;
let num = 6000;
let n = 1;

const resultPrint = {
    pointsPrint: () => {
        result.innerText = `All points: ${num}`;
    }
}

buttons[1].onclick = () => {
    firstBox.style.display = "none";
    secondBox.style.display = "flex"
}

buttons[2].onclick = () => {
    window.location.reload();
}

buttons[0].onclick = () => {
    bool = !bool;
    if (bool) {
        firstBox.style.display = "none";
        secondBox.style.display = "none";
        lastBox.style.display = "none";
        buttons[0].innerText = "Back";
        upgrade[0].style.display = "flex";
        upgrade[1].style.display = "flex";
        upgrade[2].style.display = "flex";
        upgrade[3].style.display = "flex";
        upgrade[4].style.display = "flex";
        upgrade[5].style.display = "flex";
        upgrade[6].style.display = "flex";
        resultPrint.pointsPrint();
    } else {
        firstBox.style.display = "none";
        secondBox.style.display = "flex";
        lastBox.style.display = "flex";
        buttons[0].innerText = "Shop";
        upgrade[0].style.display = "none";
        upgrade[1].style.display = "none";
        upgrade[2].style.display = "none";
        upgrade[3].style.display = "none";
        upgrade[4].style.display = "none";
        upgrade[5].style.display = "none";
        upgrade[6].style.display = "none";
        result.innerText = ``;
    }
}

let upg1 = false;
let upg2 = false;
let upg3 = false;
let interval = 0;
upgrade[0].onclick = () => {

    upg1 = true;
    if (upg1 === true && num >= 100) {
        num = num - 100;
        upg1 = false;
        n = 2;
    }
    if (upg1 === true && num < 100) {
        alert("Neuztenka tasku");
        upg1 = false;
    }
    resultPrint.pointsPrint();
    // secondBox.style.display = "flex";
    // lastBox.style.display = "flex";
    // upgrade[0].style.display = "none";
    // upgrade[1].style.display = "none";
    // upgrade[2].style.display = "none";

}
cookie.onclick = function counter() {
    num += n;
    points.innerHTML = num;
}

upgrade[1].onclick = () => {

    upg2 = true;
    if (upg2 === true && num >= 500) {
        num = num - 500;
        points.innerHTML = num;
        upg2 = false;
        n = 5;
    }
    if (upg2 === true && num < 500) {
        alert("Neuztenka tasku");
        upg2 = false;
    }
    resultPrint.pointsPrint();
}

upgrade[2].onclick = () => {

    upg3 = true;
    if (upg3 === true && num >= 1000) {
        num = num - 1000;
        points.innerHTML = num;
        upg3 = false;
        n = 10;
    }
    if (upg3 === true && num < 1000) {
        alert("Neuztenka tasku");
        upg3 = false;
    }
    resultPrint.pointsPrint();
}

upgrade[3].onclick = () => {
    if (num >= 300) {
        num = num - 300;
        points.innerHTML = num;
        secondBox.style.background = "#ffa8ee";
    } else {
        alert("Neuztenka tasku");
    }
    resultPrint.pointsPrint();
}

upgrade[4].onclick = () => {
    if (num >= 200) {
        num = num - 200;
        points.innerHTML = num;
        document.getElementById("cook").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6o7RKKMOgXNaVaGqymXIYCavtqccT16-CA&usqp=CAU";
        img.style.borderRadius = "50%";
    } else {
        alert("Neuztenka tasku");
    }
    resultPrint.pointsPrint();
}

upgrade[5].onclick = () => {
    if (num >= 400) {
        num = num - 400;
        points.innerHTML = num;
        img.classList.add("animation");
    } else {
        alert("Neuztenka tasku");
    }
    resultPrint.pointsPrint();
}

upgrade[6].onclick = () => {
    clearInterval(interval); // isvalo intervala, kitaip kuo daugaiu spausi, tuo daugiau paleisi intervalu
    if (num >= 600) {
        num = num - 600;
        points.innerHTML = num;
        interval = setInterval(counter, 1000);
        function counter() {
            num += 1;
            points.innerHTML = num;
        }
    } else {
        alert("Neuztenka tasku");
    }
    resultPrint.pointsPrint();
}
// - 2x Click (price 100$) - Adds two points on click
// - 5x Click (price 500$) - Adds five points on click
// - 10x Click (price 1000$) - Adds ten points on click


//- new background (price 300$) - change background image of gameplay window
//- new cookie (price 200$) - change image of cookie to some other
//- cookie spin (price 400$) - Make cookie spin (you have to createa animation in css and add the class to cookie image with javascript)
//- helper (600$) - automatically adds one cookie every 1 second (javascript setInterval)
