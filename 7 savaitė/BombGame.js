const container = document.querySelector(".container");
const box = document.getElementsByClassName("box");
const h = document.querySelector("h1");

//susikuriu 10x10 langeliu lenta
for (let i = 0; i < 100; i++) {
    container.innerHTML += `<div class="box">`;
}
//sugeneruoju array su atsitiktinem reiksmem, 10 proc ju - true (true- bomba, false - nera bombos)
const valueArr = [];
let counter = 0;
let points = 0;
let click = [];
click.length = 100;

click.fill("true");
console.log(click, "first clicl")

h.innerText = `Score: ${points}`;
let count = 0;


for (let i = 0; i < 100; i++) {
    let n = Math.random() > 0.89;
    if (n) {
        n = 1;
        count++;
    } else {
        n = 0;
    }
    if (n === 1 && count > 10) {
        n = 0;
    }
    valueArr.push(n);
    console.log(valueArr)
}

//tikrinimas, kiek bombu
for (let i = 0; i < 100; i++) {
    if (valueArr[i] === 1) {
        counter++
    }
}
console.log(counter)


for (let j = 0; j < 100; j++) {
    console.log(click[j], "click")
    box[j].onclick = () => {
        if (valueArr[j]) {
            GameOver();
            box[j].classList.add("red");
            box[j].innerHTML = `<i class="fas fa-bomb fa-2x"></i>`;
        } else if (click[j] === "true") {
            click[j] = "false";
            //box[j].style.pointerEvents = "none"; tas pats ka as su IF padariau click[j] - kad neitu paspaust daugiau nei karta ir nepliusuotu tasku
            box[j].classList.add("green");
            points++;
            h.innerText = `Score: ${points}`;
        }
    }
}



function GameOver() {
    alert("GAME OVER");
    points = 0;
    for (let i = 0; i < 100; i++) {
        if (valueArr[i]===1){
            box[i].classList.add("red");
            box[i].innerHTML = `<i class="fas fa-bomb fa-2x"></i>`;
        }
    }
    document.location.reload();
}



