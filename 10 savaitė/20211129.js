const h = document.querySelector("h1");
const btn = document.querySelector(".btn");

function randomNum (){
    return Math.round(Math.random()*100)
}

h.innerHTML = `${randomNum()}`;

btn.onclick = () => {
    h.innerHTML = `${randomNum()}`;
}
